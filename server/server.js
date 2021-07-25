require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { connectDB } = require('./src/db');

const app = express();

const PORT = process.env.PORT || 3001;

connectDB();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log('Server started on port ', PORT);
});
