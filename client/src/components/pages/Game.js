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
      dialogueOption: 0,
      dimensions: [960, 544],  //same as .Game-frame
      currentMap: "river", //or make a unique name instead of the CSS class
    };
  }

  componentDidMount(){     // for api calls
    //
  }

  switchScenes = () => {
    //
    console.log("reached the switch scene function");
    const next = mapinfo[this.state.currentMap]["nextmap"];
    console.log("this is the next one:", next);
    this.setState({
      currentMap: next,
    });
    console.log("state change complete");///////////////////////////////////////////////////////
  } 

  render() {
    const info = mapinfo[this.state.currentMap];
    console.log("rendering Game.js?");///////////////////////////////////////////////////////////////////////////

    return(

        <div className="Game-frame">

          <div className="corner_topleft"></div>    {/* I, personally, could care less about these 4 */}
          <div className="corner_topright"></div>
          <div className="corner_bottomleft"></div>
          <div className="corner_bottomright"></div>

          <div className="camera">
            <Map name={this.state.currentMap} start={info["playerstart"]} objects={info["objects"]} switch={this.switchScenes} width={this.state.dimensions[0]} height={this.state.dimensions[1]} />
          </div>
          <DialogueBox dialogue={Convos[this.state.dialogueOption]}/>

        </div>

    );
  }
}

export default Game;