import { useEffect } from 'react'
import './App.css'
import Navbar from './components/common/Navbar'
import Hero from './components/Hero'
import AsSeen from './components/AsSeen'
import Seamless from './components/Seamless'

function App() {
  return (
    <>
      <Hero />
      <AsSeen />
      <Seamless />
    </>
  )
}

export default App
