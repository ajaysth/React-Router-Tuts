import BooksLists from "../components/BooksLists"
import books from "../data/books"
const Books = () => {
  return (
    <>
    <BooksLists books={books} />
    </>
  )
}

export default Books