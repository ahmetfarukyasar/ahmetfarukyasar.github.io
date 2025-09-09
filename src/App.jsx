import React from 'react'
import './index.css';
import Navbar from './layouts/Navbar'
import Welcome from './components/Welcome'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App