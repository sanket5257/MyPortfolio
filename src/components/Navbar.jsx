import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'About','project','Contact'];

  return (
    <nav className="absolute z-50 w-full text-white">
      <div className="  px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
         

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {navLinks.map((nav, index) => (
              <a key={index} href="#" className="hover:text-gray-400 px-3 py-2 rounded-md font-[anzo3]">
                {nav}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none mr-8">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-1">
          {navLinks.map((nav, index) => (
            <a key={index} href="#" className="block px-3 py-2 rounded-md hover:bg-blue-700">
              {nav}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
