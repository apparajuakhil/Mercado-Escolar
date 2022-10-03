import React from 'react'
import Header from '../Header/Header'
import "./EditForm.css"

const ResetPasswordForm = () => {
  return ( 
    <>
    <Header/>
   <div>
    <form class="form-style-9">
        <h1>Reset Password</h1>
        <ul>
    <li>
        <input type="email" name="field2" class="field-style field-split align-right" placeholder={"Enter Email"} required/>
        </li>
        <li>
        <input type="submit" value="Send Link" />
        
    </li>
    </ul>
    </form>
    </div>
    </>
  )
}

export default ResetPasswordForm


   
        
        