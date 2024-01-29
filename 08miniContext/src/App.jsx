import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'
import UserContext from './context/UserContext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1>React With Chai</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
