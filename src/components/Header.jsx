import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import '../styles/Header.css';

const Header = ({ navToggle, onCollectionClick }) => {
  return (
    <div className="logo-container">
      <img
        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&hei=52&fmt=jpeg&qlt=90&.v=1566849941844"
        className="brand-logo"
        alt="Apple Watch Design Studio Logo"
      />
      {navToggle && (
        <div className="nav-buttons">
          <button onClick={onCollectionClick}>Collections <IoIosArrowDown /></button>
        </div>
      )}
      {navToggle && (
        <div className="save-button">
          <button className='btn'>Save</button>
        </div>
      )}
    </div>
  );
};

export default Header;
