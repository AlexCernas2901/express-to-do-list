import { middlewareMessages } from '../messages.js'
import { SECRET_KEY } from '../../consts.js'
import jwt from 'jsonwebtoken'

// Middleware para validar el token de acceso antes de acceder a una ruta
export const authRequired = (req, res, next) => {
  const { token } = req.cookies

  if (!token) {
    return res.status(401).json({
      message: middlewareMessages.unauthorized
    })
  }

  jwt.verify(token, SECRET_KEY, (error, decodedUser) => {
    if (error) {
      return res.status(403).json({
        message: middlewareMessages.unauthorized
      })
    }
    req.user = decodedUser
    next()
  })
}
