import BookItem from '../BookItem/BookItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBooks, removeBook } from '../../redux/actions/books.actions';

export default function BooksList() {
  const booksList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  const removeHandler = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <>
      <h2>Список книг</h2>
      {booksList.length ? (
        <ul>
          {booksList.map((el) => (
            <BookItem
              key={el._id}
              book={{ ...el }}
              removeHandler={removeHandler}
            />
          ))}
        </ul>
      ) : (
        <h3>Пока нету книг!</h3>
      )}
    </>
  );
}
