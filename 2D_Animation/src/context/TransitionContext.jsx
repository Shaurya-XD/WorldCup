import { createContext, useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'

const TransitionContext = createContext(null)

export const TransitionProvider = ({ children }) => {
  const navigate = useNavigate()
  const stairParentRef = useRef(null)

  const playTransition = (path) => {
    const tl = gsap.timeline()

    tl.set(stairParentRef.current, {
      display: 'block'
    })

    tl.fromTo(
      '.stair',
      {
        height: 0
      },
      {
        height: '100%',
        duration: 0.3,
        stagger: {
          amount: -0.3
        }
      }
    )

    tl.call(() => {
      navigate(path)
    })

    tl.to('.stair', {
      y: '100%',
      duration: 0.3,
      stagger: {
        amount: -0.3
      }
    })

    tl.set(stairParentRef.current, {
      display: 'none'
    })

    tl.set('.stair', {
      y: '0%',
      height: '100%'
    })
  }

  const playReveal = () => {
    const tl = gsap.timeline()

    tl.set(stairParentRef.current, {
      display: 'block'
    })

    tl.to('.stair', {
      y: '100%',
      duration: 0.3,
      stagger: {
        amount: -0.3
      }
    })

    tl.set(stairParentRef.current, {
      display: 'none'
    })

    tl.set('.stair', {
      y: '0%'
    })
  }

  return (
    <TransitionContext.Provider
      value={{
        playTransition,
        playReveal,
        stairParentRef
      }}
    >
      {children}
    </TransitionContext.Provider>
  )
}



export const useTransition = () => {
  const context = useContext(TransitionContext)

  if (!context) {
    throw new Error(
      'useTransition must be used inside TransitionProvider'
    )
  }

  return context
}