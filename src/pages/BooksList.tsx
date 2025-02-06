import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import BookCard from "../components/BookCard";
import "../styles/BookList.css";

const BooksList = () => {
  const books = useSelector((state: RootState) => state.books.books);

  return (
    <div className="books-list">
      {books.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  );
};

export default BooksList;
