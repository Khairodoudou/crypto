import React from 'react';
import logo from '../images/logo.jpg';

export default function NavBar() {
    return (
        <div className="navbar bg-white shadow-lg">
            <div className="flex-1">
                <a href="/" className="flex items-center space-x-2 text-xl font-bold">
                    <img src={logo} alt="Logo" className="h-14 w-auto" />
                    <span className="text-gray-800">Chiffrement de César</span>
                </a>
            </div>
            
        </div>
    );
}
