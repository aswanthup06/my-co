"use client";

import { useState, useEffect } from 'react';
import { IoArrowUpSharp } from "react-icons/io5";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[1000]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className={`
            bg-amber-600 hover:bg-amber-700
            cursor-pointer
            text-white
            rounded-full
            w-12 h-12
            flex items-center justify-center
            shadow-md
            transition-all duration-500
            hover:-translate-y-1
            focus:outline-none focus:ring-4 focus:ring-amber-700/30 focus:ring-opacity-50
          `}
        >
          <IoArrowUpSharp className="text-lg" />
        </button>
      )}
    </div>
  );
};

export default BackToTop;