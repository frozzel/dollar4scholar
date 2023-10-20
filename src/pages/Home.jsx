// Desc: Home page for the app
import React, {useState, useEffect} from 'react'

import Hero from './Home/Hero.jsx'
import About from './Home/About.jsx'
import NotVerified from '../components/NotVerified.jsx';


export default function Home() {

  return (<>
     <NotVerified />
      <Hero />


  <main id="main" >
  <About />
  </main>
  

  </>)
}
