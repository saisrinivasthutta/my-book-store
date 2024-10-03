import React, { useContext } from "react";
import { LibraryContext } from "../../context/LibraryContext";
import { Link } from "react-router-dom";

import BookList from "../../components/BookList";

const MyLibrary = () => {
  const { myLibrary } = useContext(LibraryContext);

  return (
    <div style={{ minHeight: "64vh" }}>
      <h1 style={{ "text-align": "center" }}>My Library</h1>
      {myLibrary.length === 0 ? (
        <div>
          <p>No Books are Added to your LIBRARY yet.</p>
          <Link style={{ textDecoration: "none" }} to="/">
            Go To Home and Add Books
          </Link>
        </div>
      ) : (
        <BookList booksList={myLibrary} />
      )}
    </div>
  );
};

export default MyLibrary;
