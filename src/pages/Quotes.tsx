import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

interface Quote {
  id: number;
  quote: string;
  author: string;
}


const Quotes = () => {
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    const getQuoteData = async () => {
      try {
        setLoading(true)
        const URL: string = "https://dummyjson.com/quotes"
        const response = await fetch(`${URL}`)
        if (!response.ok) {
          throw new Error("Failed to fetch quotes")
        }
        const data = await response.json()
        setQuotes(data.quotes)
      } catch (err) {
        console.log(err);
      }finally{
        setLoading(false)
      }
    }
    getQuoteData()
  }, [])

  if(loading){
    return <div className="text-2xl text-center">Loading...</div>
  }
  return (
    <>
      <div className="text-3xl text-center">Quotes</div>
      <div className="table-fixed">
        <table className="w-full border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-300 px-4 py-2">ID</th>
              <th className="border border-slate-300 px-4 py-2">Author</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((quote: Quote) => {
              return(
                  <tr key={quote.id}>
                    <td>
                    <Link to={`${quote.id}`}><td>{quote.id}</td></Link>
                  </td><td>
                    <Link to={`${quote.id}`}><td>{quote.author}</td></Link>
                  </td>                    
                  </tr>
                
              )

            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Quotes