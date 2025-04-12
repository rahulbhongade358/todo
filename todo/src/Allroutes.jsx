import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Add from './components/Add/Add'
import Show from './components/Show/Show'
function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/show' element={<Show/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes
