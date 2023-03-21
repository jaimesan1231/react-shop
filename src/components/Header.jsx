import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "@styles/Header.css";
import menuIcon from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCartIcon from "@icons/icon_shopping_cart.svg";
import Menu from "./Menu";
import AppContext from "../context/AppContext";
import MyOrder from "../containers/MyOrder";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { state } = useContext(AppContext);
  const [toggleOrder, setToggleOrder] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleToggleOrder = () => {
    setToggleOrder(!toggleOrder);
  };
  const handleToggleMobileMenu = () => {
    setToggleMobileMenu(!toggleMobileMenu);
  };
  return (
    <nav>
      <img
        src={menuIcon}
        alt="menu"
        className="menu"
        onClick={handleToggleMobileMenu}
      />

      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />

        <ul>
          <li>
            <Link to={"/"}>All</Link>
          </li>

          <li>
            <Link to={"/"}>Clothes</Link>
          </li>

          <li>
            <Link to={"/"}>Electronics</Link>
          </li>

          <li>
            <Link to={"/"}>Furnitures</Link>
          </li>

          <li>
            <Link to={"/"}>Toys</Link>
          </li>

          <li>
            <Link to={"/"}>Others</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart" onClick={handleToggleOrder}>
            <img src={shoppingCartIcon} alt="shopping cart" />
            {state.cart.length > 0 && <div>{state.cart.length}</div>}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrder && <MyOrder handleToggle={handleToggleOrder} />}
      {toggleMobileMenu && <MobileMenu />}
    </nav>
  );
};

export default Header;
