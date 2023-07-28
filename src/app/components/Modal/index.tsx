"use client"
import React from 'react';

interface ModalProps {
  title: string;
  description: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, description, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-40">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-black">{title}</h2>
        <p className='text-black w-72 text-justify'>{description}</p>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
          onClick={onClose}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Modal;
