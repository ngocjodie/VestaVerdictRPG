import React, { Component } from "react";

import Map from "../modules/Map.js"; //separate js files for map info like obstacles
import { mapinfo } from "../modules/MapInfo.js";
import "./Game.css";
// import DialogueBox from "./DialogueBox.js";
// import Convos from "./Convos";


/** QUESTIONS FOR OFFICE HOURS
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
      currentMap: "room1", //or a unique name
      // talking: true,

      //phase: #, to determine which flashback and Court Scene we're in at the moment?
    };
  }

  componentDidMount(){     // for api calls
    //
  }

  switchScenes = () => {
    const next = mapinfo[this.state.currentMap].nextmap;
    this.setState({
      currentMap: next,
    });
  }
  
  conversing = () => { 
    console.log("now we're talkin"); ////////////////////// tee hee //////////////////////////////////
    this.setState({
      dialogueOption: this.state.dialogueOption + 1,
    });
    //
  }

  /* 
    probably callback functions to pass to Map AND DialogueBox
    ~ Map uses it to change state so inputs control choices, not player movement  --> make it a prop?
    ~ Map uses it as part of the interaction function when important things/people are clicked on
    ~ DialogueBox uses it to change Game's dialogueOption
    ~ DialogueBox uses it to tell Map 
  */

  render() {
    const info = mapinfo[this.state.currentMap];

    // let conversation = null;
    // if (this.state.talking) {
    //   conversation = <DialogueBox dialogue={Convos[this.state.dialogueOption]}/>;
    // }

    return(
        <div className="Game-frame">

          <div className="corner_topleft"></div>    {/* I, personally, could care less about these 4 */}
          <div className="corner_topright"></div>
          <div className="corner_bottomleft"></div>
          <div className="corner_bottomright"></div>

          <div className="camera">
            {/* Adding a key and doing the intervalid things are what make playerstart work. It's pretty easy to undo if we prefer the other way. */}
            <Map key={this.state.currentMap} name={info.thismap} start={info.playerstart} objects={info.objects} switch={this.switchScenes} conversing={this.conversing} dialogueOption={this.state.dialogueOption} width={this.state.dimensions[0]} height={this.state.dimensions[1]} />
          </div>

          {/* {conversation} */}
          {/* <DialogueBox dialogue={Convos[this.state.dialogueOption]}/> */}

        </div>
    );
  }
}

export default Game;