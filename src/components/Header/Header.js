import React from 'react'
import "./Header.css"
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <>
   <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      Mercado Escolar
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
  <NavLink to={"/"}>
            <a href="" style={{color: "white"}}>Home</a>
            </NavLink>
            <NavLink to={"/about"}>
            <a href="" style={{color: "white"}}>About</a>
            </NavLink>
            <NavLink to={"/services"}>
            <a href="" style={{color: "white"}}>Services</a>
            </NavLink>
    
    <NavLink to={"/contact"}>
            <a href="" style={{color: "white"}}>Contact</a>
            </NavLink>
            <NavLink to={"/login"}>
            <a href="" style={{color: "white"}}>Sign In</a>
            </NavLink>
    
  </div>
</div>
    </>
  )
}

export default Header