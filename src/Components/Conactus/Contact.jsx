import "./Contact.css"

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-header">
                    <h2 className="contact-title">Contact Us</h2>
                    <p className="contact-description">We'd love to hear from you. Get in touch with us.</p>
                </div>

                <div className="contact-container">
                    <div className="contact-info">
                        <div className="contact-item">
                            <svg
                                className="contact-icon"
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
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <div>
                                <h3 className="contact-item-title">Address</h3>
                                <p className="contact-item-text">D-117, Sector 63, Noida, India</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <svg
                                className="contact-icon"
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
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <div>
                                <h3 className="contact-item-title">Phone</h3>
                                <p className="contact-item-text">+91 9602495506</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <svg
                                className="contact-icon"
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
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            <div>
                                <h3 className="contact-item-title">Email</h3>
                                <p className="contact-item-text">info@pinnacleglobaltrade.com</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                                <input id="name" placeholder="Your name" className="input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input id="email" type="email" placeholder="Your email" className="input" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">
                                Phone
                            </label>
                            <input id="phone" placeholder="Your phone number" className="input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">
                                Message
                            </label>
                            <textarea id="message" placeholder="Your message" className="textarea"></textarea>
                        </div>
                        <button type="submit" className="button">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

