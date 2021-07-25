import { BOOKS_GET, BOOKS_NEW, BOOKS_REMOVE, BOOKS_EDIT } from '../types';
import axios from 'axios';

export const getAllBooks = () => async (dispatch) => {
  const allBooks = (await axios.get('http://localhost:8080/books/all')).data;
  return dispatch({
    type: BOOKS_GET,
    payload: allBooks,
  });
};

export const removeBook = (id) => async (dispatch) => {
  const response = await axios.delete(`http://localhost:8080/books/${id}`);
  console.log(response.status);
  return dispatch({
    type: BOOKS_REMOVE,
    payload: id,
  });
};
