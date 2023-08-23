// src/components/Footer.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Footer = () => {
  return (
    <footer className="bg-light text-center p-3 fixed-bottom">
      <p>&copy; {new Date().getFullYear()} Anchal Gurjar. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
