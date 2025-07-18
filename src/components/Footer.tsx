import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div id="about">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">JB INCUBATOR</h3>
            <p className="text-gray-300 mb-4">Leading manufacturer of precision incubator controllers, providing reliable solutions for successful egg hatching worldwide.</p>
            <p className="text-gray-300">Trusted by professionals for over a decade.</p>
          </div>
          {/* Contact Us */}
          <div id="contact">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+918767189437" className="flex items-center hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-300">+91 8767189437</span>
              </a>
              <a href="tel:+918803625410" className="flex items-center hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-300">+91 8803625410</span>
              </a>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-300">jbincubator5@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-300">Lakhandur, Bhandara, Maharashtra 441803</span>
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-blue-400 transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="#support" className="text-gray-300 hover:text-blue-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 JB INCUBATOR. All rights reserved. | Built with precision and care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 