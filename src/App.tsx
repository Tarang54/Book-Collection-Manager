import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BooksList from "./pages/BooksList";
import AddBook from "./pages/AddBook";
import BookDetails from "./components/BookDetails";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BooksList />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/books/:id" element={<BookDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
