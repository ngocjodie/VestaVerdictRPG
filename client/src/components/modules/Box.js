import React, { Component } from "react";


class Box extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      x: 50,
      y: 50,
    };
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    const pixelSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--pixel-size'));

    const someStyle ={
      transform: `translate3d( ${this.state.x*pixelSize}px, ${this.state.y*pixelSize}px, 0 )`,
    }
    
    return (
      <div className="small-box pixel-art" style={someStyle} ></div>
    );
  }
}

export default Box;