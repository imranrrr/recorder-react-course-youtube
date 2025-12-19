// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {useState} from 'react'
import Home from './Pages/Home'
import Signup from './Pages/Signup'


function App() {
  // const [count, setCount] = useState(0)
  const [page, setPage] = useState('home')
  return (
    <>
      <button onClick={() => setPage('home')}>Home</button>
      <button onClick={() => setPage('signup')}>Signup</button>
      {page === 'home' && <Home name="Code Village"/>}
      {page === 'signup' && <Signup />}
      
    </> 
  ) 
}

export default App
