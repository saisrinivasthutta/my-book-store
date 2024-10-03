import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import BookDetails from "./pages/BookDetails";
import MyLibrary from "./pages/MyLibrary";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import { LibraryProvider } from "./context/LibraryContext";

import "./App.css";

const App = () => (
  <LibraryProvider>
    <Router>
      <Header />
      <div className="main-container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/books/:id" element={<BookDetails />} />
          <Route exact path="/my-library" element={<MyLibrary />} />
          <Route exact path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </LibraryProvider>
);

export default App;
