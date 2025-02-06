import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between">
      <h1 className="text-xl font-bold">Book Collection</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/books" className="hover:underline">Books</Link>
      </div>
    </nav>
  );
};

export default Navbar;
