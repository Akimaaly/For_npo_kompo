export default function BookItem({ book, removeHandler, editHandler }) {
  return (
    <li>
      {book.author}, "{book.title}"
      <button onClick={() => editHandler(book._id)}>Edit</button>
      <button onClick={() => removeHandler(book._id)}>Remove</button>
    </li>
  );
}
