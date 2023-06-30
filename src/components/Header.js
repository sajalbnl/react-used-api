import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/exchange">Exchange</Link>
        <Link to="/coins">Coins</Link>
      </nav>
    </>
  );
}

export default Header;
