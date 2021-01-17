import React, { Component } from "react";
import "./Frontpage.css"
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./Skeleton.css";
import "./Game.js";
import "./Frontpage.js"

class Frontpage extends Component{
    constructor(props){
      super(props);
    }
  
    componentDidMount() {
      //only for api calls
    }

render() {
    return (
      <>

        <div className="Skeleton-button-container" >
          <Link to="/game/" className="Skeleton-practice-link"> 
            Game Page 
          </Link>
          <Link to="/about/" className="Skeleton-practice-link">
            About Us
          </Link>
          <Link to="/frontpage/" className="Skeleton-practice-link">
            Profile
          </Link>
        </div>

    <p class="gamename">  The Vesta Verdict  </p>
    </>

    );
  }
}

export default Frontpage;