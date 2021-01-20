import React, { Component } from "react";

import Player from "./Player.js";
import Box from "./Box.js";

/**
 * PROPS? :
 * @param {string} name for className in Game.css to render
 * @param {number} startx --> where player starts on this map
 * @param {number} starty
 */

class Map extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      name: "river", //name of Game.css element for its png
              //top right bottom left --> pass to Player so it knows where the char can't go
      bounds:   [0,  200,  100,   0], 
      playerstart: [50, 100], //where Player starts on the Map
      
      //IF YOU WANT AN OBJECT ON THE MAP, GIVE IT A NAME THEN PUT ITS OTHER INFO IN AN ARRAY
      objects: {
        "crate": ["small-box", 150, 80, 32, 32], //UNIQUEkey: [CSS className, x,y, width,height]
      },
    };
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    let objs = [];
    let obstacles = [];

    for (const key in this.state.objects) {
      objs.push(<Box key={key} name={this.state.objects[key][0]} x={this.state.objects[key][1]} y={this.state.objects[key][2]} />);
      obstacles.push(this.state.objects[key]);
    }

    let art = this.state.name + " pixel-art"
    console.log("now obstacles are", obstacles); ///////////////////////////////////////////////////////////////

    return (
      <div className={art} >
        {/* pass obstacle coords to both object and player*/}
        {objs}
        <Player  limits={this.state.bounds} obstacles={obstacles} /> {/* Player comes last so nothing's floating above it */}
      </div>  
//start={this.state.playerstart} --> when it's ready
    );
  }
}

//switch maps by making it hierarchical siblings of Player?
//have the map component show ALL of the PNGs --> just that camera moves every so often

export default Map;
