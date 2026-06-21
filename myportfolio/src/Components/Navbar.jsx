import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <div className="logo">Portfolio</div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/timeline">Timeline</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link to="/timeline" onClick={() => setMenuOpen(false)}>Timeline</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

    </header>
  );
}