import { Link } from "react-router-dom";

interface Book {
    id: string;
    title: string;
    author: string;
}

interface BookCardProps {
    book: Book;
}


const BookCard = ({ book }: BookCardProps) => {
    return (
        <>
            <div className="border p-4 rounded shadow m-2 w-60">
                <h2 className="text-xl font-bold">{book.title}</h2>
                <p className="text-gray-600">{book.author}</p>
                <Link to={`${book.id}`} className=" bg-amber-800 rounded-2xl text-white p-2 mt-2 inline-block">
                    View Details
                </Link>
            </div>
        </>
    )
}

export default BookCard