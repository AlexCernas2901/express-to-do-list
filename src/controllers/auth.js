import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../utils.js/jwt.js'
import { authMessages } from '../messages.js'
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../../consts.js'

export const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const userFound = await User.findOne({ email })
    if (!userFound) {
      return res.status(400).json([authMessages.badCredentials])
    }

    const matchPassword = await bcrypt.compare(password, userFound.password)
    if (!matchPassword) {
      return res.status(401).json([authMessages.badCredentials])
    }

    const token = await createAccessToken({ id: userFound._id })

    res.cookie('token', token)
    res.status(201).json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

export const register = async (req, res) => {
  const { username, email, password } = req.body

  try {
    const userNameFound = await User.findOne({ username })
    if (userNameFound) {
      return res.status(400).json([authMessages.userAlreadyExists])
    }

    const userEmailFound = await User.findOne({ email })
    if (userEmailFound) {
      return res.status(400).json([authMessages.userAlreadyExists])
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = new User({
      username,
      email,
      password: hashPassword
    })
    const userSaved = await newUser.save()
    const token = await createAccessToken({ id: userSaved._id })

    res.cookie('token', token)
    res.status(201).json({
      message: authMessages.succesfullCreated,
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

export const logout = (req, res) => {
  res.cookie('token', '', {
    expires: new Date(0)
  })
  return res.sendStatus(200)
}

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id)
  if (!userFound) {
    return res.status(404).json({
      message: authMessages.userNotFound
    })
  }

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email
  })
}

export const verifyToken = async (req, res) => {
  const { token } = req.cookies
  if (!token) return res.send(false)

  jwt.verify(token, SECRET_KEY, async (error, user) => {
    if (error) return res.sendStatus(401)

    const userFound = await User.findById(user.id)
    if (!userFound) return res.sendStatus(401)

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email
    })
  })
}
