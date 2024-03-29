import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../../consts.js'

export const createAccessToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      SECRET_KEY, // secret key
      { expiresIn: 3600 },
      (error, token) => {
        if (error) reject(error)
        resolve(token)
      }
    )
  })
}
