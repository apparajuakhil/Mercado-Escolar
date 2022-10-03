import React from 'react'
import "./Dashboard.css"
import {NavLink} from "react-router-dom";

const Dashboard = () => {
  return (
    <>
    <div class = "defdashb">
    <nav>
    <div class="logo-name">
     

      <span class="logo_name">Mercado Escolar</span>
    </div>
    <h6 className='panelHeading'>Super Admin Panel</h6>

    <div class="menu-items">
      <ul class="nav-links">
        <li>
        <NavLink to={"/superadmin/queries"}>
        <a href="#">
            <i class="uil uil-estate"></i>
            <span class="link-name">Queries</span>
          </a>
        </NavLink>

          
        </li>
        <li>
        <NavLink to={"/superadmin/users"}>
          <a href="#">
            <i class="uil uil-files-landscapes"></i>
            <span class="link-name">Users</span>
          </a>
        </NavLink>
        </li>
        <li>
        <NavLink to={"/superadmin/schools"}>
          <a href="#">
            <i class="uil uil-chart"></i>
            <span class="link-name">Schools</span>
          </a>
        </NavLink>
        </li>
        <li>
        <NavLink to={"/superadmin/insights"}>
          <a href="#">
            <i class="uil uil-thumbs-up"></i>
            <span class="link-name">Insights</span>
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

export default Dashboard