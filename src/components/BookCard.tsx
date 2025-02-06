import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBook } from "../redux/bookSlice";
import "../styles/BookCard.css";

interface BookProps {
  id: string;
  title: string;
  author: string;
  genre: string;
}

const BookCard = ({ id, title, author, genre }: BookProps) => {
  const dispatch = useDispatch();

  return (
    <div className="book-card">
      <h2 className="book-title">{title}</h2>
      <p className="book-author">by {author}</p>
      <p className="book-genre">{genre}</p>
      <div className="book-actions">
        <Link to={`/books/${id}`} className="view-link">View</Link>
        <button onClick={() => dispatch(deleteBook(id))} className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default BookCard;
