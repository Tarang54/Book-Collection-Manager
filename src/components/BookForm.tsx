import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";
import "../styles/BookForm.css";

const BookForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!book.title || !book.author || !book.genre || !book.description) {
      alert("All fields are required");
      return;
    }

    dispatch(
      addBook({ id: Date.now().toString(), ...book }) // Use timestamp as ID
    );
    navigate("/books");
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={book.title}
        onChange={handleChange}
        className="form-input"
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={book.author}
        onChange={handleChange}
        className="form-input"
        required
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={book.genre}
        onChange={handleChange}
        className="form-input"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={book.description}
        onChange={handleChange}
        className="form-textarea"
        required
      />
      <button type="submit" className="submit-button">
        Add Book
      </button>
    </form>
  );
};

export default BookForm;
