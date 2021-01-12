import React, { Component } from "react";

/*
 * What should it inherit?
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
        <h1> ABOUT </h1>
        <p>We are Team Purple for the 6.148 (or Weblab) competition and class.</p>
      </div>
    );
  }
}

export default About;