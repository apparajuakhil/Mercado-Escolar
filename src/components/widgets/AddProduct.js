import React from 'react'
import "./EditForm.css"
import { useLocation } from 'react-router-dom';

const AddProduct = () => {
    let location = useLocation();
location = location.pathname;
const type = location.indexOf("add") > -1 ? "Add" : "Update"


    
  return (
    <div>
       
        <form class="form-style-9">
        <h1>Product</h1>
    <ul>
    <li>
        <input type="text" name="field1" class="field-style field-split align-left" placeholder = "Name"  required/>
        </li>
        <li>
            <input type="text" name="field2" class="field-style field-split align-right" placeholder = "Price" required/>
        
     </li>
        
    
    
    <li>
    
            <input type="text" name="field2" class="field-style field-split align-right" placeholder = "Quantity" />
     
     
        <input type="url" name="field4" class="field-style field-split align-right" placeholder="User Type" />
        
    </li>
    
    <li>
    <input type="submit" value={type} />
    </li>
    </ul>
    </form></div>
  )
}

export default AddProduct