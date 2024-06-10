import React from 'react'
import image from "../assets/logo.png"
import "./Logo.css"

function Logo() {
  return (
    <div className='logo'> <img style={{width:"100%",height:"100%"}} src={image} alt='logo'/></div>
   
   
  )
}

export default Logo