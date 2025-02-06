import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";

const BookForm = () => {
  const [book, setBook] = useState({ title: "", author: "", genre: "", description: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addBook({ ...book, id: crypto.randomUUID() }));
    navigate("/books");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <input placeholder="Title" className="w-full border p-2 mb-2" value={book.title} onChange={(e) => setBook({ ...book, title: e.target.value })} required />
      <input placeholder="Author" className="w-full border p-2 mb-2" value={book.author} onChange={(e) => setBook({ ...book, author: e.target.value })} required />
      <input placeholder="Genre" className="w-full border p-2 mb-2" value={book.genre} onChange={(e) => setBook({ ...book, genre: e.target.value })} required />
      <textarea placeholder="Description" className="w-full border p-2 mb-2" value={book.description} onChange={(e) => setBook({ ...book, description: e.target.value })} required />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Book</button>
    </form>
  );
};

export default BookForm;
