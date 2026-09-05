import { useState } from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {Link as LinkIcon} from "lucide-react"

export default function Share({quoteText , author , hasQuote}) {

    const [open, setOpen] = useState(false);

    const shareText = hasQuote ? `"${quoteText}" — ${author}` : "Loading....";
    const pageUrl = window.location.href;

    const shareLinks = [
        {
            name: "Facebook",
            icon: FaFacebook,
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}&quote=${encodeURIComponent(shareText)}`
        },
        {
            name: "Linkedin",
            icon: FaLinkedin,
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`
        },
        {
            name: "WhatsApp",
            icon: FaWhatsapp,
            url: `https://wa.me/?text=${encodeURIComponent(shareText + " " + pageUrl)}`
        },
    ];

    const openShareWindow = (url) => {
        window.open(url, "_blank", "noopener,noreferrer,width=600,height=500");
        setOpen(false)
    };

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(`${shareText}\n${pageUrl}`);
        setOpen(false);
    }

    return (
        <>
            <div>
                <button
                    onClick={() => setOpen((prev) => !prev)}
                    disabled={!hasQuote}
                    className="bg-gradient-to-br from-emerald-300 via-green-300 to-violet-400 bg-100% animate-gradientShift text-gray-200 px-4 py-3 shadow-lg cursor-pointer header rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Share Quotes
                </button>
                {open && (
                    <>
                    <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
                    <div className="absolute right-4 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-100 z-20 overflow-hidden">

                        {/* Preview block — shows what will actually be shared */}
                            <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                                <p className="text-xs text-gray-500 mb-1">You're about to share:</p>
                                <p className="text-sm text-gray-800 italic line-clamp-3">{shareText}</p>
                            </div>

                        {shareLinks.map(({name , icon:Icon , url}) => (
                            <button
                            key={name}
                            onClick={() => openShareWindow(url)}
                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                                <Icon size={16} />
                                {name}
                            </button>
                        ))}
                        <button
                        onClick={copyToClipboard}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-blue-500 hover:bg-gray-50 border-t border-gray-100"
                        >
                            <LinkIcon size={16} />
                            Copy Link
                        </button>
                    </div>
                    </>
                )}
            </div>
        </>
    );
}