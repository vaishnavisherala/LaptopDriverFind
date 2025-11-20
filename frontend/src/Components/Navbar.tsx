import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'



export default function Navbar() {
  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="brand">
          <div className="logo" aria-hidden>
            Support
          </div>
        </div>

        <div className="search">
          <form className="search-form" role="search" onSubmit={(e) => e.preventDefault()}>
            <input
              className="search-input"
              type="search"
              placeholder="What are you looking for?"
              aria-label="Search"
            />
            <button className="search-btn" type="submit" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>

        </div>

      <nav className="nav-row" role="navigation" aria-label="Main navigation">
        <ul className="nav-links">
        <li><Link to="/">Support Home</Link></li>
        <li><Link to="/softwaredriver">Software & Drivers</Link></li>
        <li><Link to="/accessories">Accessories</Link></li>

        <li><Link to="/contactus">Contact us</Link></li>


          
        </ul>
      </nav>
    </header>
  )
}
