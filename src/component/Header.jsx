import { useState } from "react";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-forest-green to-sage-green shadow-xl sticky top-0 z-50">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <div className="text-white text-2xl font-bold">Java Developer</div>

                {/* Desktop Menu */}
                <ul className="hidden sm:flex space-x-6">
                    <li><a href="#home" className="text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300">Home</a></li>
                    <li><a href="#about" className="text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300">About</a></li>
                    <li><a href="#projects" className="text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300">Projects</a></li>
                    <li><a href="#contact" className="text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300">Contact</a></li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="sm:hidden text-white focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {/* Hamburger Icon */}
                    <span className="text-3xl">☰</span>
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="block sm:hidden bg-forest-green/90 text-white flex flex-row items-center justify-evenly py-6">
                    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                </div>
            )}
        </header>
    );
}

export default Header;