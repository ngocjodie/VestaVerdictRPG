import React, { Component } from "react";

/**
 * PROPS:
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {string} name -- className for rendering the CSS
 * @param {string} id -- unique identifier for this specific object - same as key
 * @param {(BoxObject) => ()} interact -- onClick controls what happens
 * 
 */
class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {

    const genericStyle = {
      position: "absolute",
      left: `${this.props.x}px`,
      top: `${this.props.y}px`,
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
    }
    const classname = this.props.name + " pixel-art";
    
    return (
      <div className={classname} style={genericStyle} onClick={() => { this.props.interact(this.props); }} ></div>
    );
  }
}

export default Box;