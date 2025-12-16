import { useParams } from "react-router-dom"
import books from "../data/books"

const BookDetails = () => {
    const { id } = useParams<{ id: string }>()
    const book = books.find(b=> b.id===id)
    if(!book){
        return <div>Book not found</div>
    }


  return (
    <>
        <div className="text-2xl">
            Book Details
        </div>
        <div>
            <h2 className="text-xl font-bold">{book.title}</h2>
            <p className="text-gray-600">{book.author}</p>
        </div>
    </>

  )
}

export default BookDetails