// resources/js/Components/PopularSection.jsx
import React from 'react';

const PopularSection = () => {
return (
<section className="max-w-6xl mx-auto py-12 px-4">
    <h2 className="text-2xl font-bold text-white mb-8">POPULER</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src="/api/placeholder/400/300" alt="Lawang Sewu" className="w-full rounded-lg" />
        <div className="relative">
            <img src="/api/placeholder/400/300" alt="Sam Poo Kong" className="w-full rounded-lg" />
            <div className="absolute inset-0 bg-red-500 bg-opacity-90 flex items-center justify-center p-4 rounded-lg">
                <div className="text-white text-center">
                    <h3 className="font-bold mb-2">Sam Poo Kong</h3>
                    <p className="text-sm mb-4">Kelenteng bersejarah di Semarang</p>
                    <button className="bg-white text-red-500 px-4 py-2 rounded hover:bg-gray-100">
                        Selengkapnya
                    </button>
                </div>
            </div>
        </div>
        <img src="/api/placeholder/400/300" alt="Kota Lama" className="w-full rounded-lg" />
    </div>
</section>
);
};

export default PopularSection;
