import React from 'react';

const HeroSection = () => {
return (
<section className="relative h-96">
    <img src="/api/placeholder/1920/600" alt="Wisata Semarang" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">WISATA SEMARANG</h1>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                Jelajahi Sekarang
            </button>
        </div>
    </div>
</section>
);
};

export default HeroSection;
