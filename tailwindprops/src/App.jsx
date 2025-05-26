import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <h1 class='bg-green-400 text-red-500 p-4 rounded-xl'>Tailwind CSS</h1>
      <Card uname="Chinmaya Kolhe" myarr="T.Y BTech-Information Technology Student @PCCOE, Pune" skill1="Java" skill2="Python" skill3="JS"/>
      <Card uname="Rudra Kolhe" myarr="S.Y Diploma- Electronics and Computer Engineering Student @KCE, Jalgaon" skill1="Gaming" skill2="Hammering" skill3="Watching TV"/>
    </>
  )
}

export default App
