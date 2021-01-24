import React, { Component } from "react";

import Player from "./Player.js";
import Box from "./Box.js";

/**
 * PROPS:
 * @param {number} width
 * @param {number} height
 * @param {string} name for className in Game.css to render
 * @param {number[]} start --> where player starts on this map
 * @param {Object[]} objects player obstacles --> look for a special one labelled goal
 * @param {() => ()} switch for switching to the next map
 * 
 */

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerx: null,
      playery: null,
      last_dir: "down", 
      held_dir: null,
      speed: 5,
      fps: 60,
      situation: "moving",  //can be "moving", "dialoguing", or "interacting"
      overlay: null, //there can only be one overlay

      //"moving"      = only time when playerx/y can be changed and Player re-rendered
      //"dialoguing"  = when dialogue box things are happening --> pay attention to choices and send them to server(?) immediately after
      //"interacting" = when Box's onClick things are happening --> can't do anything else til it's clicked again

    };
  }

  componentDidMount() {
    // remember -- api calls go here!
    console.log("calling the mount"); /////////////////////////////////////////////////////////

    this.setState({
      playerx: this.props.start[0],
      playery: this.props.start[1],
    });

    const directions = {
      "ArrowUp": "up",
      "ArrowDown": "down",
      "ArrowLeft": "left",
      "ArrowRight": "right",
    }
   
    // put these in divs and pass to Player Component?
    window.addEventListener("keydown", (e) => {
      const dir = directions[e.key];
      this.setState({
        last_dir: dir,
        held_dir: dir,
      });
    });
   
    window.addEventListener("keyup", (e) => {
      const dir = directions[e.key];
      this.setState({
        held_dir: null, 
        last_dir: dir,
      });
    });

    setInterval(this.placeChar, this.state.fps);
  }

  placeChar = () => {
    if (this.state.situation !== "moving") {
      return;
    }

    const dir = this.state.held_dir;
    let newx = this.state.playerx;
    let newy = this.state.playery;

    if (dir) {
      if (dir === "right") {
        newx += this.state.speed;
      } else if (dir === "left") {
        newx -= this.state.speed;
      } else if (dir === "up") {
        newy -= this.state.speed;
      } else if (dir === "down") {
        newy += this.state.speed;
      }
    }

    if (newx < 0) { //left
      newx = 0;
    } else if (newx > this.props.width) { //right
      newx = this.props.width;
    } else if (newy < 0) { //top
      newy = 0;
    } else if (newy > this.props.height) { //bottom
      newy = this.props.height;
    }

    for (const i in this.props.objects) {
      let delta = this.checkCollision(this.props.objects[i], newx, newy, dir);
      if (delta[0] !== newx || delta[1] !== newy) {
        if (i === "exit") {
          console.log("REACHED THE EXIT"); //it works :D
          this.props.switch();
        }
        newx = delta[0];
        newy = delta[1];
        break; // since it can only collide with one obstacle at a time
      }
    }

    this.setState({
      playerx: newx,
      playery: newy,
    });
  }

  checkCollision = (thing, xpos, ypos, direction) => {//thing = [className, x, y, width, height]
    const topBorder = thing[2];             // y
    const bottomBorder = thing[2]+thing[4]; // y + h
    const leftBorder = thing[1];            // x
    const rightBorder = thing[1]+thing[3];  // x + w 
    let final = [xpos, ypos];

    // if new (x,y) bad and old (x,y) fine, kick them back out
    if ((xpos > leftBorder && xpos < rightBorder) && (ypos > topBorder && ypos < bottomBorder)) {
      if (direction === "right") { //as in, going right pushed x into the obstacle
        final[0] = leftBorder;
      } else if (direction === "left") {
        final[0] = rightBorder;
      } else if (direction === "down") {
        final[1] = topBorder;
      } else if (direction === "up") {
        final[1] = bottomBorder;
      } //only deal with single directions because we don't move diagonal
    }
    return final;
  }




/* 
  showNewThing = (name) => { //mostly for telescope but maybe for others, you never know ...
    // callback function that'll render another box based on what the caller Box says
    // assume it's a square that's supposed to cover the page
    
    let noobs = this.state.overlays.push( );
    this.setState({
      situation: "interacting",
      overlay:  <Box name={name} x={230} y={22} width={500} height={500} key={"newthing"} onClick={this.hideNewThing} />,
    });

    // should I add it to this map's collection of objects? ...
    // or should hidden objects be @ zindex: -1 until summoned?
  }

  hideNewThing = () => {
    // callback function that'll get back to Player movement and normal game play 
    this.setState({
      situation: "moving",
      overlay: null,
    });
  }

  conversing = () => { //is this system with this.state.situation even necessary?
    this.setState({
      situation: "dialoguing",
    });
  }
*/


  // interaction = (type) => { // onClick function --doesn't work for invisible CSS class
  //   console.log("I touched a thing on the", this.props.name, "map"); // can access its own info except for the key b/c that's unique and apparently private
  //   console.log("this got passed in:", type);
  //   if (this.props.name === "left-telescope") {
  //     console.log("the west one");
  //     //this.showNewThing("redcircle");
  //   } else if (this.props.name === "right-telescope") {
  //     console.log("the east one");
  //   } else if (this.props.name === "redcircle") {
  //     console.log("  the circle of promise  ");
  //     //this.hideNewThing();
  //   } else {
  //     console.log("Hello there");
  //   }
  // }



  componentWillUnmount(){
    window.removeEventListener("keydown", (e) => {
      const dir = directions[e.key];
      this.setState({
        last_dir: dir,
        held_dir: dir,
      });
    });
   
    window.removeEventListener("keyup", (e) => {
      const dir = directions[e.key];
      this.setState({
        held_dir: null, 
        last_dir: dir,
      });
    });
  }





  // interaction = () => { // onClick function passed to Box
  //   console.log("I touched a thing on the",this.state.name,"map"); // can access Map info for Box
  // }

  render() {
    let objs = [];

    for (const key in this.props.objects) {  // onClick={this.interaction}
      objs.push(<Box key={key} name={this.props.objects[key][0]} x={this.props.objects[key][1]} y={this.props.objects[key][2]} width={this.props.objects[key][3]} height={this.props.objects[key][4]} interact={this.interaction} />);
    }

    const mapStyle = {
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
    }


    let art = this.props.name + " pixel-art"

    return (
      <div className={art} style={mapStyle} >
        {objs}
        <Player x={this.state.playerx} y={this.state.playery} last_dir={this.state.last_dir} held_dir={this.state.held_dir} />
        {this.state.overlay}
      </div>  
    );
  }
}

//shift limits and obstacle out of Player and deal with movement/collisions in here
// send goal here --> it can then detect that overlap to switch scenes


//switch maps by making it hierarchical siblings of Player?
//have the map component show ALL of the PNGs --> just that camera moves every so often

export default Map;