import React from 'react'
import "./Register.css"
import {NavLink} from "react-router-dom";

const Register = () => {
  return (
    <>
    <div className="reg">
    <div class="container" id="container">
      <div class="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          {/* <div class="social-container">
            <a href="#" class="social"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span> */}
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div class="form-container sign-in-container">
        <form action="#">
          <h1>Create Account</h1>
          {/* <div class="social-container">
            <a href="#" class="social"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your account</span> */}
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Register</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          
          <div class="overlay-panel overlay-right">
          <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <NavLink to={"/login"}>
            <button class="ghost" id="signIn">Sign In</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Register