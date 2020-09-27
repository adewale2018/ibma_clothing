import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../public/assets/download.png";

import "./Header.css";

function Header() {
  return (
    <header className='header'>
      <Link to='/' className='logo-container'>
        <img src={Logo} alt='A crown' className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/'>
          HOME
        </Link>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
      </div>
    </header>
  );
}

export default Header;
