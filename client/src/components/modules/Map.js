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
      bounds: [0,  960,  544,  0], // same as size of map now (it really does work *single tear of joy*)
      playerstart: [100, 100], //where Player starts on the Map
      
      //IF YOU WANT AN OBJECT ON THE MAP, GIVE IT A NAME THEN PUT ITS OTHER INFO IN AN ARRAY
      objects: {
        "crate": ["small-box", 60, 60, 25, 25], //UNIQUEkey: [CSS className, x,y, width,height]
                             //45,-45
        "origin": ["checker", 0, 0, 40, 40],
                          //-10,-80
        "another": ["small-box", 300, 300, 90, 90],
        "board": ["checker", 150, 120, 70, 70],
        "hidden": ["invisible", 200, 200, 30, 60],
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
      objs.push(<Box key={key} name={this.state.objects[key][0]} x={this.state.objects[key][1]} y={this.state.objects[key][2]} width={this.state.objects[key][3]} height={this.state.objects[key][4]} />);
      obstacles.push(this.state.objects[key]);
    }

    let art = this.state.name + " pixel-art"

    return (
      <div className={art} >
        {objs}
        <Player start={this.state.playerstart} limits={this.state.bounds} obstacles={obstacles} /> {/* Player comes last so nothing's floating above it */}
      </div>  
    );
  }
}

//switch maps by making it hierarchical siblings of Player?
//have the map component show ALL of the PNGs --> just that camera moves every so often

export default Map;
