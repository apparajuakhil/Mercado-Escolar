import React from 'react'
import Header from '../Header/Header'
import "./EditForm.css"
import {useLocation } from 'react-router-dom';
import StudentDashboard from '../Dashboard/StudentDashboard';

const CreateClub = () => {
let location = useLocation();
location = location.pathname;
const type = location.indexOf("add") > -1 ? "Create" : "Update"

console.log(location)
  return ( 
    <>
    {/* <StudentDashboard/> */}
   <div>
    <form class="form-style-9">
        <h1>Club</h1>
        <ul>
            <li>
            <input type="text" name="field1" class="field-style field-split align-left" placeholder = {"Name"}  required/>

            </li>
    <li>
        <input type="email" name="field2" class="field-style field-split align-right" placeholder={"Email"} required/>
        </li>
        <li>
        <input type="text" name="field3" class="field-style field-split align-left" placeholder="Description" required/>

        </li>
        <li>
        <input type="text" name="field3" class="field-style field-split align-left" placeholder="Capacity" required/>

        </li>
        <li>
        <input type="submit" value={type} />
        
    </li>
    </ul>
    </form>
    </div>
    </>
  )
}

export default CreateClub


   
        
        