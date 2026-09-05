import { useOutletContext } from "react-router-dom";

export default function Home() {
    const { quotes, activeQuote, handleClick, handleClickPrev } = useOutletContext();

    return (
        <div className="relative min-h-screen overflow-hidden bg-white flex flex-col">
            {/* Background blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-72 h-72 md:w-96 md:h-96 bg-purple-700 rounded-full filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute top-[20%] right-[-10%] w-72 h-72 md:w-96 md:h-96 bg-fuchsia-800 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-10%] left-[30%] w-72 h-72 md:w-96 md:h-96 bg-indigo-800 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className="relative z-10 flex flex-1 flex-col items-center px-4 py-16 md:py-28">
                {/* Heading */}
                <h2 className="text-center">
                    <span className="text-3xl sm:text-5xl md:text-6xl text-gray-600 font-medium header2">
                        Find inspiration,
                    </span>
                    <br />
                    <span className="text-xl sm:text-3xl md:text-4xl font-semibold text-purple-500 body">
                        One Quote at a Time
                    </span>
                </h2>

                <div className="text-center text-base md:text-lg py-4 text-gray-600 body">
                    <p>
                        Click the button below to discover a random <br className="hidden sm:block" />
                        quote that motivates and inspires you.
                    </p>
                </div>

                {/* Quote card */}
                <div className="bg-purple-300 w-full max-w-xl min-h-[18rem] mt-4 flex flex-col items-center justify-center text-center px-6 sm:px-8 py-8 rounded-xl shadow-xl/10">
                    <img src="favicon2.svg" alt="logo" className="w-7 h-8 mb-2" />
                    <p className="py-2 text-gray-800 text-lg sm:text-xl">
                        {quotes.length > 0 ? activeQuote?.quote : "Loading..."}
                    </p>
                    <div className="w-8 border-b-2 border-gray-700 my-3"></div>
                    <p className="text-base sm:text-lg font-semibold text-green-700 body">
                        — {quotes.length > 0 ? activeQuote?.author : "...."}
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-4 py-12 md:py-20">
                    <button
                        onClick={handleClick}
                        className="bg-indigo-400 text-gray-100 cursor-pointer shadow-xl/10 font-medium px-5 py-3 rounded-lg hover:text-amber-300 hover:animate-pulse duration-[1s]"
                    >
                        New Quotes
                    </button>
                    <button
                        onClick={handleClickPrev}
                        className="bg-gray-300 text-gray-900 cursor-pointer shadow-xl/10 font-medium px-5 py-3 rounded-lg transition-all duration-[1s] ease-in-out hover:bg-purple-500 hover:text-gray-100 hover:scale-105 hover:shadow-lg active:scale-95"
                    >
                        Prev Quotes
                    </button>
                </div>

                {/* Stats */}
                <div className="w-full max-w-xl bg-indigo-100 rounded-xl shadow-md pt-4 pb-5 px-4 sm:px-8 mt-auto">
                    <div className="flex items-center justify-center gap-1 mb-5">
                        <img src="favicon2.svg" alt="" className="w-5 h-7" />
                        <h1 className="font-semibold text-gray-700">OtakuVerse Stats</h1>
                    </div>

                    <div className="flex flex-wrap justify-center divide-x divide-gray-300">
                        <div className="text-center px-4 sm:px-6">
                            <p className="font-bold text-xl text-purple-600 body">50+</p>
                            <p className="text-sm text-gray-500 body">Quotes Generated</p>
                        </div>
                        <div className="text-center px-4 sm:px-6">
                            <p className="font-bold text-xl text-purple-600 body">50+</p>
                            <p className="text-sm text-gray-500 body">Authors</p>
                        </div>
                        <div className="text-center px-4 sm:px-6">
                            <p className="font-bold text-xl text-purple-600 body">10+</p>
                            <p className="text-sm text-gray-500 body">Categories</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}