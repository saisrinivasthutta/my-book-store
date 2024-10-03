import React, { useContext } from "react";

import BookList from "../../components/BookList/";

import { LibraryContext } from "../../context/LibraryContext"; // Adjust the path based on your project structure
import "./index.css";

const Home = () => {
  const { filteredBooks } = useContext(LibraryContext);

  return (
    <div>
      <h1 className="heading">All Books</h1>
      <BookList booksList={filteredBooks} />
    </div>
  );
};

export default Home;
