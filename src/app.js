import express from 'express'
import morgan from 'morgan'
import userRoutes from './routes/user.routes'

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/api/users', userRoutes)

export default app
