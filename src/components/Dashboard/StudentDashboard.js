import React from 'react'
import "./Dashboard.css"
import {NavLink} from "react-router-dom";

const StudentDashboard = () => {
  return (
    <>
    <div class = "studentdashb">
    <nav>
    <div class="logo-name">

      <span class="logo_name">Mercado Escolar</span>
      
    </div>
    <h6 className='panelHeading'>Student Panel</h6>
   
    <div class="menu-items">
      <ul class="nav-links">
        <li>
        <NavLink to={"/student/content"}>
        <a href="#">
            <i class="uil uil-estate"></i>
            <span class="link-name">Content</span>
          </a>
        </NavLink>

          
        </li>
        <li>
        <NavLink to={"/student/clubs"}>
          <a href="#">
            <i class="uil uil-files-landscapes"></i>
            <span class="link-name">Clubs</span>
          </a>
        </NavLink>
        </li>
        <li>
        <NavLink to={"/student/products"}>
          <a href="#">
            <i class="uil uil-chart"></i>
            <span class="link-name">Products</span>
          </a>
        </NavLink>
        </li>
        <li>
        <NavLink to={"/student/ads"}>
          <a href="#">
            <i class="uil uil-chart"></i>
            <span class="link-name">Advertisements</span>
          </a>
        </NavLink>
        </li>
        <li>
        <NavLink to={"/student/users"}>
          <a href="#">
            <i class="uil uil-thumbs-up"></i>
            <span class="link-name">Students</span>
          </a>
        </NavLink>
        </li>
        <li>
        <NavLink to={"/student/profile"}>
          <a href="#">
            <i class="uil uil-thumbs-up"></i>
            <span class="link-name">My Profile</span>
          </a>
        </NavLink>
        </li>
        <li>
        <NavLink to={"/chat"}>
          <a href="#">
            <i class="uil uil-thumbs-up"></i>
            <span class="link-name">Chat</span>
          </a>
        </NavLink>
        </li>
        <li>
        <NavLink to={"/cart"}>
          <a href="#">
            <i class="uil uil-thumbs-up"></i>
            <span class="link-name">Cart</span>
          </a>
        </NavLink>
        </li>
        <li>
        <NavLink to={"/"}>
          <a href="#">
            <i class="uil uil-files-landscapes"></i>
            <span class="link-name">Logout</span>
          </a>
        </NavLink>
        </li>
      </ul>

    </div>
  </nav>
  </div>
  </>
  )
}

export default StudentDashboard