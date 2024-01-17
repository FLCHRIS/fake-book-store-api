import { Schema, model } from 'mongoose'

const bookSchema = Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  number_of_pages: Number,
  language: String,
  publication_date: {
    type: Date,
    required: true
  },
  dimensions: String,
  image: String,
  price: {
    type: Number,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
}, {
  versionKey: false
})

export default model('Book', bookSchema)
