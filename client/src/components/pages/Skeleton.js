import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { Link } from "@reach/router";
import NavBar from "./navbar.js";

import "../../utilities.css";
import "./Skeleton.css";
import "./Game.js";
import "./Frontpage.js";
import image_coming from'./pic_coming_soon.png';


//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";

class Skeleton extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <>
      <p class="gamename">  The Vesta Verdict  </p>

      <div className="center">
        <img src={image_coming} alt="coming" />
      </div>
      
      <par className="para">
      Choose your role and prove your innocence. This will be more of a paragraph! Hopefully it will make people want to play our game :D Any suggestions about relative info to be
included here?

      </par>
      </>
    );
  }
}

export default Skeleton;
