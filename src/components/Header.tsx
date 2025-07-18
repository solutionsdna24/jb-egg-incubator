import { ShoppingCart, Search, User, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/jbin100a.png";
import { useState } from "react";

const Header = ({ onOrderNowClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:bg-gray-100 md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
            {/* Logo image only */}
            <img src="/lovable-uploads/JB_LOGO-removebg-preview.png" alt="JB Egg Incubator Logo" className="h-10 w-auto" />
            <button onClick={onOrderNowClick} className="ml-6 flex items-center p-0 bg-transparent border-none shadow-none hover:bg-transparent">
              <img src="/lovable-uploads/order-now-button.jpg" alt="Order Now" className="h-10 w-auto object-contain" />
            </button>
            <a href="tel:+918767189437" className="ml-3 flex items-center" aria-label="Call Now">
              <img src="/lovable-uploads/phone-icon.png" alt="Call Now" className="h-10 w-10 object-contain" />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-flipkart-yellow font-medium">Home</a>
            <a href="#products" className="text-gray-700 hover:text-flipkart-yellow font-medium">Products</a>
            <a href="#about" className="text-gray-700 hover:text-flipkart-yellow font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-flipkart-yellow font-medium">Contact</a>
          </nav>
        </div>
        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white text-gray-700 rounded shadow-lg absolute left-0 right-0 top-full z-50">
            <nav className="flex flex-col py-2 px-4 space-y-2">
              <a href="#" className="hover:text-flipkart-yellow font-medium" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#products" className="hover:text-flipkart-yellow font-medium" onClick={() => setMobileMenuOpen(false)}>Products</a>
              <a href="#about" className="hover:text-flipkart-yellow font-medium" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#contact" className="hover:text-flipkart-yellow font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;