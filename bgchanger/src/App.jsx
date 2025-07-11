import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [color, setColor] = useState('olive')
  return (
    <>
      <div class="w-full h-screen duration-200 " 
      style={{
        backgroundColor: color}}>
       <div className='fixed flex flex-wrap justify-center inset-x-0 bottom-20 px-4 '> 
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-3 rounded-3xl'>
          <button onClick={() => setColor('red')}
          className='outline-none px-4 rounded-full p-4 text-white' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={() => setColor('green')}
          className='outline-none px-4 rounded-full p-4 text-white' style={{backgroundColor:"Green"}}>Green</button>
          <button onClick={() => setColor('blue')}
          className='outline-none px-4 rounded-full p-4 text-white' style={{backgroundColor:"Blue"}}>Blue</button>
          <button onClick={() => setColor('black')}
          className='outline-none px-4 rounded-full p-4 text-white' style={{backgroundColor:"Black"}}>Black</button>
        </div>
       </div>
      </div>
    </>
  )
}

export default App
