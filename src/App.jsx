// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'; // Import the Homepage component
import Products from './pages/Products'; // Import the Products component
import About from './pages/About'; // Import the About component
import ContactUs from './pages/ContactUs'; // Import the ContactUs component
import DownloadCatalog from './pages/DownloadCatalog'; // Import the DownloadCatalog component
import GetQuotation from './pages/GetQuotation'; // Import the GetQuotation component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Render Homepage component for the root URL */}
        <Route path="/products" element={<Products />} /> {/* Render Products component for /products route */}
        <Route path="/about" element={<About />} /> {/* Render About component for /about route */}
        <Route path="/contact" element={<ContactUs />} /> {/* Render ContactUs component for /contact route */}
        <Route path="/download-catalog" element={<DownloadCatalog />} /> {/* Render DownloadCatalog component for /download-catalog route */}
        <Route path="/get-quotation" element={<GetQuotation />} /> {/* Render GetQuotation component for /get-quotation route */}
        {/* Add routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;
