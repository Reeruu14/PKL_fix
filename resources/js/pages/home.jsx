import React, { useState } from 'react';
import { MapPin, Calendar, History, Users, Info, Image, ChevronLeft, ChevronRight } from 'lucide-react';
import './home.css'

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const categories = [
        {
            icon: <MapPin className="w-8 h-8 text-white" />,
            title: "Tourist Spots",
            desc: "Find the best places to visit",
            bgColor: "bg-gradient-to-br from-red-500/90 to-red-600/90"
        },
        {
            icon: <Calendar className="w-8 h-8 text-white" />,
            title: "Events",
            desc: "Local events and festivals",
            bgColor: "bg-gradient-to-br from-orange-400/90 to-orange-500/90"
        },
        {
            icon: <History className="w-8 h-8 text-white" />,
            title: "History",
            desc: "Learn about our heritage",
            bgColor: "bg-gradient-to-br from-emerald-500/90 to-emerald-600/90"
        },
        {
            icon: <Users className="w-8 h-8 text-white" />,
            title: "Culture",
            desc: "Experience local culture",
            bgColor: "bg-gradient-to-br from-sky-400/90 to-sky-500/90"
        },
        {
            icon: <Info className="w-8 h-8 text-white" />,
            title: "Information",
            desc: "Important tourist info",
            bgColor: "bg-gradient-to-br from-purple-500/90 to-purple-600/90"
        },
        {
            icon: <Image className="w-8 h-8 text-white" />,
            title: "Gallery",
            desc: "Photos and memories",
            bgColor: "bg-gradient-to-br from-yellow-400/90 to-yellow-500/90"
        }
    ];

    const popularPlaces = [
        {
            image: "/api/placeholder/800/400",
            title: "Lawang Sewu",
            desc: "Historic Dutch colonial era building"
        },
        {
            image: "/api/placeholder/800/400",
            title: "Sam Poo Kong",
            desc: "The oldest Chinese temple in Semarang"
        },
        {
            image: "/api/placeholder/800/400",
            title: "Kota Lama",
            desc: "Old City district"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % popularPlaces.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + popularPlaces.length) % popularPlaces.length);
    };

    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative h-[50vh]">
                <img 
                    src="/api/placeholder/1920/1080" 
                    alt="Wisata Semarang"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50">
                    <div className="max-w-6xl mx-auto px-4 h-full flex flex-col justify-center">
                        <h1 className="text-4xl font-bold text-white mb-6">WISATA SEMARANG</h1>
                        <button className="w-fit px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                            Explore Now
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-10 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-4">ABOUT US</h2>
                    <p className="text-gray-400">
                        Welcome to Wisata Semarang, your guide to exploring the cultural heritage 
                        and tourist attractions of Semarang. Discover the unique blend of Dutch colonial 
                        architecture, Chinese influences, and Javanese culture.
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="bg-[#111] py-10 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8">CATEGORIES</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((cat, idx) => (
                            <div 
                                key={idx}
                                className={`${cat.bgColor} p-6 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer`}
                            >
                                {cat.icon}
                                <h3 className="text-lg font-semibold text-white mb-2">{cat.title}</h3>
                                <p className="text-white/80 text-sm">{cat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular */}
            <section className="py-10 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8">POPULAR</h2>
                    <div className="relative">
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-2xl">
                                {popularPlaces.map((place, idx) => (
                                    <div 
                                        key={idx}
                                        className={`${idx === currentSlide ? 'block' : 'hidden'}`}
                                    >
                                        <img 
                                            src={place.image} 
                                            alt={place.title}
                                            className="w-full h-64 object-cover rounded-lg"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-red-500/90 p-4 rounded-b-lg">
                                            <h3 className="text-lg font-semibold text-white">{place.title}</h3>
                                            <p className="text-white/90 text-sm">{place.desc}</p>
                                        </div>
                                    </div>
                                ))}
                                <button 
                                    onClick={prevSlide}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button 
                                    onClick={nextSlide}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instagram Banner */}
            <section className="py-10 px-4 bg-gradient-to-r from-pink-500/20 to-red-500/20">
                <div className="max-w-4xl mx-auto">
                    <div className="flex gap-4 justify-center">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <img 
                                key={i}
                                src="/api/placeholder/150/150"
                                alt={`Instagram ${i + 1}`}
                                className="w-24 h-24 object-cover rounded-lg"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-10 px-4">
                <div className="max-w-md mx-auto">
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-4 py-2 bg-transparent border border-white/20 rounded text-white focus:outline-none focus:border-white/40"
                        />
                        <button className="px-6 py-2 bg-transparent border border-white/20 text-white rounded hover:border-white/40 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;