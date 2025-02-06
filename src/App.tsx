import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BooksList from "./pages/BooksList";
import AddBook from "./pages/AddBook";
import Navbar from "./components/Navbar";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BooksList />} />
      <Route path="/add" element={<AddBook />} />
    </Routes>
  </BrowserRouter>
);

export default App;
