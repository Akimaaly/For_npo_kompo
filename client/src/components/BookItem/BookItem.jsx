export default function BookItem({ book, removeHandler }) {
  return (
    <li>
      {book.author}, "{book.title}"<button>Edit</button>
      <button onClick={() => removeHandler(book._id)}>Remove</button>
    </li>
  );
}
