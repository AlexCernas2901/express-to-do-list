import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../utils.js/jwt.js'
import { authMessages } from '../messages.js'

export const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const userFound = await User.findOne({ email })
    if (!userFound) {
      return res.status(400).json({
        message: authMessages.badCredentials
      })
    }

    const matchPassword = await bcrypt.compare(password, userFound.password)
    if (!matchPassword) {
      return res.status(401).json({
        message: authMessages.badCredentials
      })
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
