import React from 'react'
import Header from '../Header/Header'
import "./EditForm.css"
import { useLocation } from 'react-router-dom';

const AdvertisementForm = () => {
  let location = useLocation();
location = location.pathname;
const type = location.indexOf("add") > -1 ? "Add" : "Update"

  return ( 
    <>
    
   <div>
    <form class="form-style-9">
        <h1>Advertisement</h1>
        <ul>
            <li>
            <input type="text" name="field1" class="field-style field-split align-left" placeholder = {"Title"}  required/>

            </li>
    
        <li>
        <input type="text" name="field3" class="field-style field-split align-left" placeholder="Description" required/>

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

export default AdvertisementForm


   
        
        