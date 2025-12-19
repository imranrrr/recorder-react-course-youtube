import React, {useState , useEffect} from 'react'

export default function Home(props) {

    const [count, setCount] = useState(2)
    const [disableIncrement, setDisableIncrement] = useState(false)
    const [disableDecrement, setDisableDecrement] = useState(false)

    useEffect(() => {
        
        if(count >= 50){
            setDisableIncrement(true)
        }else{
            setDisableIncrement(false)
        }
        
        if(count <= 0){
            setDisableDecrement(true)
        }else{
            setDisableDecrement(false)
        }

    }, [count])

    const increment = () =>{
        setCount((prevValue) => prevValue + 1)
    }
    const decrement = () =>{
        setCount((prevValue) => prevValue - 1)
        
    }

  return (
    <>
        <div>Home: {props.name}</div>
        <div>Count: {count}</div>
        <button onClick={increment} disabled={disableIncrement}>Increment ++ </button>
        <button onClick={decrement} disabled={disableDecrement}>Decrement --</button>

    </>
  )
}
