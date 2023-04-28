import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
