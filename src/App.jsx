import { useState } from 'react'
import Header from './Components/Header.jsx'
import Hero from './Components/Hero.jsx'
import Counter from './Components/Counter.jsx'
import Counter2 from './Components/Counter2.jsx'

function App() {

  return (
    <div className="text-center min-h-screen ">
      <div>Test </div>
      <Header/>
      <Hero name="Raymundo" gender = "Dipindi"/>
      <Counter/>
      <Counter2/>
    </div>
  )
}

export default App
