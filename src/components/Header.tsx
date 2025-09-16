
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-stone-border sticky top-0 z-50">
      <div className="site-container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-medium tracking-tighter">
              <span className="font-serif">Care + Candor</span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-clay hover:text-foreground"
                }`
              }
            >
              Process
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-clay hover:text-foreground"
                }`
              }
            >
              Philosophy
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-clay hover:text-foreground"
                }`
              }
            >
              Plans
            </NavLink>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center">
            <div className="hidden md:flex">
              <button className="btn-primary px-6 py-2 rounded-full font-medium text-sm">
                Free Assessment
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-clay hover:text-foreground"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-border">
            <div className="flex flex-col space-y-2">
              <NavLink
                to="/"
                className="px-3 py-2 text-sm font-medium text-clay hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Process
              </NavLink>
              <NavLink
                to="/about"
                className="px-3 py-2 text-sm font-medium text-clay hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Philosophy
              </NavLink>
              <NavLink
                to="/pricing"
                className="px-3 py-2 text-sm font-medium text-clay hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Plans
              </NavLink>
              <button className="btn-primary px-6 py-2 rounded-full font-medium mx-3 mt-2 text-sm">
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
