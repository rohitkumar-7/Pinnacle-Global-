import { Link } from "react-router-dom"
import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-grid">
                    <div className="footer-column">
                        <h3 className="footer-title">Pinnacle Global Trade</h3>
                        <p className="footer-text">Providing quality products and services since 2025.</p>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-links">
                            <li>
                                <a href="#products" className="footer-link">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="footer-link">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="footer-link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-title">Legal</h3>
                        <ul className="footer-links">
                            <li>
                                {/* <Link to="/privacy" className="footer-link"> */}
                                Privacy Policy
                                {/* </Link> */}
                            </li>
                            <li>
                                {/* <Link to="/terms" className="footer-link"> */}
                                Terms of Service
                                {/* </Link> */}
                            </li>
                            <li>
                                {/* <Link to="/cookies" className="footer-link"> */}
                                Cookie Policy
                                {/* </Link> */}
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-title">Connect With Us</h3>
                        <div className="footer-social">
                            <a href="https://facebook.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="https://twitter.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                                {/* <svg xmlns="http://www.w3.org/2000/svg"  target="_blank" rel="noopener noreferrer"> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                </svg>
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="https://instagram.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                </svg>
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="https://linkedin.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} Pinnacle Global Trade. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

