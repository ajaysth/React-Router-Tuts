import BookCard from "./BookCard";

interface Book {
    id: string;
    title: string;
    author: string;
}

interface BooksListsProps {
    books: Book[];
}
const BooksLists = ({ books }: BooksListsProps) => {
    return (
        <>
            <div>BooksLists</div >
            
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}

            
        </>
    )
}

export default BooksLists