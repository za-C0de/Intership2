export default function Footer() {
    return (
        <div className="bg-gray-800 py-6 px-6 md:px-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                {/* Logo */}
                <div className="flex items-center gap-1">
                    <img src="favicon2.svg" alt="logo" className="w-8" />
                    <h2 className="text-orange-500 font-medium">OtakuVerse</h2>
                </div>
                {/* Copyright */}
                <div>
                    <h2 className="text-sm body text-gray-300 text-center">
                        &copy; 2026 created using react and tailwind...
                    </h2>
                </div>
                {/* Social links */}
                <div className="flex gap-6 sm:gap-10">
                    <a
                        className="text-gray-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/repos?q=owner%3A%40me"
                    >
                        <img className="w-8 sm:w-9" src="github.png" alt="github" />
                    </a>
                    <a
                        className="text-gray-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/biplovtumbapo"
                    >
                        <img className="w-8 sm:w-9" src="linkdin.png" alt="linkdin" />
                    </a>
                </div>
            </div>
        </div>
    );
}