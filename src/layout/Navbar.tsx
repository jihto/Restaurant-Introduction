import { useState } from "react";
import { Link } from "react-router-dom"; 
import Logo from "../assets/images/logo.png";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <header className="fixed z-50 w-full bg-gray-100 p-4 text-black shadow-lg mb-10">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold"> 
                    <img src={Logo} alt="Japanese" className="w-20 h-10 object-cover cursor-pointer" /> 
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-6 text-sm font-semibold cursor-pointer">
                    <Link to="/" className="hover:text-gray-300">TRANG CHỦ</Link>
                    <Link to="/about" className="hover:text-gray-300">GIỚI THIỆU</Link>
                    <Link to="/menu" className="hover:text-gray-300">THỰC ĐƠN</Link>
                    <Link to="/gallery" className="hover:text-gray-300">HÌNH ẢNH</Link>
                    <Link to="/news" className="hover:text-gray-300">TIN TỨC</Link>
                    <Link to="/contact" className="hover:text-gray-300">LIÊN HỆ</Link>
                </nav>

                {/* Language Icons */}
                <div className="hidden md:flex space-x-2"> 
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden block" onClick={() => setIsOpen(!isOpen)}>
                    Menu
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute left-0 top-full w-full bg-black bg-opacity-90 p-4 text-center md:hidden">
                    <Link to="/" className="block py-2 text-white">TRANG CHỦ</Link>
                    <Link to="/about" className="block py-2 text-white">GIỚI THIỆU</Link>
                    <Link to="/menu" className="block py-2 text-white">THỰC ĐƠN</Link>
                    <Link to="/gallery" className="block py-2 text-white">HÌNH ẢNH</Link>
                    <Link to="/news" className="block py-2 text-white">TIN TỨC</Link>
                    <Link to="/contact" className="block py-2 text-white">LIÊN HỆ</Link>
                </div>
            )}
        </header> 
    );
};

export default Navbar;
