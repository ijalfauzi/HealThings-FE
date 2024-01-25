import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <div className="logo">Logo</div>
          <ul className="flex space-x-4">
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
