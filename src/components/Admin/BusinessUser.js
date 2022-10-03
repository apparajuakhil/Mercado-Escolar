import React from 'react'
import "./Admin.css"
import {NavLink} from "react-router-dom";
import Header from '../Header/Header';
import BusinessDashboard from '../Dashboard/BusinessDashboard';


const BusinessUser = () => {
  return (
    <>
    {/* <Header/> */}
    <BusinessDashboard/>

    <section class="dashboard">
     
     <div class="top1">
        <i class="uil uil-bars sidebar-toggle"></i>

        <div class="search-box1">
          <i class="uil uil-search"></i>
          <input type="text" placeholder="Search here..." />
        </div>

        
      </div> 
      <div class="dash-content">
        <div class="overview">
          <div class="title">
            <i class="uil uil-tachometer-fast-alt"></i>
            <span class="text">Dashboard</span>
          </div>
          

          <div class="boxes">
            <div class="box box1">
              <i class="uil uil-thumbs-up"></i>
              <span class="text">Products</span>
              <span class="number">50,120</span>
            </div>
            <div class="box box2">
              <i class="uil uil-comments"></i>
              <span class="text">Sales</span>
              <span class="number">20,120</span>
            </div>
            <div class="box box3">
              <i class="uil uil-share"></i>
              <span class="text">Profits</span>
              <span class="number">10,120</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default BusinessUser

