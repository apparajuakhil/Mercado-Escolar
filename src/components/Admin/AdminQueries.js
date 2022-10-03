import React from 'react'
import "./Admin.css"
import {NavLink} from "react-router-dom";
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';


const AdminQueries = () => {
  return (
    <>
    {/* <Header/> */}
   <Dashboard/>

    <section class="dashboard">
    <div class="top1">
        <i class="uil uil-bars sidebar-toggle"></i>

        <div class="search-box1">
          <i class="uil uil-search"></i>
          <input type="text" placeholder="Search here..." />
        </div>

        
      </div> 

      <div class="dash-content">
        

        <div class="activity">
          <div class="title">
            <i class="uil uil-clock-three"></i>
            <span class="text">Recent Activity</span>
          </div>

          <div class="activity-data">
            <div class="data names">
              <span class="data-title">How many credits?</span>
              <span class="data-list">What are types of specs?</span>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default AdminQueries

