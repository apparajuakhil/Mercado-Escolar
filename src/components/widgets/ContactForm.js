import React from 'react'
import Header from '../Header/Header'
import "./EditForm.css"

const ContactForm = () => {
  return ( 
    <>
    
   <div>
    <form class="form-style-9">
        <h1>Contact Us</h1>
        <ul>
            <li>
            <input type="text" name="field1" class="field-style field-split align-left" placeholder = {"Name"}  required/>

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
        <input type="submit" value="Submit" />
        
    </li>
    </ul>
    </form>
    </div>
    </>
  )
}

export default ContactForm


   
        
        