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
      name: "river", //or some default png to show
              //top right bottom left --> pass to Player
      bounds:   [0,  200,  100,   0], // where char can't go --> defaults to edges of screen
      objects: { //list of obstacles --> maybe turn this into a prop
        "crate": ["small-box", 150, 80], //key: [name, x,y]
        "board": ["checker", 0, 20],
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
      objs.push(<Box name={this.state.objects[key][0]} key={key} x={this.state.objects[key][1]} y={this.state.objects[key][2]} />);
      obstacles.push(this.state.objects[key]);
    }

    let art = this.state.name + " pixel-art"

    return (
      <div className={art} >
        {/* pass obstacle coords to both object and player*/}
        {objs}
        <Player limits={this.state.bounds} /> {/* Player comes last so nothing's floating above it */}
      </div>  

    );
  }
}

//switch maps by making it hierarchical siblings of Player?
//have the map component show ALL of the PNGs --> just that camera moves every so often

export default Map;
