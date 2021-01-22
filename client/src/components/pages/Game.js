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
      dimensions: [960, 544],  //same as .Game-frame
      currentMap: "checker",
      maps: {
        // name: playerstartx, playerstarty, nextmap, exitx, exity, objects (oof)
        "river":   [100, 100, "checker"],
        "checker": [480, 272, "map"],
        "map":     [ 50, 200, "river"],
      },
    };
  }

  componentDidMount(){     // for api calls
  }

  switchScenes = () => {
    //name={this.state.currentMap}
    //playerstartx={this.state.maps[currentMap][0]}
    //playerstarty={this.state.maps[currentMap][1]}
  }

  render() {
    return(
        <div className="Game-frame">

          <div className="corner_topleft"></div>    {/* I, personally, could care less about these 4 */}
          <div className="corner_topright"></div>
          <div className="corner_bottomleft"></div>
          <div className="corner_bottomright"></div>

          <div className="camera">
            <Map name={this.state.currentMap} startx={this.state.maps[this.state.currentMap][0]} starty={this.state.maps[this.state.currentMap][1]} width={this.state.dimensions[0]} height={this.state.dimensions[1]} /> {/* bouta get some props */}
          </div>

        </div>
    );
  }
}

export default Game;