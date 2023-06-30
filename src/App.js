import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Exchange from "./components/exchange";
import Coins from "./components/coins";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/coins" element={<Coins />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
