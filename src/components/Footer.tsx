
import { Mail, Home } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VA</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                VirtuallyYours
              </span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Empowering female entrepreneurs to scale their micro businesses with dedicated virtual assistants and business analysts.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:info@virtuallyyours.com" className="text-gray-400 hover:text-rose-500 transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                <Home size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Free Assessment</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Virtual Assistants</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Business Analysis</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Training Programs</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-rose-600 transition-colors">About Us</a></li>
              <li><a href="/pricing" className="text-gray-600 hover:text-rose-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-rose-100">
          <p className="text-center text-gray-500 text-sm">
            © 2024 VirtuallyYours. All rights reserved. Empowering women entrepreneurs to scale their dreams.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
