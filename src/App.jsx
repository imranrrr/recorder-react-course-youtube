// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {useState, useCallback} from 'react'
import Home from './Pages/Home'
import Signup from './Pages/Signup'


function App() {
  // const [count, setCount] = useState(0)
  const [page, setPage] = useState('home')
  const [count, setCount] = useState(0)

  const increment = useCallback(() =>{
    setCount((prevValue) => prevValue + 1)
  }, [count])

  return (
    <>
      <button onClick={() => setPage('home')}>Home</button>
      <button onClick={() => setPage('signup')}>Signup</button>
      {page === 'home' && <Home name="Code Village" increment={increment} count={count} setCount={setCount}/>}
      {page === 'signup' && <Signup />}
      
    </> 
  ) 
}

export default App
