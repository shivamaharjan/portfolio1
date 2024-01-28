import React from 'react'
import NavBar from './NavBar'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'
import Contact from './Contact'
import Hero from './Hero'

function Home() {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>
    </div>
  )
}

export default Home