import jwt from 'jsonwebtoken'
import User from '../models/User'

export const validateToken = async (req, res, next) => {
  const accessToken = req.headers['x-access-token']

  if (!accessToken) {
    return res.status(400).json({ error: 'Invalid parameter.', message: 'Please send a token.' })
  }

  try {
    const { id } = jwt.verify(accessToken, process.env.SECRET_KEY)

    const user = await User.findById(id, { password: 0, name: 0, _id: 0, username: 0 })
    if (!user) return res.status(404).json({ error: 'Not Found.', message: 'User not found.' })

    next()
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error.', message: 'There was an error authenticating.' })
  }
}
