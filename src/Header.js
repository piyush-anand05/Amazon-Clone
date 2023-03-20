import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket } ] = useStateValue();

  console.log(basket);

  return (
    <nav className="header">
      {/* Logo on the left -> img */}
      <Link to="/">
        <img
          className="header_logo"
          src="https://cdn.cdnlogo.com/logos/a/83/amazon-com.svg"
          alt="not available"
        />
      </Link>

      {/* Search box */}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* 3 links */}

      <div className="header_nav">
        {/* 1st link */}
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Hello</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>

        {/* 2nd link */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* 3rd link */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* 4th link */}
        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            {/* Shopping basket icon */}
            <ShoppingCartIcon />
            {/* Number of items in the basket */}
            <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>

      {/* basket icon with number */}
    </nav>
  );
}

export default Header;
