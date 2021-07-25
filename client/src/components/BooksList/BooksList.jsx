import BookItem from '../BookItem/BookItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBooks, removeBook } from '../../redux/actions/books.actions';

export default function BooksList({ allBooks }) {
  const booksList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  const removeHandler = (id) => {
    dispatch(removeBook(id));
  };

  const editHandler = (id) => {
    
  }
  return (
    <>
      <h2>Список книг</h2>
      {allBooks.length ? (
        <ul>
          {allBooks.map((el) => (
            <BookItem
              key={el._id}
              book={{ ...el }}
              removeHandler={removeHandler}
              editHandler={editHandler}
            />
          ))}
        </ul>
      ) : (
        <h3>Пока нету книг!</h3>
      )}
    </>
  );
}
