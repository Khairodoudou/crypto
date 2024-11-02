import { useState } from 'react';

export default function Body() {
    const [clearText, setClearText] = useState('');
    const [encryptedText, setEncryptedText] = useState('');
    const [shift, setShift] = useState(1); // State for shift value

    // Caesar Cipher function
    const caesarCipher = (text, shift) => {
        return text.replace(/[a-zA-Z]/g, (char) => {
            const start = char <= 'Z' ? 65 : 97;
            return String.fromCharCode(((char.charCodeAt(0) - start + shift) % 26) + start);
        });
    };

    // Handle encryption
    const handleEncrypt = () => {
        const result = caesarCipher(clearText, shift);
        setEncryptedText(result);
    };

    return (
        <div className="relative overflow-hidden">
            <div className="max-w-[85rem] mx-auto px-4 py-12">
                <div className="text-center">
                    <h1 className="text-4xl text-red-600 sm:text-6xl font-bold">
                        Chiffrement de César
                    </h1>
                    <p className="mt-3 text-xl text-gray-900">
                        <i><b>Entrez un texte clair pour obtenir le texte chiffré</b></i>
                    </p>
                    <div className='container mx-auto'>
                        <div className="flex flex-col items-center justify-center">
                            <p className='m-3 text-red-500 text-lg'><i><b>Entrer le nbr de décalage :</b></i></p>
                            <input 
                                style={{ border: "1px solid black", textAlign: "center" }} 
                                className="border-black rounded-xl text-center" 
                                type="number" 
                                min={1} 
                                value={shift} 
                                onChange={(e) => setShift(parseInt(e.target.value) || 0)} 
                            />
                        </div>
                    </div>

                    <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="relative z-10 flex gap-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
                                <div className="w-full">
                                    <label
                                        htmlFor="clear-text-input"
                                        className="block text-sm text-gray-700 font-medium dark:text-white"
                                    >
                                        <span className="sr-only">Entrez un texte clair</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="clear-text-input"
                                        className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                        placeholder="Entrez un texte clair"
                                        value={clearText}
                                        onChange={(e) => setClearText(e.target.value)}
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={handleEncrypt}
                                    className="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-500 duration-300 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    <svg
                                        className="shrink-0 size-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="11" cy="11" r="8" />
                                        <path d="m21 21-4.3-4.3" />
                                    </svg>
                                </button>
                            </div>
                        </form>

                        <div className="mt-10 sm:mt-20">
                            <h2 className="text-3xl font-bold text-gray-900 p-3">
                                Le résultat du chiffrement de César est  <span className='text-red-600'>{encryptedText}</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
