import React from 'react'
import StudentDashboard from '../Dashboard/StudentDashboard'
import {NavLink} from "react-router-dom";
import Header from '../Header/Header';

const OtherProfile = () => {
  return (
    <>
    {/* <Header/> */}
    <StudentDashboard/> 
    <div class = "card-lis">
   <div><center><h1>Users</h1></center></div>
   <br/>
   <ul class="card-wrapper">
  <li class="card">
    <img src='https://images.unsplash.com/photo-1611916656173-875e4277bea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400' alt=''/>
    <h3><a href="">A Super Wonderful Headline</a></h3>
    <p>Lorem ipsum sit dolor amit</p>
    <button>View</button>
  </li>
  <li class="card">
    <img src='https://images.unsplash.com/photo-1611083360739-bdad6e0eb1fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400' alt=''/>
    <h3><a href="">What a Fantabulous Title!</a></h3>
    <p>Lorem ipsum sit dolor amit</p>
    <button>View</button>

  </li>
  <li class="card">
    <img src='https://images.unsplash.com/photo-1613230485186-2e7e0fca1253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400' alt=''/>
    <h3><a href="">Positively Terrific Title</a></h3>
    <p>Lorem ipsum sit dolor amit</p>
    <button>View</button>
    </li>
</ul>

</div>   
  </>
  )
}

export default OtherProfile