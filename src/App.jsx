
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import LogoBanner from './Components/Logo/Logo'
import AboutUs from './Components/About/About'
// import Contact from './Components/Contact/Contact'
import Contact from './Components/Conactus/Contact'
import ProductList from './Components/ProductList/ProductList'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'
import ContactPopup from './Components/ContactPopUP/ContactPop'
import { useEffect } from 'react'

function App() {

  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])
  return (
    < div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <LogoBanner />
        {/* <ProductList /> */}
        <AboutUs />
        <Contact />
      </main>
      <Footer />
      { showPopup && <ContactPopup onClose={() => setShowPopup(false)} /> }
    </div >
  )
}

export default App
