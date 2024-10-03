import React, { useState, createContext, useEffect } from "react";
import { books as booksData } from "../data/books";

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  //Storing books, value in search input and books in library
  const [books] = useState(booksData);
  const [myLibrary, setMyLibrary] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  //Adding book to library when clicked on Add to Library button
  const addToLibrary = (book) => {
    const exists = myLibrary.some((libBook) => libBook.id === book.id);
    if (!exists) {
      setMyLibrary([...myLibrary, book]);
    }
  };
  console.log(myLibrary);

  //Updating library whenever myLibrary changes
  useEffect(() => {
    console.log("Library updated:");
  }, [myLibrary]);

  //Filtering books based on search query
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <LibraryContext.Provider
      value={{
        books,
        myLibrary,
        addToLibrary,
        searchQuery,
        setSearchQuery,
        filteredBooks,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
};
