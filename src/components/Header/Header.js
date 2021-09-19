import React from 'react';
import './Header.css';

const Header = () => {
      return (
            <div className="header">
                  <nav>
                        <a href="/home">Home</a>
                        <a href="/services">Services</a>
                        <a href="/about">About Us</a>
                        <a href="/blog">Blog</a>
                        <a href="/contact">Contact Us</a>
                  </nav>
            </div>
      );
};

export default Header;