import React from 'react'
import "./Dashboard.css"
import {NavLink} from "react-router-dom";

const SchoolAdminDashboard = () => {
  return (
    <>
     <div class = "schooladmindashb">

    <nav>
    <div class="logo-name">
      

      <span class="logo_name">Mercado Escolar</span>
    </div>
    <h6 className='panelHeading'>School Admin Panel</h6>
    <div class="menu-items">
      <ul class="nav-links">
      <li>
        <NavLink to={"/schooladmin/"}>
        <a href="#">
            <i class="uil uil-estate"></i>
            <span class="link-name">Insights</span>
          </a>
        </NavLink>

          
        </li>
        <li>
        <NavLink to={"/schooladmin/content"}>
        <a href="#">
            <i class="uil uil-estate"></i>
            <span class="link-name">Moderate Posts </span>
          </a>
        </NavLink>

          
        </li>
        <li>
        <NavLink to={"/schooladmin/clubs"}>
        <a href="#">
            <i class="uil uil-estate"></i>
            <span class="link-name">Moderate Clubs </span>
          </a>
        </NavLink>

          
        </li>
        <li>
        <NavLink to={"/schooladmin/users"}>
          <a href="#">
            <i class="uil uil-files-landscapes"></i>
            <span class="link-name">Manage Users</span>
          </a>
        </NavLink>
        </li>
        <li>
        <NavLink to={"/schooladmin/chat"}>
          <a href="#">
            <i class="uil uil-files-landscapes"></i>
            <span class="link-name">Chat</span>
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

export default SchoolAdminDashboard