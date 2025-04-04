import "./About.css"
import about from "../../assets/about.jpg"

export default function AboutUs() {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-container">
                    <div className="about-content">
                        <h2 className="about-title">About Us</h2>
                        <p className="about-lead">
                            Pinnacle Global Trade
                        </p>
                        <p className="about-text">
                            At Pinnacle Global Trade, we are dedicated to bridging international markets through seamless import and export operations. As a trusted global trading partner, we connect reliable importers and exporters worldwide, facilitating the efficient exchange of goods and fostering mutually beneficial relationships.
                            Our core mission is to provide access to high-quality products at affordable prices, ensuring value for our clients at every stage of the trading process. We meticulously select our partners, prioritizing reliability and integrity to build a robust and dependable global network.
                        </p>
                        <p className="about-text">
                            We take immense pride in representing India on the global stage. Our commitment extends beyond mere transactions; we strive to enhance India's reputation for quality and reliability in international trade. By delivering exceptional service and products, we aim to elevate India's name and contribute to its growing prominence in the global marketplace.
                            Pinnacle Global Trade is built on a foundation of trust, efficiency, and a relentless pursuit of excellence. We are passionate about facilitating global commerce and empowering businesses to thrive in an interconnected world.
                        </p>
                    </div>
                    <div>
                        <img src={about} alt="About Us" className="about-image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

