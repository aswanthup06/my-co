"use client"; // Add this at the top for client-side functionality

import React, { useState, useEffect } from 'react';
import { MdArrowOutward } from 'react-icons/md';

interface NavbarProps {
  brandName?: string;
  buttonText?: string;
  hideOnScroll?: boolean; 
}

const Navbar: React.FC<NavbarProps> = ({
  brandName = 'Brand',
  buttonText = 'Contact Now',
  hideOnScroll = true // Default to true
}) => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    if (!hideOnScroll) return; // Skip if scroll behavior is disabled

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos <= 100 || currentScrollPos < prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, hideOnScroll]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="flex justify-between items-center py-4 container mx-auto md:px-6 lg:px-20 px-4">
        <h1 className="text-2xl font-bold">{brandName}</h1>
        <button className="flex bg-amber-600 hover:bg-amber-700 text-white items-center px-6 py-3 rounded-full gap-2 transition-all cursor-pointer border-2 border-transparent hover:border-amber-800">
          <span className="text-sm font-medium">{buttonText}</span>
          <MdArrowOutward className="text-base" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;