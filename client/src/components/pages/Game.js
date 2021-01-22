import React, { Component } from "react";

import Map from "../modules/Map.js";

import "./Game.css";


/**
 * path = "/game"
 * 
 * PROPS
 * @param userId ~don't know how/why/when I'll need it yet though
 */

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      maps: [], //might not actually use this
    };
  }

  componentDidMount(){     // for api calls
  }

  render() {
    console.log("entered the render");

    return(
        <div className="Game-frame">

          <div className="corner_topleft"></div>    {/* I, personally, could care less about these */}
          <div className="corner_topright"></div>
          <div className="corner_bottomleft"></div>
          <div className="corner_bottomright"></div>

          <div className="camera">
            <Map />
          </div>

        </div>
    );
  }
}

export default Game;