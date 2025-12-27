import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link,Navigate, redirect } from 'react-router-dom';
import SignupForm from './pages/SignupForm'
import LoginForm from './pages/LoginForm'
import DashBoard from './pages/DashBoard';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignupForm/>}/>
      <Route path='/login' element={<LoginForm/>}/>
     
      <Route path='/dashboard' element={<ProtectedRoutes><DashBoard/></ProtectedRoutes>}/>
   
    </Routes>
    </BrowserRouter>

   
    </>
  )
}

export default App
