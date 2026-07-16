import React from 'react'
import {useNavigate} from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
      onClick={()=>{
        navigate('/')
      }}
      className="font-medium bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >Return to Home page
      </button>
      <button
      onClick={()=>{
        navigate(-1)
      }}
       className="font-medium bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95">
      Back
      </button>
       <button
      onClick={()=>{
        navigate(+1)
      }}
       className="font-medium bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95">
      Next
      </button>
      <h1>About</h1>
      
    </div>
  )
}

export default About
