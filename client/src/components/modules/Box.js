import React, { Component } from "react";

/**
 * PROPS:
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {string} name -- className for rendering the CSS
 * @param {string} key -- unique identifier for this specific object
 * @param {(string) => void} interact -- onClick controls what happens
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

  interaction = () => { // onClick function --doesn't work for invisible CSS class
    const item = this.props;
    console.log("I touched a thing:", item); // can access its own info except for the key b/c that's unique and apparently private
    if (item.name === "left-telescope") {
      console.log("the west one");
      //showNewThing("redcircle");
    } else if (item.name === "right-telescope") {
      console.log("the east one");
    } else if (item.name === "redcircle") {
      console.log("  the circle of promise  ");
      //hideNewThing();
    } else {
      console.log("Hello there");
    }
  }

  render() {
    // const type = this.props.name;

    const genericStyle = {
      position: "absolute",
      left: `${this.props.x}px`,
      top: `${this.props.y}px`,
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
    }
    const classname = this.props.name + " pixel-art";
    
    return (                                        //onClick={this.props.interact(this.props.name)} or {this.interaction}
      <div className={classname} style={genericStyle} onClick={this.interaction} ></div>
    );
  }
}

export default Box;