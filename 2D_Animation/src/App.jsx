import React, { useEffect } from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Players from './pages/Players'
import Teams from './pages/Teams'
import Stairs from './components/common/Stairs'
import { useTransition } from './context/TransitionContext'
import Navbar from './components/navigation/Navbar'

const App = () => {
  const location = useLocation()
  const { playReveal } = useTransition()

  useEffect(() => {
    playReveal()
  }, [location.pathname])

  return (
    <div>
      <Stairs/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/teams' element={<Teams/>} />
        <Route path='/players' element={<Players/>} />
      </Routes>
    </div>
  )
}

export default App