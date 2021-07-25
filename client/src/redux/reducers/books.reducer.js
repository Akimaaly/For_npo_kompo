import { BOOKS_GET, BOOKS_NEW, BOOKS_REMOVE, BOOKS_EDIT } from '../types';

export default function booksReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case BOOKS_GET: {
      return payload;
    }
    case BOOKS_NEW: {
      return [...state, payload]
    }
    case BOOKS_REMOVE: {
      return state.filter(el => el._id !== payload)
    }

    default:
      return state;
  }
}
