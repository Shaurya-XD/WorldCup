import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Players from './pages/Players'
import Teams from './pages/Teams'
import Stairs from './components/common/Stairs'
import { useTransition } from './context/TransitionContext'
import Navbar from './components/navigation/Navbar'
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const location = useLocation()
  const { playReveal } = useTransition()

  useEffect(() => {
    const lenis = new Lenis({
      wheelMultiplier: 0.6,
      lerp: 0.08,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);


  useEffect(() => {
    playReveal()
  }, [location.pathname])

  return (
    <div>
      <Stairs />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/players' element={<Players />} />
      </Routes>
    </div>
  )
}

export default App