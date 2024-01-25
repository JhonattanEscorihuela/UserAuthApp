import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login'
import Register from './components/Register/Register';
import Welcome from './components/Welcome/Welcome';
import LoginSignup from './components/LoginSingup/LoginSingUp';


import './App.css'


function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/welcome' element={<Welcome />} />
      </Routes>
    </>
  )
}

export default App
