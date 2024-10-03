import { useState } from 'react'
import FirstHeader from './Components/FirstHeader'
import SecondHeader from './Components/SecondHeader'
import './App.css'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Footer from './Components/Footer'

function App() {


  return (
    <div className='App'>
      <FirstHeader />
      <SecondHeader />
      <Hero />
      <Features />
      <Footer />

    </div>


  )

}

export default App;
