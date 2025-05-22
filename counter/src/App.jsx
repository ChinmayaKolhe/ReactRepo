import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,chinmayaCounter]= useState(0)
  
  const addValue=()=> {
    console.log("Value Added", counter)
    chinmayaCounter(counter+1)
  }
  const subValue=()=> {
    console.log("Value Subtracted", counter)
    chinmayaCounter(counter-1)
  }
  return (
    <>
    <h1>Hello Chinmaya Kolhe</h1>
    <h3>Counter Value: {counter}</h3>
    <button onClick={addValue}>Increment {counter}</button>
    <br/>
    <br />
    <button onClick={subValue}>Decrement {counter}</button>
    </>
  )
}

export default App
