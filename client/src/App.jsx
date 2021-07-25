import AddingBookForm from './components/AddingBookForm/AddingBookForm';
import BooksList from './components/BooksList/BooksList';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles.module.css';
function App() {
  const allBooks = useSelector((state) => state.books);
  console.log(123, allBooks);
  return (
    <>
      <h1>Добро пожаловать в приложение "Список Книг"!</h1>
      <div className={styles.container}>
        <div className={styles.add_books}>
          <AddingBookForm />
        </div>
        <div className={styles.books_list}>
          <BooksList allBooks={allBooks} />
        </div>
      </div>
    </>
  );
}

export default App;
