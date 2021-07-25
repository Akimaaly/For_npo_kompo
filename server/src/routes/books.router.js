/* eslint-disable object-curly-newline */
const router = require('express').Router();
const BookModel = require('../models/books.model');

router.get('/all', async (req, res) => {
  try {
    const allBooks = await BookModel.find();
    res.json(allBooks);
  } catch (e) {
    console.error(e);
  }
});

router.post('/new', async (req, res) => {
  const { title, pages, year, author } = req.body;
  try {
    const newBook = await BookModel.create({
      title,
      pages,
      year,
      author,
    });
    res.json(newBook);
  } catch (e) {
    console.error(e);
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    await BookModel.findByIdAndDelete(req.params.id);
    res.sendStatus(200);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
