import React from 'react'
import "./Admin.css"
import {NavLink} from "react-router-dom";
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';


const AdminUsers = () => {
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
        {/* <div class="overview">
          <div class="title">
            <i class="uil uil-tachometer-fast-alt"></i>
            <span class="text">Dashboard</span>
          </div>
        </div> */}
        <div class = "cselect">
        <div class="custom-select">
    <select>
      <option value="Student">Student</option>
    <option value="Business Owne">Business Owner</option>
    <option value="School Admin">School Admin</option>
    <option value="Others">Others</option>
    
  </select>
        </div>
        </div>
        <div class="activity">
          <div class="title">
            <i class="uil uil-clock-three"></i>
            <span class="text">Users</span>
          </div>
          <NavLink to={"/superadmin/users/add/2"}>
            <span class="data-title" style={{float: "right", paddingRight: "50px", paddingBottom: "20px"}}>Add User</span>
          </NavLink>
          <div class="activity-data">
            
            <div class="data email">
              <span class="data-title">ID</span>
              <span class="data-list">123</span>
              <span class="data-list">234</span>
              <span class="data-list">345</span>
              <span class="data-list">666</span>
              <span class="data-list">777</span>
              <span class="data-list">345</span>
              <span class="data-list">666</span>
            </div>
            <div class="data names">
              <span class="data-title">Name</span>
              <span class="data-list">Prem Shahi</span>
              <span class="data-list">Deepa Chand</span>
              <span class="data-list">Manisha Chand</span>
              <span class="data-list">Pratima Shahi</span>
              <span class="data-list">Man Shahi</span>
              <span class="data-list">Ganesh Chand</span>
              <span class="data-list">Bikash Chand</span>
            </div>
            <div class="data email">
              <span class="data-title">University</span>
              <span class="data-list">ASU</span>
              <span class="data-list">UNCC</span>
              <span class="data-list">SJSU</span>
              <span class="data-list">MIT</span>
              <span class="data-list">ASU</span>
              <span class="data-list">UNCC</span>
              <span class="data-list">SJSU</span>
            </div>
            <div class="data type">
              <span class="data-title">User Type</span>
              <span class="data-list">Student</span>
              <span class="data-list">Business Owner</span>
              <span class="data-list">School Admin</span>
              <span class="data-list">Student</span>
              <span class="data-list">Business Owner</span>
              <span class="data-list">School Admin</span>
              <span class="data-list">Student</span>
            </div>
            <div class="data status">
              <span class="data-title">Action</span>
              <span class="data-list">
                <NavLink to={"/superadmin/users/edit/2"}> 
                  <span class="data-list">Edit</span>
              </NavLink> 
              {" "}
              <NavLink to={"/superadmin/users/delete"}> 
                  <span class="data-list">Delete</span>
              </NavLink>
              </span>
              <span class="data-list">
                <NavLink to={"/superadmin/users/edit/2"}> 
                  <span class="data-list">Edit</span>
              </NavLink> 
              {" "}
              <NavLink to={"/superadmin/users/delete"}> 
                  <span class="data-list">Delete</span>
              </NavLink>
              </span>
              <span class="data-list">
                <NavLink to={"/superadmin/users/edit/2"}> 
                  <span class="data-list">Edit</span>
              </NavLink> 
              {" "}
              <NavLink to={"/superadmin/users/delete"}> 
                  <span class="data-list">Delete</span>
              </NavLink>
              </span>
              <span class="data-list">
                <NavLink to={"/superadmin/users/edit/2"}> 
                  <span class="data-list">Edit</span>
              </NavLink> 
              {" "}
              <NavLink to={"/superadmin/users/delete"}> 
                  <span class="data-list">Delete</span>
              </NavLink>
              </span>
              <span class="data-list">
                <NavLink to={"/superadmin/users/edit/2"}> 
                  <span class="data-list">Edit</span>
              </NavLink> 
              {" "}
              <NavLink to={"/superadmin/users/delete"}> 
                  <span class="data-list">Delete</span>
              </NavLink>
              </span>
              <span class="data-list">
                <NavLink to={"/superadmin/users/edit/2"}> 
                  <span class="data-list">Edit</span>
              </NavLink> 
              {" "}
               <NavLink to={"/superadmin/users/delete"}> 
                  <span class="data-list">Delete</span>
              </NavLink>
              </span>
              <span class="data-list">
                <NavLink to={"/superadmin/users/edit/2"}> 
                  <span class="data-list">Edit</span>
              </NavLink> 
              {" "}
              <NavLink to={"/superadmin/users/delete"}> 
                  <span class="data-list">Delete</span>
              </NavLink>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default AdminUsers

