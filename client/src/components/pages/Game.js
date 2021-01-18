import React, { Component } from "react";

import { drawCanvas } from "../../canvas";

import NavBar from "./navbar.js";


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

  componentDidMount(){     // for api calls
    drawCanvas();
  }

  
  render() {
    console.log("entered the render");
    return(
      
      <div>

        <div>
          <h1>
            What's up GAMERS
          </h1>
        </div>
        
        <div className="Game-body">
          <canvas id="game-canvas" width="500" height="500" />
        </div>

      </div>
    );
  }
}

export default Game;