import express from 'express'
import morgan from 'morgan'
import 'dotenv/config'
import cors from 'cors'
import path from 'path'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import bookRouter from './routes/book.routes'
import categoryRouter from './routes/category.routes'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/images', express.static(path.resolve(__dirname, '../public/images')))
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/books', bookRouter)
app.use('/api/categories', categoryRouter)

export default app
