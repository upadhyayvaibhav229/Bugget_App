import React from 'react';

const Button = ({ label, onClick, imgSrc }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:border-white transition-all duration-300 ease-in-out"
    >
      {imgSrc && <img className="w-5 h-5" src={imgSrc} alt="icon" />}
      {label}
    </button>
  );
};

export default Button;
