import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newBook } from '../../redux/actions/books.actions';

export default function AddingBookForm() {
  const booksList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState({
    title: '',
    author: '',
    year: '',
    pages: '',
  });

  const changeHandler = (e) => {
    const field = e.target.id;
    const newValue = e.target.value;
    setFormFields((oldFields) => ({ ...oldFields, [field]: newValue }));
  };
  const onFormSubmit = (body) => {
    dispatch(newBook(body));
    setFormFields({
      title: '',
      author: '',
      year: '',
      pages: '',
    });
  };

  return (
    <>
      <h2>Добавь новую книгу</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onFormSubmit(formFields);
        }}
      >
        <input
          id='title'
          placeholder='Название книги'
          type='text'
          value={formFields.title}
          onChange={changeHandler}
        />
        <input
          id='author'
          placeholder='Автор'
          type='text'
          value={formFields.author}
          onChange={changeHandler}
        />
        <input
          id='year'
          placeholder='Год издания'
          type='number'
          value={formFields.year}
          onChange={changeHandler}
        />
        <input
          id='pages'
          placeholder='Количество страниц'
          type='number'
          value={formFields.pages}
          onChange={changeHandler}
        />
        <button>Добавить книгу</button>
      </form>
    </>
  );
}
