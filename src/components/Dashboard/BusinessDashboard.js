import React from 'react'
import "./Dashboard.css"
import {NavLink} from "react-router-dom";

const BusinessDashboard = () => {
  return (
    <>
        <div class = "buisdashb">
    <nav>
    <div class="logo-name">
     

      <span class="logo_name">Mercado Escolar</span>
    </div>
    <h6 className='panelHeading'>Business Owner Panel</h6>

    <div class="menu-items">
      <ul class="nav-links">
      <li>
        <NavLink to={"/business/dashboard"}>
        <a href="#">
            <i class="uil uil-estate"></i>
            <span class="link-name">Insights</span>
          </a>
        </NavLink>

          
        </li>
        <li>
        <NavLink to={"/business/products"}>
        <a href="#">
            <i class="uil uil-estate"></i>
            <span class="link-name">Manage Products </span>
          </a>
        </NavLink>

          
        </li>
        <li>
        <NavLink to={"/business/ads"}>
        <a href="#">
            <i class="uil uil-estate"></i>
            <span class="link-name">Moderate Ads </span>
          </a>
        </NavLink>

          
        </li>
       
        <li>
        <NavLink to={"/business/chat"}>
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

export default BusinessDashboard