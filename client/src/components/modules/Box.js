import React, { Component } from "react";

/**
 * PROPS:
 * @param {number} x
 * @param {number} y
 * @param {string} name -- className for rendering the CSS
 * @param {string} key -- unique identifier for this specific object
 * 
 */
class Box extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    const pixelSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--pixel-size'));

    const genericStyle ={
      transform: `translate3d( ${this.props.x*pixelSize}px, ${this.props.y*pixelSize}px, 0 )`,
    }
    const classname = this.props.name + " pixel-art";
    
    return (
      <div className={classname} style={genericStyle} ></div>
    );
  }
}

export default Box;