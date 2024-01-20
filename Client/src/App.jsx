// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login'

import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
