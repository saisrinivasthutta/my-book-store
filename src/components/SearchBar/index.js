import React, { useContext } from "react";
import { LibraryContext } from "../../context/LibraryContext";

import "./index.css";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(LibraryContext);

  return (
    <input
      type="search"
      className="search-input"
      placeholder="Search by title, author, or genre..."
      value={searchQuery}
      //Calling setSearchQuery which is in context
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchBar;
