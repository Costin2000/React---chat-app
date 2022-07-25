import './registerPage.css';
import profile from "../../images/profile_img.png";
import React, { Component } from "react";

export default class RegisterPage extends Component {
  render() {
    return (
      <div className="main">
      <div className="sub-main-register">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile"/>
            </div>
          </div>
          <div>
            <h1>Register Page</h1>

            <div>
              <input type="text" placeholder="first name" className="name"/>
            </div>
            <div className="second-input">
              <input type="text" placeholder="last name" className="name"/>
            </div>
            <div className="second-input">
              <input type="text" placeholder="user name" className="name"/>
            </div>
            <div className="second-input">
              <input type="email" placeholder="email" className="name"/>
            </div>
            <div className="second-input">
              <input type="password" placeholder="password" className="name"/>
            </div>
            <div className="second-input">
              <input type="password" placeholder="confirm password" className="name"/>
            </div>
            <div className="login-button">
            <button className='bttn_login'>Register</button>
            </div>

              <p className="link">
                Already have an account? <a className='link_login' href="/login">Log in</a>
              </p>


          </div>
        </div>


      </div>
      </div>
    );
  }
}

