import React, { Component } from "react";

import "./About.css";

import NavBar from "./navbar.js";


/*
 * What should it inherit (if anything at all)?
 * states of the character(?)
 * 
*/
class About extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    //only for api calls
  }

  render() {
    //what to return / display
    return(
      <div>
        
        <h1 className="About-title"> ABOUT </h1>
        <p className="About-summary-text">
          We are Team Purple for the 6.148 WebLab class and competition.  All of us are interested in games and storytelling, so we made an RPG-style game to reflect that.  Hope you enjoy!
        </p>
      </div>
    );
  }
}

export default About;