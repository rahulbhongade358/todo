import React, { useEffect, useState } from 'react'
import './Show.css'
import { NavLink } from 'react-router-dom'
function Show() {
  const [missions, setmissions] = useState([])

  useEffect(() => {
    const storedmission = JSON.parse(localStorage.getItem('missions'))||[]
    setmissions(storedmission)
  }, [])
  

  return (
    <div>
      <h1>Show Notes</h1>
      <div class="scroll-container">
        {missions.length===0? (
          <p>No missions deployed yet.</p>
          ): (
            missions.map((mission, index) => (
              <div key={index} className='mission-card'>
              <h2>Mission #{index + 1}: {mission.title}</h2>
              <p>{mission.Description}</p>
              <p><strong>Category:</strong> {mission.category}</p>
            </div>
            )
          )
        )}

    <div className="fixed-buttons">
       <NavLink to={"/add"}><button className="mission-button">Task Deployment</button></NavLink>
       <NavLink to={"/"}><button className="mission-button"> Command Center</button></NavLink>
    </div>
    </div>
    </div>
  )
}

export default Show
