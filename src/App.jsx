import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Hover from './components/Hover'
import Focus from './components/Focus'
import Focus_visible from './components/Focus_visible'
import Motion_safe from './components/Motion_safe'
import Checked from './components/Checked'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Checked/>
    </>
  )
}

export default App
