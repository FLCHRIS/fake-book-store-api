import express from 'express'
import morgan from 'morgan'
import 'dotenv/config'
import cors from 'cors'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import bookRouter from './routes/book.routes'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/books', bookRouter)

export default app
