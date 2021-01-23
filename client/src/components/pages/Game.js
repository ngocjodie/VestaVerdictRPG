import React, { Component } from "react";

import Map from "../modules/Map.js";
import Box from "../modules/Box.js";
import Player from "../modules/Player.js";

import "./Game.css";


/** QUESTIONS FOR OFFICE HOURS
 * ) if my current plan/system for changing scenes can work or if there is another strategy needed
 * ) if I should make Player Map's sibling or child
 * ) if I'm trying to conglomerate too much information in one place --> if so, what should I do about it?
 * ) how to share info about exits and player position to determine when to change scenes
 * 
 * ) where dialogue should be called and how we should extract the necessary info for awards from it
 */







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
      currentMap: "river",
      maps: {
        // name: playerstartx, playerstarty, nextmap, exitx, exity, objects (oof)
        "river":   [100, 100, "checker", 500, 400],
        "checker": [480, 272, "map",     600, 400],
        "map":     [ 50, 200, "river",   700, 400],
      },
    };
  }

  componentDidMount(){     // for api calls
  }

  switchScenes = () => {
    //pass down to player so that when it reaches an exit, this will set state to the currentMap's next map and things will go from there
  }

  //create a Box component for the doors placed at currentMap's exit in here so that it won't be read as an obstacle by Player

  render() {
    return(
        <div className="Game-frame">

          <div className="corner_topleft"></div>    {/* I, personally, could care less about these 4 */}
          <div className="corner_topright"></div>
          <div className="corner_bottomleft"></div>
          <div className="corner_bottomright"></div>

          <div className="camera">
            {/* startx={this.state.maps[this.state.currentMap][0]} starty={this.state.maps[this.state.currentMap][1]} */}
            <Map name={this.state.currentMap} startx={this.state.maps[this.state.currentMap][0]} starty={this.state.maps[this.state.currentMap][1]} width={this.state.dimensions[0]} height={this.state.dimensions[1]} /> {/* bouta get some props */}
            {/* <Player start={[this.state.maps[this.state.currentMap][0],this.state.maps[this.state.currentMap][1]]} limits={[0, this.state.dimensions[0], this.state.dimensions[1], 0]} obstacles={} /> */}
            <Box key={"exit"} name={"door"} x={this.state.maps[this.state.currentMap][3]} y={this.state.maps[this.state.currentMap][4]} width={50} height={80} />

          </div>

        </div>
    );
  }
}

export default Game;