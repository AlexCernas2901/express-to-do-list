import { Router } from 'express'
import { login, register, logout, profile } from '../controllers/auth.js'
import { authRequired } from '../middlewares/tokenValidator.js'
import { schemaValidator } from '../middlewares/schemaValidator.js'
import { loginSchema, registerSchema } from '../schemas/auth.js'

const router = Router()

router.post('/login', schemaValidator(loginSchema), login)
router.post('/register', schemaValidator(registerSchema), register)
router.post('/logout', logout)
router.get('/profile', authRequired, profile)

export default router
