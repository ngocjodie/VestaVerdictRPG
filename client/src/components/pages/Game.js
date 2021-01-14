import React, { Component } from "react";

/**
 * path = "/game"
 * 
 * PROPS
 * @param userId ~don't know how/why/when I'll need it yet though
 */

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {}; //initialize state
  }

  componentDidMount(){
    // for api calls
  }

  render() {
    return(
      <div> What's up, GAMERS </div>
    );
  }
}

export default Game;