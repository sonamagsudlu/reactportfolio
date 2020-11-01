import React, { Component } from "react";
import "./styles.css";

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="nav">
          <h1 className="logo">Sona's portfolio</h1>
        </div>
        <div className="hero-wrapper">
          <h2 className="call">
            You must sign up or log in to access portfolio
            <span className="blink">_</span>
          </h2>
          <br />
    
          
          <br />
          <div className="signup-button" id="signup_button">
            <NavLink to="/auth" className="link-to-login">
              Sign-up | Log-in
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
