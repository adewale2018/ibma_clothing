import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Logo from "../../assets/crown2.png";
import "./Header.css";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

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
          <Link className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </Link>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      <CartDropdown />
    </header>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
