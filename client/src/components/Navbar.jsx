import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container flex justify-between items-center">
        <NavLink to="/" className="logo flex items-center gap-1">
          <Calendar size={28} className="text-accent" />
          <span className="font-bold">NextEvent</span>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="nav-links desktop-only flex gap-2 items-center">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/events">Browse Events</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/login" className="btn btn-outline small">Login</NavLink></li>
          <li><NavLink to="/signup" className="btn btn-primary small">Get Started</NavLink></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle mobile-only" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu mobile-only animate-fade-in">
          <ul>
            <li><NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/events" onClick={() => setIsOpen(false)}>Events</NavLink></li>
            <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink></li>
            <div className="mobile-actions flex flex-col gap-1">
              <NavLink to="/login" className="btn btn-outline" onClick={() => setIsOpen(false)}>Login</NavLink>
              <NavLink to="/signup" className="btn btn-primary" onClick={() => setIsOpen(false)}>Sign Up</NavLink>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
