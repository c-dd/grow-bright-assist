
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-rose-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VA</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                VirtuallyYours
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-rose-600 border-b-2 border-rose-500"
                    : "text-gray-700 hover:text-rose-600"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-rose-600 border-b-2 border-rose-500"
                    : "text-gray-700 hover:text-rose-600"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-rose-600 border-b-2 border-rose-500"
                    : "text-gray-700 hover:text-rose-600"
                }`
              }
            >
              Pricing
            </NavLink>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-2 rounded-full font-medium hover:from-rose-600 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg">
              Free Assessment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-rose-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-rose-100">
            <div className="flex flex-col space-y-2">
              <NavLink
                to="/"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-rose-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-rose-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/pricing"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-rose-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </NavLink>
              <button className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-2 rounded-full font-medium mx-3 mt-2">
                Free Assessment
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
