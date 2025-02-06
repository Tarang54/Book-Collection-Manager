import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import "../styles/BookDetails.css";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const book = useSelector((state: RootState) =>
    state.books.books.find((b) => b.id === id)
  );

  if (!book) {
    return <div className="error-message">Book not found!</div>;
  }

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Description:</strong> {book.description}</p>
    </div>
  );
};

export default BookDetails;
