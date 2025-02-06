import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import BookCard from "../components/BookCard";

const BooksList = () => {
  const books = useSelector((state: RootState) => state.books.books);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {books.map((book) => <BookCard key={book.id} {...book} />)}
    </div>
  );
};

export default BooksList;
