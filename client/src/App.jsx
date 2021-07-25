import AddingBookForm from './components/AddingBookForm/AddingBookForm';
import BooksList from './components/BooksList/BooksList';
import styles from './styles.module.css';
function App() {
  return (
    <>
      <h1>Добро пожаловать в приложение "Список Книг"!</h1>
      <div className={styles.container}>
        <div className={styles.add_books}>
          <AddingBookForm />
        </div>
        <div className={styles.books_list}>
          <BooksList />
        </div>
      </div>
    </>
  );
}

export default App;
