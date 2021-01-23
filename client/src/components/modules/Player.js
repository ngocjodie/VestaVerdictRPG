import React, { Component } from "react";

/**
 * PROPS:
 * @param {number} x position
 * @param {number} y
 * @param {string} last_dir
 * @param {string} held_dir
 */

class Player extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //
  }

  render() {
    const charStyle ={
      position: "absolute",
      left: `${this.props.x - 18}px`,  // bc it measures from the topleft corner of the spritesheet
      top: `${this.props.y - 60}px`,   // instead of @ the feet like I want
    }
    
    return(
      <div className="character" facing={this.props.last_dir} walking={this.props.held_dir ? "true" : "false"} style={charStyle}>
          <div className="shadow pixel-art"></div>
          <div className="character_spritesheet pixel-art"></div>
      </div>
    );
  }
}

export default Player;