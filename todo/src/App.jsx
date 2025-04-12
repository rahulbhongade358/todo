import React from 'react'
import missionGif from './Allimg/mission.gif';

import './App.css'
function App() {
  return (
    <div>
      <div className='text-align'>
        <h1>Operation: Get Things Done</h1>
        <p>"Gear up, soldier. Every task is a mission.
        Your days objectives await execution — and each one brings you closer to victory."</p>
        <div className='text-align'>
  <h3 className='text-align features'> Features </h3>
  
  {/* Wrap all cards inside this container */}
  <div className='features-container'>
    <div className='feature1'>
      <img className='animated' src={missionGif} alt="Mission animation" />
      <p>Task Management: Efficiently track and organize your daily missions</p>
    </div>
    <div className='feature1'>
      <p>Prioritization: Mark tasks with different priorities to stay focused.</p>
    </div>
    <div className='feature1'>
      <p>Progress Tracking: Monitor your mission progress with completion statuses.</p>
    </div>
    <div className='feature1'>
      <p>Customization: Personalize your mission board with themes and task labels.</p>
    </div>
  </div>
</div>

        <div className='text-align'>
          <h3>Why Use This Website:</h3>
          <p>To transform your to-do list into a mission control hub, ensuring every task is completed with precision and purpose.</p>
        </div>
      </div>
    </div>
  )
}

export default App
