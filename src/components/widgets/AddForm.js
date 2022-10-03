import React from 'react'
import "./EditForm.css"
import { useParams ,useLocation } from 'react-router-dom';

const AddForm = () => {
    const {a} = useParams()
    const type = a == 1 ? "School" : (a == 2 ? "User" : "Product")
    let location = useLocation();
    console.log(location)
    location = location.pathname;
    let op = location.includes("add") ? "Add" : "Update"
    
  return (
    <div>
       
        <form class="form-style-9">
        <h1>{type}</h1>
    <ul>
    <li>
        <input type="text" name="field1" class="field-style field-split align-left" placeholder = {type + " Name"}  required/>
        {type == "Product" &&
            <input type="text" name="field2" class="field-style field-split align-right" placeholder = "Price" required/>
        }
      {type != "Product" &&
            <input type="email" name="field2" class="field-style field-split align-right" placeholder={type + " Email"} required/>
        }
        
    
    </li>
    <li>
    {type == "Product" &&
            <input type="text" name="field2" class="field-style field-split align-right" placeholder = "Quantity" />
        }
    {type != "Product" && <input type="text" name="field3" class="field-style field-split align-left" placeholder="Phone" />}
        {type == "School" ? 
        <input type="url" name="field4" class="field-style field-split align-right" placeholder="Website" /> : 
        <input type="url" name="field4" class="field-style field-split align-right" placeholder="User Type" />}
        
    </li>
    {/* <li>
    <input type="text" name="field3" class="field-style field-full align-none" placeholder="Subject" />
    </li> */}
    {/* <li>
    <textarea name="field5" class="field-style" placeholder="Message"></textarea>
    </li> */}
    <li>
    <input type="submit" value={op} />
    </li>
    </ul>
    </form></div>
  )
}

export default AddForm