import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Book Collection</h1>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/books" className="nav-link">Books</Link>
        <Link to="/add" className="nav-link">Add Book</Link>
      </div>
    </nav>
  );
};

export default Navbar;
