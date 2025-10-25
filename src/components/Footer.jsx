import React from 'react';
import { Instagram } from 'lucide-react'; // Changed from Twitter to Instagram

export default function Footer() {
  return (
    <footer className="bg-black border-t border-dark-brown/30 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="text-gray text-center sm:text-left">
            <p className="text-base sm:text-lg">© 2025 Peak Ascension Digital</p>
            <p className="text-sm sm:text-base mt-1">Elevating your business to new heights</p>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="https://instagram.com/Calimo_X" // Updated to Instagram URL
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors duration-300"
            >
              <Instagram size={20} /> {/* Changed to Instagram icon */}
              <span className="font-medium text-sm sm:text-base">@Calimo_X</span>
            </a>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-dark-brown/30 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">Crafted with precision • Powered by innovation</p>
        </div>
      </div>
    </footer>
  );
}