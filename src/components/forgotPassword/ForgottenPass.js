import './forgottenPass.css';
import profile from "../../images/profile_img.png";
import React, { Component } from "react";

export default class ForgottenPassPage extends Component {
  render() {
    return (
      <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile"/>
            </div>

          </div>
          <div>
            <h1>Forgotten password?</h1>
            <div>
              <input type="text" placeholder="Enter your email" className="name"/>
            </div>
            <div className="login-button">
              <button className="bttn_login">Verify email</button>
            </div>

              <p className="link">
                Go back to login page <a className='link_login' href="/login">Log in</a>
              </p>


          </div>
        </div>
      </div>
      </div>
    );
  }
}

