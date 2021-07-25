require('dotenv').config();

const { connectDB } = require('./index');
const BookModel = require('../models/books.model');

const booksForTesting = [
  {
    title: 'Красное Яблоко',
    pages: 500,
    year: 1975,
    author: 'Ч. Айтматов',
  },
  {
    title: 'Гарри Поттер и узник Азкабана',
    pages: 654,
    year: 1999,
    author: 'Джоан Роулинг',
  },
  {
    title: 'Конец Вечности',
    pages: 485,
    year: 1955,
    author: 'Айзек Азимов',
  },
];
const seed = async () => {
  connectDB();
  await BookModel.insertMany(booksForTesting);
};
seed();
