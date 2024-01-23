import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded mb-4'>Tailwind test</h1>
      <Card username="Kanishk" btnText="Click Me"/>
      <Card username="Shukla" btnText="Visit Me"/>
    </>
  )
}

export default App
