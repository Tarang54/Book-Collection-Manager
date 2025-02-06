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
      </div>
    </div>
  );
};

export default BookCard;
