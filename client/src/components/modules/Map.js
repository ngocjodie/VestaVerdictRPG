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
 * 
 */

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // playerx: null,
      // playery: null,
      // last_dir: "down", 
      // held_dir: null,
      // speed: 5,
      // fps: 60,

      // a group of interactables that look just like objects except they have an onClick that depends on their key?
    };
  }

  componentDidMount() {
    // remember -- api calls go here!
    // this.setState({
    //   playerx: this.props.startx,
    //   playery: this.props.starty,
    // });

    // const directions = {
    //   "ArrowUp": "up",
    //   "ArrowDown": "down",
    //   "ArrowLeft": "left",
    //   "ArrowRight": "right",
    // }
   
    // // put these in divs and pass to Player Component?
    // window.addEventListener("keydown", (e) => {
    //   const dir = directions[e.key];
    //   this.setState({
    //     last_dir: dir,
    //     held_dir: dir,
    //   });
    // });
   
    // window.addEventListener("keyup", (e) => {
    //   const dir = directions[e.key];
    //   this.setState({
    //     held_dir: null, 
    //     last_dir: dir,
    //   });
    // });

    // setInterval(this.placeChar, this.state.fps);

  }

  // placeChar = () => {
  //   const dir = this.state.held_dir;
  //   let newx = this.state.playerx;
  //   let newy = this.state.playery;

  //   if (dir) {
  //     if (dir === "right") {
  //       newx += this.state.speed;
  //     } else if (dir === "left") {
  //       newx -= this.state.speed;
  //     } else if (dir === "up") {
  //       newy -= this.state.speed;
  //     } else if (dir === "down") {
  //       newy += this.state.speed;
  //     }
  //   }

  //   if (newx < 0) { //left
  //     newx = 0;
  //   } else if (newx > this.props.width) { //right
  //     newx = this.props.width;
  //   } else if (newy < 0) { //top
  //     newy = 0;
  //   } else if (newy > this.props.height) { //bottom
  //     newy = this.props.height;
  //   }

  //   for (const i in this.props.obstacles) {
  //     let delta = this.checkCollision(this.props.obstacles[i], newx, newy, dir);
  //     if (delta[0] !== newx || delta[1] !== newy) {
  //       if (i === "goal") {
  //         //do the thing to switch scenes, which would probably involve a return or break
  //       }
  //       newx = delta[0];
  //       newy = delta[1];
  //       break; // since it can only collide with one obstacle at a time
  //     }
  //   }

  //   this.setState({
  //     playerx: newx,
  //     playery: newy,
  //   });
  // }











  // interaction = () => { // onClick function passed to Box
  //   console.log("I touched a thing on the",this.state.name,"map"); // can access Map info for Box
  // }

  render() {
    let objs = [];
    let obstacles = [];

    for (const key in this.props.objects) {  // onClick={this.interaction}
      objs.push(<Box key={key} name={this.props.objects[key][0]} x={this.props.objects[key][1]} y={this.props.objects[key][2]} width={this.props.objects[key][3]} height={this.props.objects[key][4]} />);
      obstacles.push(this.props.objects[key]);
    }

  const mapStyle = {
    width: `${this.props.width}px`,
    height: `${this.props.height}px`,
  }

    let art = this.props.name + " pixel-art"

    return (
      <div className={art} style={mapStyle} >
        {objs}
        <Player start={this.props.start} limits={[0, this.props.width, this.props.height, 0]} obstacles={obstacles} /> {/* Player comes last so nothing's floating above it */}
      </div>  
    );
  }
}

//shift limits and obstacle out of Player and deal with movement/collisions in here
// send goal here --> it can then detect that overlap to switch scenes


//switch maps by making it hierarchical siblings of Player?
//have the map component show ALL of the PNGs --> just that camera moves every so often

export default Map;