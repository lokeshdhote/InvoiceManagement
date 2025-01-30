import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Home from '../Components/Home'

const route = () => {
  return (
    <Routes>
<Route path='/' element={<Login/>}/>
<Route path='/invoice' element={<Home/>}/>


    </Routes>
  )
}

export default route
