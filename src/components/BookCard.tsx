import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBook } from "../redux/bookSlice";

interface BookProps {
  id: string;
  title: string;
  author: string;
  genre: string;
}

const BookCard = ({ id, title, author, genre }: BookProps) => {
  const dispatch = useDispatch();

  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm">by {author}</p>
      <p className="text-xs text-gray-500">{genre}</p>
      <div className="mt-2">
        <Link to={`/books/${id}`} className="text-blue-500 mr-2">View</Link>
        <button onClick={() => dispatch(deleteBook(id))} className="text-red-500">Delete</button>
      </div>
    </div>
  );
};

export default BookCard;
