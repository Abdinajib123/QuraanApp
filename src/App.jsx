import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home'
import About from './pages/About'
import Quran from './pages/Quran'
import Contact from './pages/Contact'
import Footer from './components/footer/Footer';


function App() {
  return (
    <Router>
    <div>
       <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Quran" element={<Quran />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
    </Router>
  )
}

export default App
