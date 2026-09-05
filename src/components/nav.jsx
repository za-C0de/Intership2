import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Share from "./sharebtn";

export default function Nav({ quotes, activeQuote }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full bg-gradient-to-r from-black/100 via-purple-900/90 to-purple-800/30 relative">
            <div className="flex justify-between items-center px-4 sm:px-6 py-4 sm:py-5">
                {/* Logo */}
                <div className="flex items-center gap-1">
                    <img src="favicon2.svg" alt="logo" className="w-8 h-8 sm:w-10 sm:h-10" />
                    <h2 className="text-xl sm:text-2xl header text-amber-600 font-bold">
                        OtakuVerse
                    </h2>
                </div>

                {/* Desktop links */}
                <div className="hidden md:flex gap-10">
                    <Link to="/" className="text-amber-50 text-xl body hover:text-amber-300 transition-colors">
                        Home
                    </Link>
                    <Link to="/About" className="text-amber-50 text-xl body hover:text-amber-300 transition-colors">
                        About
                    </Link>
                </div>

                {/* Desktop share button */}
                <div className="hidden md:block">
                    <Share
                        quoteText={activeQuote?.quote}
                        author={activeQuote?.author}
                        hasQuote={quotes.length > 0}
                    />
                </div>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden text-black"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>

            {/* Mobile dropdown */}
            {isOpen && (
                <div className="md:hidden flex flex-col pt-4 items-center gap-6 px-6 pb-6 bg-purple-900/95">
                    <Link
                        to="/"
                        className="text-amber-50 text-lg font-medium"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/About"
                        className="text-amber-50 text-lg font-medium"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                    <Share
                        quoteText={activeQuote?.quote}
                        author={activeQuote?.author}
                        hasQuote={quotes.length > 0}
                    />
                </div>
            )}
        </div>
    );
}