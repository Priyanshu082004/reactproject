import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './Context/Usercontext'
import Login from './components/login'
import Profile from './components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>CONTEXT API </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
