import React, { Component } from "react";

import "../../input.js";

/*
 * What should it inherit?
 * states of the character(?)
 * 
*/
class Player extends Component{
  constructor(props){
    super(props);

    this.state = {
      x: 90,
      y: 90,
      color: "orange",
    };
  }

  componentDidMount() {
    //only for api calls
  }

  render() {
    //what to return / display
  }
}

export default Player;