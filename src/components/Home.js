import React from "react";
import btc from "../Assets/btc.png";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <div className="Home">
        <img className="btcImg" src={btc} alt="img of bitcoin" />
        <div className="text"> Xcrypto</div>
      </div>
    </>
  );
}

export default Home;
