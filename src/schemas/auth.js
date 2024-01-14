import { z } from 'zod'
import { authSchemaMessages } from '../messages.js'

// Zod configuración
export const registerSchema = z.object({
  username: z
    .string({
      message: authSchemaMessages.usernameString
    })
    .min(6, {
      message: authSchemaMessages.usernameMin
    })
    .max(12, {
      message: authSchemaMessages.usernameMax
    }),
  email: z
    .string()
    .email({
      message: authSchemaMessages.emailString
    }),
  password: z
    .string()
    .min(8, {
      message: authSchemaMessages.passwordMin
    })
    .max(16, {
      message: authSchemaMessages.passwordMax
    })
})

export const loginSchema = z.object({
  email: z
    .string()
    .email({
      message: authSchemaMessages.emailString
    }),
  password: z
    .string()
    .min(8, {
      message: authSchemaMessages.passwordMin
    })
    .max(16, {
      message: authSchemaMessages.passwordMax
    })
})
