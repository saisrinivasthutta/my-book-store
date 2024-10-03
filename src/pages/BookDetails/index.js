import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { LibraryContext } from "../../context/LibraryContext";

import "./index.css";

const BookDetails = () => {
  const { id } = useParams();
  const { addToLibrary } = useContext(LibraryContext);
  const { filteredBooks } = useContext(LibraryContext);
  const [bookAdded, setBookAdded] = useState(false);
  const [buttonText, setButtonText] = useState("Add To LIBRARY");

  //Finding the book from filteredBooks in the context by id extracted from params
  const book = filteredBooks.find((b) => b.id === parseInt(id));
  const {
    title,
    author,
    genre,
    rating,
    description,
    book_image,
    publication_year,
  } = book;

  // Handling Add To Library button click event
  const handleAddLibrary = () => {
    addToLibrary(book);
    setBookAdded(true);
    setButtonText("Added To LIBRARY");
  };

  return (
    <div className="book-details-container">
      <img src={book_image} alt="book" className="book-image" />
      <div className="book">
        <h1 className="book-name">{title}</h1>
        <p className="author-details">Author : {author}</p>
        <div className="label-value-container">
          <p className="label">Genre:</p>
          <p className="value">{genre}</p>
        </div>
        <p className="book-description">{description}</p>
        <div className="label-value-container">
          <p className="label">Year of Publication</p>
          <p className="value">{publication_year}</p>
        </div>

        <div className="rating-and-reviews-count">
          <div className="rating-container">
            <p className="rating">{rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        </div>

        <hr className="horizontal-line" />
        <button
          onClick={handleAddLibrary}
          type="button"
          className={`button add-to-library-btn ${bookAdded ? "added" : ""}`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
