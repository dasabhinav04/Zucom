import React, { useState } from "react";
import "../assets/css/Navbar.css";
import Search from "./Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="main-nav d-flex align-items-center justify-content-between px-4 py-3">
        <div className="brand">
          <span className="text-white fw">ZU<b>COM</b><span className="text-warning">.</span></span>
        </div>

        <ul className="nav-links d-none d-lg-flex gap-4 m-0">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="about" className="nav-link">ABOUT</Link>
        </ul>

        {/* Search + Mobile Toggle */}
        <div className="d-flex align-items-center gap-3">
          {/* Desktop Search */}
            <Search/>

          {/* Mobile Toggle */}
          <button className="menu-btn d-lg-none" onClick={() => setMenuOpen(true)}>
            <i className="bi bi-list text-white" style={{ fontSize: "28px" }}></i>
          </button>
        </div>
      </nav>

      {/* Slide-out Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <i className="bi bi-x-lg"></i>
        </button>

        <form className="search-bar mt-2">
          <input type="text" placeholder="Search" />
          <button type="submit"><i className="bi bi-search"></i></button>
        </form>

        <ul className="mobile-links mt-4">
          <li><a className="active" href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">GALLERY</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
