import React, { Component } from "react";

import Player from "./Player.js";
import Box from "./Box.js";

/**
 * PROPS:
 * @param {string} name for className in Game.css to render
 * @param {number} startx --> where player starts on this map
 * @param {number} starty
 */

class Map extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      name: "river", //or some default png to show
              //top right bottom left --> pass to Player
      bounds:   [0,  200,  100,   0], // where char can't go --> defaults to edges of screen
      objects: [
        // x:, y:, 
      ],

      // child: { // kinda like the node systems of 6.009/6.034
      //   //name: [doorx, doory, playerstartx, playerstary]
      //   "checker": [],
      //   "river"
      // }
    };
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  // sceneSwitch = () => {

  // }

  render() {
    // const pixelSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--pixel-size'));
    // const camera_left = pixelSize * 66;
    // const camera_top = pixelSize * 42;

    // const mapStyle = { //disable if you don't want camera to move
    //   transform: `translate3d( ${-this.state.x*pixelSize+camera_left}px, ${-this.state.y*pixelSize+camera_top}px, 0 )`,
    // }
    let art = this.state.name + " pixel-art"

    return (         //{this.props.name}  //style=mapStyle if you want camera to move with character
      <div className={art} >
        {/* pass obstacle coords to both object and player*/}
        <Box />
        <Player limits={this.state.bounds} /> {/* Player comes last so nothing's floating above it */}
      </div>  

    );
  }
}

//switch maps by making it hierarchical siblings of Player?
//have the map component show ALL of the PNGs --> just that camera moves every so often

export default Map;
