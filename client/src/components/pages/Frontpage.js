import React, { Component } from "react";
import "./Frontpage.css"
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { Link } from "@reach/router";
import NavBar from "./navbar.js";

import "../../utilities.css";
import "./Skeleton.css";
import "./Game.js";
import "./Frontpage.js"

class Frontpage extends Component{
    constructor(props){
      super(props);
    }
  
    componentDidMount() {
      console.log(this.props.userId)
    }

render() {
    return (
      <>


    <p class="gamename">  The Vesta Verdict  </p>
    </>

    );
  }
}

export default Frontpage;