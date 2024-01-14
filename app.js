import express from 'express'
import morgan from 'morgan'
import authRoutes from './src/routes/auth.js'
import taskRoutes from './src/routes/tasks.js'
import { dbConnection } from './db.js'
import cookieParser from 'cookie-parser'
import { PORT } from './consts.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json()) // Parsea el body de la petición a JSON
app.use(cookieParser()) // Parsea las cookies que vienen en la petición a JSON

// Rutas
app.use('auth', authRoutes)
app.use('/tasks', taskRoutes)

dbConnection() // Conecta con la base de datos
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
