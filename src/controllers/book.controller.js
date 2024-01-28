import mongoose from 'mongoose'
import Book from '../models/Book'

export const createBook = async (req, res) => {
  const book = req.body
  if (Object.keys(book).length === 0) {
    return res.status(400).json({ error: 'Save failed.', message: 'Please submit a book.' })
  }

  try {
    const newBook = new Book(book)
    await Book.validate(newBook)
    return res.status(201).json(newBook)
  } catch (error) {
    return res.status(400).json({ error: 'Save failed', message: 'Invalid book data. Please check the submitted book.' })
  }
}

export const getBooks = async (req, res) => {
  const { limit, offset } = req.query || { limit: 0, offset: 0 }

  try {
    const books = await Book.find().skip(offset).limit(limit)

    return res.json(books)
  } catch (error) {
    return res.status(500).json({ error: 'Get books failed.', message: 'There was an error getting books.' })
  }
}

export const getBook = async (req, res) => {
  const id = req.params.id

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid parameter.', message: 'Please submit a valid ID.' })
  }

  try {
    const book = await Book.findById(id)

    if (!book) return res.status(404).json({ error: 'Get book failed.', message: 'Book not found.' })

    return res.json(book)
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error.', message: 'There was an error getting the book.' })
  }
}

export const updateBook = async (req, res) => {
  const id = req.params.id
  const book = req.body

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid parameter.', message: 'Please submit a valid ID.' })
  }

  if (Object.keys(book).length === 0) {
    return res.status(400).json({ error: 'Invalid parameter.', message: 'Please submit a book.' })
  }

  const updatedBook = {
    category: {
      id: book.category.id,
      name: book.category.name
    },
    _id: id,
    name: book.name,
    description: book.description,
    number_of_pages: book.number_of_pages,
    language: book.language,
    publication_date: book.publication_date,
    dimensions: book.dimensions,
    image: book.image,
    price: book.price,
    author: book.author
  }

  return res.json(updatedBook)
}

export const deleteBook = async (req, res) => {
  const id = req.params.id

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid parameter.', message: 'Please submit a valid ID.' })
  }

  return res.status(204).end()
}
