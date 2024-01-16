import mongoose from 'mongoose'
import User from '../models/User'

export const createUser = async (req, res) => {
  const user = req.body

  if (Object.keys(user).length === 0) {
    return res.status(400).json({ error: 'Save failed.', message: 'Please submit a user.' })
  }

  try {
    const newUser = new User(user)
    await User.validate(newUser)
    return res.status(201).json(newUser)
  } catch (error) {
    return res.status(400).json({ error: 'Save failed', message: 'Invalid user data. Please check the submitted user.' })
  }
}

export const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    return res.json(users)
  } catch (error) {
    return res.status(500).json({ error: 'Get users failed.', message: 'There was an error getting users.' })
  }
}

export const getUser = async (req, res) => {
  const id = req.params.id

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid parameter.', message: 'Please submit a valid ID.' })
  }

  try {
    const user = await User.findById(id)
    return res.json(user)
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error.', message: 'There was an error getting the user.' })
  }
}

export const updateUser = async (req, res) => {
  const id = req.params.id
  const user = req.body

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid parameter.', message: 'Please submit a valid ID.' })
  }

  if (Object.keys(user).length === 0) {
    return res.status(400).json({ error: 'Invalid parameter.', message: 'Please submit a user.' })
  }

  const updatedUser = {
    name: {
      firstname: user.name.firstname,
      lastname: user.name.lastname
    },
    _id: id,
    username: user.username,
    email: user.email,
    password: user.password
  }

  return res.json(updatedUser)
}

export const deleteUser = async (req, res) => {
  const id = req.params.id

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid parameter.', message: 'Please submit a valid ID.' })
  }

  return res.status(204).end()
}
