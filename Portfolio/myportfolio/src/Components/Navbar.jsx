import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Portfolio</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/timeline">Timeline</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}