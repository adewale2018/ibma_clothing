import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/download.png";
import "./Header.css";
import { auth } from "../../firebase/firebase.utils";

function Header({ currentUser }) {
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
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>SIGN IN</Link>
        )}
      </div>
    </header>
  );
}

export default Header;
