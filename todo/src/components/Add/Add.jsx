import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Add.css'
function Add() {
  const [title, settitle] = useState("")
  const [Description, setDescription] = useState("")
  const [category, setcategory] = useState("")
  const addnote = () =>{
    const notes= JSON.parse(localStorage.getItem("notes")) || [];

    const noteObject = {
      title,
      Description,
      category,
    };
    notes.push(noteObject);

    localStorage.setItem("notes",JSON.stringify(notes));



    settitle("");
    setDescription("");
    setcategory("");
    };
  return (
    <div>
      <div className="add-container">
      <h1>Task Deployment</h1>
      <input
      className='mission-input'
       type="text"
       placeholder='Mission'
       value={title}
       onChange={(e)=>{
        settitle(e.target.value);
       }}
       />

      <input
      className='mission-input'
       type="text"
       placeholder='Description'
       value={Description}
       onChange={(e)=>{
        setDescription(e.target.value);
       }}
       />
       <select 
       className='mission-input mission-input-select'
       type='text' 
       placeholder='Category' 
       value={category}
       onChange={(e)=> {
        setcategory(e.target.value);
       }}>
            <option value="">Select Category</option>
            <option value="Shopping">🛒 Supply Mission (Shopping)</option>
            <option value="Work">📂 Operation Deskwork (Work)</option>
            <option value="Learning">📘 Training Mission (Learning)</option>
            <option value="Personal">🏠 Base Tasks (Personal)</option>
            <option value="Health">💪 Health Protocol (Fitness)</option>
       </select>
       <button 
      type='button' 
      className='btn btn-primary btn-add'
       onClick={addnote}>
        Deploy Mission
      </button>
      <div className="fixed-buttons">
      <NavLink to={"/"}>
      <button 
       type='button' 
       className="mission-button">Command Center</button>
       </NavLink>
      <NavLink type='button' 
       to={"/show"}>
        <button className="mission-button"> Mission Log</button>
        </NavLink>
      
    </div>
    </div>
    </div>
  )
}

export default Add
