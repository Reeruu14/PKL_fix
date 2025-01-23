import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = ({ children }) => {
return (
<div className="min-h-screen bg-gray-900">
    <Navbar />
    <main>{children}</main>
    <Footer />
</div>
);
};

export default MainLayout;
