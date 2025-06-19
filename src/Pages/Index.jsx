import React from 'react'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

const Index = () => {
  return (
  <>
    <div className='min-h-screen bg-slate-900 with-screen overflow-x-hidden '>
        <Navbar/>
      <main className=''>
        <Home/>
        <About/> 
        <Skills/>
        <Projects/>
      </main>
      
      <Contact/>
    </div>
  </>
  )
}

export default Index
