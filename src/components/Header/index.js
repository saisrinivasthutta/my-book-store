import { Link } from "react-router-dom";
import logo from "../../assets/images/website-logo.png";

import SearchBar from "../SearchBar";

import "./index.css";

const Header = () => {
  return (
    <header>
      <nav className="nav-container">
        <Link to="/">
          <img className="logo-img" src={logo} alt="" />
        </Link>
        <ul className="nav-items-container">
          <li>
            <Link style={{ textDecoration: "none", color: "#754ef9" }} to="/">
              Home
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none", color: "#754ef9" }}
              to="/my-library"
            >
              My Library
            </Link>
          </li>
          <li>
            <SearchBar className="search-input" />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
