import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gray-900  text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Website Logo / Name */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">🍲 Recipe Book</h2>
          <p className="text-sm">Discover, save, and share your favorite recipes with the world!</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/add-recipe" className="hover:text-white transition">Add Recipe</Link></li>
            <li><Link to="/my-recipe" className="hover:text-white transition">My Recipes</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Recipe Book. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
