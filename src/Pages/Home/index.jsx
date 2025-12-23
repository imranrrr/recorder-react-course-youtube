import React, {useState , useEffect, useCallback} from 'react'

export default function Home({count, increment, setCount}) {

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

    const setUser = useCallback(() =>{
        // setCount((prevValue) => prevValue - 1)
        setUser("name")
        
    }, [])

  return (
    <>
        <div>Home: {props.name}</div>
        <div>Count: {count}</div>
        <button onClick={increment} disabled={disableIncrement}>Increment ++ </button>
        <button onClick={decrement} disabled={disableDecrement}>Decrement --</button>

    </>
  )
}
