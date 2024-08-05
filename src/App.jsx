import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Navbar from './components/Navbar'
import Inform from './routes/Inform'
import Sidebar from './components/Sidebar'
function App() {
 
  return (
   <div >
      <Navbar/>
      <Sidebar/>
      <div className="ml-0 lg:ml-40">
      <Routes >
        <Route path="/" element={<Home />}></Route>
        <Route path="/inform" element={<Inform />}></Route>
      </Routes>
      </div>
      

   </div>
  )
}

export default App
