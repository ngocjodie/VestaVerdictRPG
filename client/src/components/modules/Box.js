import React, { Component } from "react";

/**
 * PROPS:
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
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
    const genericStyle ={
      transform: `translate( ${this.props.x}px, ${this.props.y}px )`,
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
    }
    const classname = this.props.name + " pixel-art";
    
    return (
      <div className={classname} style={genericStyle} ></div>
    );
  }
}

export default Box;