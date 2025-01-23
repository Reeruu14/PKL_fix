import React from 'react';
import { Link } from '@inertiajs/react';

const Navbar = () => {
return (
<nav className="bg-gray-800 text-white">
    <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-bold text-xl">Wisata Semarang</Link>
            <div className="space-x-4">
                <Link href="/about" className="hover:text-gray-300">About</Link>
                <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            </div>
        </div>
    </div>
</nav>
);
};

export default Navbar;
