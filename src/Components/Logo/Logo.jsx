import "./Logo.css"
import logo from "../../assets/logo.jpeg";
import newImage from "../../assets/new.jpg";


export default function LogoBanner() {
  return (
    <section className="logo-banner">
      <div className="container logo-banner-container">
        <img src={newImage} alt="Company Logo" className="logo-banner-img" />
        <h1 className="logo-banner-title">Pinnacle Global Trade</h1>
        <p className="logo-banner-subtitle">Your Reliable Partner In Global Trade</p>
      </div>
    </section>
  )
}

