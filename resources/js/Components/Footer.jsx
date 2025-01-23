import React from 'react';

const Footer = () => {
return (
<footer className="bg-gray-800 text-white py-8">
    <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h3 className="font-bold text-lg mb-4">Wisata Semarang</h3>
                <p className="text-gray-300">Discover the beauty of Semarang</p>
            </div>
            <div>
                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                </ul>
            </div>
            <div>
                <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                    <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
                    <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                </div>
            </div>
        </div>
    </div>
</footer>
);
};

export default Footer;
