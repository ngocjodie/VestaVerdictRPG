import React, { Component } from "react";

/**
 * PROPS:
 * @param {number} x
 * @param {number} y
 * @param {string} name
 * @param {string} key
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

    const someStyle ={              //props                        props
      transform: `translate3d( ${this.props.x*pixelSize}px, ${this.props.y*pixelSize}px, 0 )`,
    }
    const classname = this.props.name + " pixel-art";
    
    return (
      <div className={classname} style={someStyle} ></div>
    );
  }
}

export default Box;