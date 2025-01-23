import React from 'react';

const CategorySection = () => {
const categories = [
{ title: 'Sejarah', icon: '🏛️', color: 'bg-red-500' },
{ title: 'Budaya', icon: '🏺', color: 'bg-orange-400' },
{ title: 'Kuliner', icon: '🍜', color: 'bg-green-500' },
{ title: 'Wisata', icon: '🎨', color: 'bg-teal-400' },
{ title: 'Hotel', icon: '🏨', color: 'bg-purple-500' },
{ title: 'Transport', icon: '🚗', color: 'bg-yellow-500' },
];

return (
<section className="max-w-6xl mx-auto py-12 px-4">
    <h2 className="text-2xl font-bold text-white mb-8">KATEGORI</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category, index) => (
        <div key={index} className={`${category.color} p-6 rounded-lg cursor-pointer transform hover:scale-105
            transition`}>
            <span className="text-3xl mb-2 block">{category.icon}</span>
            <h3 className="text-white font-semibold">{category.title}</h3>
        </div>
        ))}
    </div>
</section>
);
};

export default CategorySection;
