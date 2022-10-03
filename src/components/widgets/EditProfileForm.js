import React from 'react'
import Header from '../Header/Header'
import "./EditForm.css"
import { useLocation } from 'react-router-dom';

const EditProfileForm = () => {
  let location = useLocation();
location = location.pathname;
const type = location.indexOf("add") > -1 ? "Add" : "Update"
  return ( 
    <>
    
   <div>
    <form class="form-style-9">
        <h1>Edit Profile</h1>
        <ul>
            <li>
            <input type="text" name="field1" class="field-style field-split align-left" placeholder = {"Name"}  required/>

            </li>
            <li>
            <input type="text" name="field1" class="field-style field-split align-left" placeholder = {"University"}  required/>

            </li>
    <li>
        <input type="email" name="field2" class="field-style field-split align-right" placeholder={"Email"} required/>
        </li>
        <li>
        <input type="text" name="field3" class="field-style field-split align-left" placeholder="Phone" required/>

        </li>
        <li>
        <input type="text" name="field3" class="field-style field-split align-left" placeholder="Address" required/>

        </li>
        <li>
        <input type="submit" value="Update" />
        
    </li>
    </ul>
    </form>
    </div>
    </>
  )
}

export default EditProfileForm


   
        
        