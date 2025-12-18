import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

interface Quote {
    id: number;
    quote: string;
    author: string;
}


const QuotesDetails = () => {
    const { id } = useParams<string>();
    const [quoteDetails, setQuoteDetails] = useState<Quote | null>(null);
    useEffect(() => {
        const getQuoteDetails = async () => {

            try {
                const URL = `https://dummyjson.com/quotes/${id}`;
                const response = await fetch(`${URL}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch quote details");
                }
                const data: Quote = await response.json();
                setQuoteDetails(data);
            } catch (err) {
                console.log("Error fetching quote details", err);
            }
        }

        getQuoteDetails();
    }, [id]);


    return (
        <>
            <div>Quote Details Page - ID: {id}</div>
            <ul>
                <li>Quote: {quoteDetails?.quote}</li>
                <li>Author: {quoteDetails?.author}</li>
            </ul>
        </>
    )
}

export default QuotesDetails