import { Zap, Users, Share2 } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Random Anime Inspiration",
        description: "Get a random quote with just one click. A perfect way to spark your creativity and positivity.",
    },
    {
        icon: Users,
        title: "Diverse Collection",
        description: "Thousands of quotes from famous authors, leaders, thinkers, and changemakers from around the world.",
    },
    {
        icon: Share2,
        title: "Share & Inspire",
        description: "Easily share your favorite quotes with friends and family across your favorite platforms.",
    }
]

export default function About() {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="absolute top-[-10%] left-[5%] w-72 h-72 bg-purple-400 rounded-full filter blur-3xl opacity-40"></div>
            <div className="absolute bottom-[10%] right-[2%] w-72 h-72 bg-indigo-400 rounded-full filter blur-3xl opacity-40"></div>

            <main className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 w-full">
                {/* Header */}
                <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 pt-10 text-center md:text-left">
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-semibold body text-gray-600">
                            About <span className="text-indigo-500">OtakuVerse</span>
                        </h1>
                        <p className="py-5 text-gray-600 max-w-md mx-auto header md:mx-0">
                            OtakuVerse is a simple and elegant quotes generator built to bring inspiration and motivation to your daily life.
                            <br className="hidden sm:block" />
                            Our mission is to make wisdom and knowledge from great minds easily accessible to everyone.
                        </p>
                    </div>
                    <img className="w-48 sm:w-56 md:w-72 flex-shrink-0" src="bg.jpeg" alt="OtakuVerse mascot cat wearing headphones" />
                </section>

                {/* Features */}
                <section className="flex flex-col gap-6 sm:gap-7 mt-10">
                    {features.map(({ icon: Icon, title, description }) => (
                        <div key={title} className="flex gap-4 sm:gap-6">
                            <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                                <Icon className="h-5 w-5 text-indigo-500" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-600 text-base sm:text-lg body">{title}</h3>
                                <p className="text-sm text-gray-600 mt-1 header">{description}</p>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Quote card */}
                <section className="flex justify-center my-12 md:my-16">
                    <div className="flex flex-col shadow-lg sm:flex-row items-center sm:items-start py-6 sm:py-7 gap-3 sm:gap-6 text-center w-full max-w-lg bg-indigo-200 rounded-xl px-6">
                        <img src="favicon2.svg" className="w-8 sm:mt-1" alt="" />
                        <div>
                            <p className="text-sm sm:text-base body">"If you don't take risks, you can't create a future."</p>
                            <p className="text-sm sm:text-base">— Monkey D. Luffy</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}