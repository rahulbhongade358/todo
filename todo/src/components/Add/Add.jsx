import React from 'react'
import { NavLink } from 'react-router-dom'
import './Add.css'
function Add() {
  return (
    <div>
      <h1>Add Note</h1>
      <div className="fixed-buttons">
      <NavLink to={"/"}><button className="mission-button">Home</button></NavLink>
      <NavLink to={"/show"}><button className="mission-button"> Show</button></NavLink>
      
    </div>
    </div>
  )
}

export default Add
