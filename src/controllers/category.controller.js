import mongoose from 'mongoose'
import Category from '../models/Category'
import Book from '../models/Book'

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find()

    return res.json(categories)
  } catch (error) {
    return res.status(500).json({ error: 'Get books failed.', message: 'There was an error getting categories.' })
  }
}

export const getBooksCategories = async (req, res) => {
  const id = req.params.id

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid parameter.', message: 'Please submit a valid ID.' })
  }

  try {
    const book = await Book.find({ 'category.id': id })

    if (!book) return res.status(404).json({ error: 'Get books failed.', message: 'Books not found.' })

    return res.json(book)
  } catch (error) {
    return res.status(500).json({ error: 'Get books failed.', message: 'There was an error getting categories.' })
  }
}
