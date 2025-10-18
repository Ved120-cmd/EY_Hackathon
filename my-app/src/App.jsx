import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Dashboard from './components/Dashboard.jsx'
function App() {


  return (
    <>
      <div>
        <Navbar />
        <Dashboard />
      </div>
    </>
  )
}

export default App
