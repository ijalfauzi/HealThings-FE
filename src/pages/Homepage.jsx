import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Button from '../components/Button';
import Footer from '../components/Footer';

function Homepage() {
  return (
    <div>
      <h1>Welcome to Our Website</h1>
      <p>This is the homepage of our website.</p>
      <Navbar />
      <Hero />
      <Button />
      <Footer />
    </div>
  );
}

export default Homepage;
