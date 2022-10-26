import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
