import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function Header(props) {
  const { totalPrice } = useCart();
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">Sneakers Shop</h3>
            <p>Магазин кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="img/cart.svg" alt="cart" />
          <span>{totalPrice} UAH</span>
        </li>

        <Link to="/favorites">
          <li className="mr-20 cu-p">
            <img width={18} height={18} src="img/Heart.svg" alt="bookmarks" />
          </li>
        </Link>
        <Link to="/orders">
          <li>
            <img width={18} height={18} src="img/user.svg" alt="user" />
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
