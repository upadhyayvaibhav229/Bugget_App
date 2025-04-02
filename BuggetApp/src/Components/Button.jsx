import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded">
      {label}
    </button>
  );
};

export default Button;
