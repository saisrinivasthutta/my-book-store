//To Render Books List . Contains books
import { Link } from "react-router-dom";

import BookCard from "../BookCard";

import "./index.css";

const BookList = ({ booksList }) => {
  return (
    <ul className="book-list">
      {booksList.map((book) => (
        <Link style={{ "text-decoration": "none" }} to={`/books/${book.id}`}>
          <BookCard key={book.id} book={book} />
        </Link>
      ))}
      {booksList.length === 0 && <p>No books found.</p>}
    </ul>
  );
};

export default BookList;
