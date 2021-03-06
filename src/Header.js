import React from "react";
import "./Header.css";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {

const [{basket, user}] = useStateValue();

const handleAuthentication = () => {
  if(user) {
    auth.signOut();
  }
}

  return (
    <div className="header">
      <Link to='/' style={{height: '100%'}}>
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
      />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* logo */}
        <SearchTwoToneIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to= {!user && '/login'}>
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
          <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In' }</span>
        </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link
          to="/checkout" className="header__optionBasket"
        >
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
