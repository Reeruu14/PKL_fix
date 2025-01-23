// resources/js/Pages/Home.jsx
import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import HeroSection from '../Components/HeroSection';
import CategorySection from '../Components/CategorySection';
import PopularSection from '../Components/PopularSection';

const Home = () => {
return (
<MainLayout>
    <HeroSection />
    <CategorySection />
    <PopularSection />
</MainLayout>
);
};

export default Home;
