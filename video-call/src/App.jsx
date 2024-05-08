import { Route,Routes } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './FireBase'


import Home from "./Pages/Home/Home"
import Room from "./Pages/Room/Room"
import Login from "./Login/Login"

function App() {
  const navigate = useNavigate()
  useEffect(() => {
   onAuthStateChanged(auth, async(user)=>{
    if(user){
      console.log('logged in')
      navigate('/home')
    }
   })
  }, [])

  return (
    <div>
      
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/room/:roomId" element={<Room/>}/>
     </Routes>
    </div>
  )
}

export default App
