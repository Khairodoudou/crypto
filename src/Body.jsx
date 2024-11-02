import { useState } from 'react';

export default function Body() {
    const [clearText, setClearText] = useState('');
    const [encryptedText, setEncryptedText] = useState('');

    // Caesar Cipher function
    const caesarCipher = (text, shift) => {
        return text.replace(/[a-zA-Z]/g, (char) => {
            const start = char <= 'Z' ? 65 : 97;
            return String.fromCharCode(((char.charCodeAt(0) - start + shift) % 26) + start);
        });
    };

    // Handle encryption
    const handleEncrypt = () => {
        const shift = 1; 
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
                        <i>Entrez un texte clair pour obtenir le texte chiffré</i>
                    </p>

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
                        
              <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                <svg
                  className="w-16 h-auto text-red-500"
                  width="121"
                  height="135"
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              
              <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                <svg
                  className="w-40 h-auto text-black"
                  width="347"
                  height="188"
                  viewBox="0 0 347 188"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* End SVG Element */}
                    </div>

                    <div className="mt-10 sm:mt-20">
                        <h2 className="text-3xl font-bold text-gray-900 p-3">
                            Le résultat du chiffrement de César est : <span className='text-red-600'>{encryptedText}</span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
