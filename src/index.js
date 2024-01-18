import app from './app'
import './database'

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`)
})
