//To render a Book Item
import "./index.css";

const BookCard = ({ book }) => {
  const { title, author, genre, rating, book_image, publication_year } = book;

  return (
    <li className="book-item">
      <img src={book_image} alt="book" className="thumbnail" />
      <h1 className="title">{title}</h1>
      <p className="brand">Author: {author}</p>
      <p className="brand">Genre: {genre}</p>
      <p className="brand">Year of Publication: {publication_year}</p>
      <div className="book-details">
        <div className="rating-container">
          <p className="rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star"
          />
        </div>
      </div>
    </li>
  );
};
export default BookCard;
