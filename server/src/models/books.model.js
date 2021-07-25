const { Schema, model } = require('mongoose');

const bookSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

const BookModel = model('Book', bookSchema);

module.exports = BookModel;
