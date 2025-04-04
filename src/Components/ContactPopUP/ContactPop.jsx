"use client"

import { useState } from "react"
import "./ContactPop.css"

export default function ContactPopup({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // Close the popup after submission
    onClose()
  }

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <div className="popup-header">
          <button className="popup-close" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Close</span>
          </button>
          <h2 className="popup-title">Contact Us</h2>
          <p className="popup-description">Fill out this form and we'll get back to you as soon as possible.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="popup-content">
            <div className="form-group">
              <label htmlFor="popup-name" className="form-label">
                Name
              </label>
              <input
                id="popup-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="popup-email" className="form-label">
                Email
              </label>
              <input
                id="popup-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="popup-phone" className="form-label">
                Phone Number
              </label>
              <input
                id="popup-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="popup-message" className="form-label">
                Message
              </label>
              <textarea
                id="popup-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className="textarea"
                required
              />
            </div>
          </div>
          <div className="popup-footer">
            <button type="submit" className="button" style={{ width: "100%" }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

