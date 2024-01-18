"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var bookSchema = (0, _mongoose.Schema)({
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
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}, {
  versionKey: false
});
var _default = exports["default"] = (0, _mongoose.model)('Book', bookSchema);