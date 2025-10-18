import React from "react";
import { Link } from "react-router-dom";
// import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Agri Seeds & Inputs Market</h1>
        <nav>
          <Link to="/">All items</Link>
        </nav>
      </div>
    </header>
  );
}
