import User from '../models/User'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
  const credential = req.body

  if (!credential?.email || !credential?.password) {
    return res.status(400).json({ error: 'Invalid parameter.', message: 'Please send all parameters.' })
  }

  try {
    const userFound = await User.findOne({ email: credential.email })

    if (!userFound) return res.status(404).json({ error: 'Authentication failed.', message: 'User not found.' })
    if (userFound.password !== credential.password) return res.status(401).json({ error: 'Authentication failed.', message: 'Invalid password.' })

    const token = jwt.sign({ id: userFound._id }, process.env.SECRET_KEY, {
      expiresIn: 86400
    })

    return res.json({ access_token: token })
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error.', message: 'There was an error authenticating.' })
  }
}
