import React, { Component } from "react";

import Map from "../modules/Map.js"; //separate js files for map info like obstacles
import Box from "../modules/Box.js";
// import Player from "../modules/Player.js";
import { mapinfo } from "../modules/MapInfo.js";


import "./Game.css";


/** QUESTIONS FOR OFFICE HOURS
 * ) if my current plan/system for changing scenes can work or if there is another strategy needed
 * ) if I should make Player Map's sibling or child
 * ) if I'm trying to conglomerate too much information in one place --> if so, what should I do about it?
 * ) how to share info about exits and player position to determine when to change scenes
 * 
 * ) where dialogue should be called and how we should extract the necessary info for awards from it
 *   ----put in Game if they have to do with the overall function of it
 *   --hardcoding is less complicated --> no set database structure off the top of the head
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
      currentMap: "map", //or make a unique name instead of the CSS class
    };
  }

  componentDidMount(){     // for api calls
    console.log("rendering Game.js");
  }

  //create a Box component for the doors placed at currentMap's exit in here so that it won't be read as an obstacle by Player
  // pass in goal into Map and create specialty case in collision to detect when to do the switch
  render() {
    const info = mapinfo[this.state.currentMap];
    // console.log("this is what I extracted", info);

    return(
        <div className="Game-frame">

          <div className="corner_topleft"></div>    {/* I, personally, could care less about these 4 */}
          <div className="corner_topright"></div>
          <div className="corner_bottomleft"></div>
          <div className="corner_bottomright"></div>

          <div className="camera">
            <Map name={this.state.currentMap} start={info["playerstart"]} objects={info["objects"]} width={this.state.dimensions[0]} height={this.state.dimensions[1]} /> {/* bouta get some props */}
            <Box key={"exit"} name={"door"} x={info["exit"][0]} y={info["exit"][1]} width={50} height={80} />
          </div>

        </div>
    );
  }
}

export default Game;