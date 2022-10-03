import React from 'react'
import { NavLink } from 'react-router-dom'
import StudentDashboard from '../Dashboard/StudentDashboard'
import Header from '../Header/Header'
import "./Profile.css"

const Profile = () => {
  return (
    <>
    <StudentDashboard/>
   
    <div class="wrapper">
    <div class="left">
        <img src="https://i.imgur.com/cMy8V5j.png" alt="user" width="100"/>
        <h4>Alex William</h4>
         <p>UI Developer</p>
    </div>
    <div class="right">
        <div class="info">
            <h3>Information</h3>
            <div class="info_data">
                 <div class="data">
                    <h4>Email</h4>
                    <p>alex@gmail.com</p>
                 </div>
                 <div class="data">
                   <h4>Phone</h4>
                    <p>0001-213-998761</p>
              </div>
            </div>
        </div>
      
      <div class="projects">
            <h3>Projects</h3>
            <div class="projects_data">
                 <div class="data">
                    <h4>Recent</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                 </div>
                 <div class="data">
                   <h4>Most Viewed</h4>
                    <p>dolor sit amet.</p>
              </div>
            </div>
        </div>
        <NavLink to={"/student/editprofile/10"}>
        <button style={{backgroundColor: "white", color: "black"}}>
              <span class="data-title" >Edit Profile</span>
              </button>
              </NavLink>
    </div>
</div>
    
    </>

)
}

export default Profile
