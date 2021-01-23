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
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  interaction = () => { // onClick function
    console.log("I touched a thing:",this.props); // can access its own info
    // doesn't work as well      --> undefined --> nothing shows up for the invisibles either
                                //not last time I checked --> figure out later  
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
    
    return (                                                            //invisible  onClick={this.props.name==="invisible" ? null : this.props.onClick}
      <div className={classname} style={genericStyle} onClick={this.interaction} ></div>
    );
  }
}

export default Box;