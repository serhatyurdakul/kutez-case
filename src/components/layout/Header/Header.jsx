import React from "react";
import "./Header.css";
import searchIcon from "../../../assets/icons/search-icon.svg";
import cartIcon from "../../../assets/icons/cart-icon.svg";
const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header-wrapper'>
          <a href='#' className='logo'>
            MY JEWELRY STORE
          </a>
          <div className='icons'>
            <button className='search-icon'>
              <img src={searchIcon} />
            </button>
            <a href='#' className='cart-icon'>
              <img src={cartIcon} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
