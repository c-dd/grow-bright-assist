
import { Mail, Home } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-stone-border">
      <div className="site-container pt-12 md:pt-16 pb-8 md:pb-12 text-clay">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-xl md:text-2xl font-medium tracking-tighter text-foreground font-serif">Care + Candor</h3>
            <p className="mt-3 md:mt-4 text-xs md:text-sm max-w-sm">Empowering female entrepreneurs to scale their micro businesses with dedicated virtual assistants and business analysts.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm md:text-base font-semibold text-foreground">Services</h4>
            <ul className="mt-3 md:mt-4 space-y-2 md:space-y-3 text-xs md:text-sm">
              <li><a href="#" className="hover:text-foreground py-1 block">Free Assessment</a></li>
              <li><a href="#" className="hover:text-foreground py-1 block">Virtual Assistants</a></li>
              <li><a href="#" className="hover:text-foreground py-1 block">Business Analysis</a></li>
              <li><a href="#" className="hover:text-foreground py-1 block">Training Programs</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm md:text-base font-semibold text-foreground">Company</h4>
            <ul className="mt-3 md:mt-4 space-y-2 md:space-y-3 text-xs md:text-sm">
              <li><a href="/about" className="hover:text-foreground py-1 block">About Us</a></li>
              <li><a href="/pricing" className="hover:text-foreground py-1 block">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground py-1 block">Contact</a></li>
              <li><a href="#" className="hover:text-foreground py-1 block">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-12 border-t border-stone-border pt-6 md:pt-8 text-center text-xs md:text-sm">
          <p>&copy; 2024 Care + Candor. All rights reserved. Empowering women entrepreneurs to scale their dreams.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
