"use client";

import React, { useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";


type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
};

const Modal = ({
  isOpen,
  onClose,
  children,
  title,
}: ModalProps) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={onClose} // Close when clicking overlay
    >
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-md"
        onClick={e => e.stopPropagation()} // Prevent click from bubbling to overlay
      >
        {title && (
          <div className="border-b p-4 flex justify-between items-center">
            <h3 className="text-lg font-medium">{title}</h3>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 bg-gray-400/30 h-8 w-8 flex items-center justify-center rounded-full cursor-pointer"
              aria-label="Close modal"
            >
              <AiOutlineClose />
            </button>
          </div>
        )}
        
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;