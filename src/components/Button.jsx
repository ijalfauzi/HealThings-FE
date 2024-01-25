// src/components/Button.jsx
import React from 'react';

function Button({ onClick, children }) {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
