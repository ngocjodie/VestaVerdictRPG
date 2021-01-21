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
      bounds:   [-90,  935,  430,   -10], // camera bounds are apparently [-50, 225, 80, 0]
      playerstart: [0, 0], //where Player starts on the Map
      
      //IF YOU WANT AN OBJECT ON THE MAP, GIVE IT A NAME THEN PUT ITS OTHER INFO IN AN ARRAY
      objects: {
        "crate": ["small-box", 60, 60, 24, 24], //UNIQUEkey: [CSS className, x,y, width,height]
                             //45,-45
        "origin": ["checker", 0, 0, 40, 40],
                          //-10,-80
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
