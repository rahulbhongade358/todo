import React from 'react'
import { NavLink } from 'react-router-dom'
import gunGif from '../../Allimg/gun.gif';
import trackGif from '../../Allimg/eye-tracking.gif';
import CustomzationGif from '../../Allimg/customs-officer.gif';
import GranadeGif from '../../Allimg/grenade.gif';
import checkGif from '../../Allimg/check.gif';
import missionGif from '../../Allimg/mission.gif';

import './Home.css'
function Home() {
  return (
    <div>
        <div className='text-align'>
            <h1>Operation: Get Things Done</h1>
            <p>"Gear up, soldier. Every task is a mission.
            Your days objectives await execution — and each one brings you closer to victory."</p>
          <div className='text-align'>
              <h3 className='text-align features'> Features </h3>
              <div className='features-container'>
                  <div className='feature1'>
                    <img className='animated' src={missionGif} alt="Mission animation" />
                    <p>Task Management: Efficiently track and organize your daily missions</p>
                  </div>
                  <div className='feature1'>
                  <img className='animated' src={gunGif} alt="Mission animation" />
                    <p>Target Locking:  lock your most critical objectives for focused execution.</p>
                  </div>
                  <div className='feature1'>
                  <img className='animated' src={trackGif} alt="Mission animation" />
                    <p>Progress Tracking: Monitor your mission progress with completion statuses.</p>
                  </div>
                  <div className='feature1'>
                  <img className='animated' src={CustomzationGif} alt="Mission animation" />
                    <p>Customization: Personalize your mission board with  task labels..</p>
                  </div>
              </div>
          </div>

          <div className='text-align'>
                <h3>Why Use This Website:</h3>
                <p>To transform your to-do list into a mission control hub, ensuring every task is completed with precision and purpose.</p>
          </div>
          <div className="fixed-buttons">
              <NavLink to={"/add"} > 
                <button className="mission-button">
                <img className="animated-btn" src={GranadeGif} alt="Mission animation" />
                Task Deployment
              </button>
              </NavLink>
              
  <NavLink to={"/show"}  >
  <button className="mission-button">
    <img className="animated-btn" src={checkGif} alt="Mission animation" />
    Mission Log
  </button>
  </NavLink>
  
</div>
        </div>
    </div>
  )
}

export default Home

