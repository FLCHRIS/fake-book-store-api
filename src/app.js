import express from 'express'
import morgan from 'morgan'
import 'dotenv/config'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)

export default app
