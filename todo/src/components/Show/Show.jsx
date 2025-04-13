import React from 'react'
import './Show.css'
import { NavLink } from 'react-router-dom'
function Show() {
  return (
    <div>
      <h1>Show Note</h1>
    <div className="fixed-buttons">
       <NavLink to={"/add"}><button className="mission-button">Task Deployment</button></NavLink>
       <NavLink to={"/"}><button className="mission-button"> Command Center</button></NavLink>
    </div>
    </div>
  )
}

export default Show
