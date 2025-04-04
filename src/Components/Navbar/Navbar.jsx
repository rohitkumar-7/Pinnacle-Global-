import React from 'react'
import './Navbar.css'
import { useState } from "react"
import { Link } from "react-router-dom"
import newImage from "../../assets/new.jpg"
import { useNavigate } from "react-router-dom"

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className="header">
            <div className="container header-container">
                <div     onClick={() => navigate("/")} className="header-logo">
                    {/* <Link to="/" className="header-logo-link"> */}
                        <img src={newImage} alt="Company Logo" className="header-logo-img" />
                        <span className="header-logo-text">Pinnacle Global Trade</span>
                    {/* </Link> */}
                </div>

                <nav className="header-nav">
                    <a href="#products" className="header-nav-link">
                        Products
                    </a>
                    <a href="#about" className="header-nav-link">
                        About Us
                    </a>
                    <a href="#contact" className="header-nav-link">
                        Contact
                    </a>
                </nav>

                <button className="header-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                </button>

                {isMenuOpen && (
                    <div className="header-mobile-menu">
                        <nav className="container header-mobile-nav">
                            <a href="#products" className="header-mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                                Products
                            </a>
                            <a href="#about" className="header-mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                                About Us
                            </a>
                            <a href="#contact" className="header-mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                                Contact
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
