import { Outlet } from "react-router-dom";
import { useState , useEffect } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import fetchQuotes from "../api/api";

export default function Layout(){
    const [quotes , setQuotes] = useState([]);

    //Read the saved indexx once, synchronously , on first render - no effect needed
    const [currentQuote , setCurrentQuote] = useState(() => {
        const saved = localStorage.getItem('currentQuoteIndex');
        return saved !== null ? (Number(saved)) : 0;
    })

    // fetches quotes once on mount...
    useEffect(() => {
        fetchQuotes(25).then(data => {
            if (data) setQuotes(data)
        });
    },[]);

    useEffect(() => {
        localStorage.setItem("currentQuoteIndex" , currentQuote.toString());
    },[currentQuote])

    const safeIndex = quotes.length > 0 ? currentQuote % quotes.length : 0;
    const activeQuote = quotes[safeIndex];

    const handleClick = () => {
        // console.log('quotes length :',quotes.length);
        if (quotes.length === 0) return;
        setCurrentQuote((prevQuote) => Math.min(prevQuote + 1 , quotes.length - 1))
    }

    const handleClickPrev = () => {
        if(quotes.length === 0) return ;
        setCurrentQuote((prevQuote) => Math.max(prevQuote - 1 , 0)) // when it hits 0 like first quote it will stay the same it wont go indexing -1 , -2 like that
    }
    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Nav quotes={quotes} activeQuote={activeQuote} />
                <main className="flex-grow">
                    <Outlet context={{ quotes , safeIndex , activeQuote , handleClick ,handleClickPrev}} />
                </main>
                <Footer />
            </div>
        </>
    );
}