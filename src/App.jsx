import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './Navigation/Navigation'
import Home from "./Home/Home"
import Cart from './Cart/Cart'
import About from './About/About'
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path='/About' element={<About/>} />
      </Routes>
    </div>
  )
}

export default App
