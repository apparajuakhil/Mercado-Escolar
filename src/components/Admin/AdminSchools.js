import React from 'react'
import "./Admin.css"
import {NavLink} from "react-router-dom";
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';


const AdminSchools = () => {
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
            <span class="text">Schools</span>
          </div>
          <NavLink to={"/superadmin/schools/add/1"}>
            <span class="data-title" style={{float: "right", paddingRight: "50px", paddingBottom: "20px"}}>Add School</span>
          </NavLink>
          <div class="activity-data">
            <div class="data names">
              <span class="data-title">Name</span>
              <span class="data-list">UT Dallas</span>   
              <span class="data-list">UT Dallas</span>   
              <span class="data-list">UT Dallas</span>   
              <span class="data-list">UT Dallas</span>   
            </div>
            <div class="data names">
              <span class="data-title">Location</span>
              <span class="data-list">Dallas</span>
              <span class="data-list">Dallas</span>
              <span class="data-list">Dallas</span>
              <span class="data-list">Dallas</span>
            </div>
            <div class="data names">
              <span class="data-title">Action</span>
              <span class="data-list"><NavLink to={"/superadmin/schools/edit/1"}> 
                  <span class="data-list">Edit</span>
              </NavLink> <NavLink to={"/superadmin/schools/delete"}> 
                  <span class="data-list">Delete</span>
              </NavLink></span>
              <span class="data-list"><NavLink to={"/superadmin/schools/edit/1"}> 
                  <span class="data-list">Edit</span>
              </NavLink> <NavLink to={"/superadmin/schools/delete"}> 
                  <span class="data-list">Delete</span>
              </NavLink></span>
              <span class="data-list"><NavLink to={"/superadmin/schools/edit/1"}> 
                  <span class="data-list">Edit</span>
              </NavLink> <NavLink to={"/superadmin/schools/delete"}> 
                  <span class="data-list">Delete</span>
              </NavLink></span>              
              <span class="data-list"><NavLink to={"/superadmin/schools/edit/1"}> 
                  <span class="data-list">Edit</span>
              </NavLink> <NavLink to={"/superadmin/schools/delete"}> 
                  <span class="data-list">Delete</span>
              </NavLink></span>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default AdminSchools

