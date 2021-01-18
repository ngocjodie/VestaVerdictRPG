import React, { Component } from "react";

//import "../../input.js";
//import "../pages/Game.css";

/**
 * PROPS FROM GAME.JS:
 * 
 * character object
 * map object
 * 
 */
class Player extends Component{
  constructor(props){
    super(props);

    this.state = {
      x: 90,
      y: 34,
      held_dir: [],
      speed: 1, //or make it a prop
      mounted: false,
    };
  }


  componentDidMount() {
    //only for api calls
    console.log("mounting Player.js");


    // this.setState({
    //   char: document.querySelector(".character"),
    //   map: document.querySelector(".map"),
    // });

    const directions = {
      "ArrowUp": "up",
      "ArrowDown": "down",
      "ArrowLeft": "left",
      "ArrowRight": "right",
    }
   
    window.addEventListener("keydown", (e) => {
      console.log("registered");
      const dir = directions[e.key];
      console.log("a key press:", dir);
      if (dir && this.state.held_dir.indexOf(dir) === -1) {
        this.setState({
          held_dir: this.state.held_dir.unshift(dir),
        });
      }
    });
   
    window.addEventListener("keyup", (e) => {
      const dir = directions[e.key];
      console.log("now it let up");
      const index = this.state.held_dir.indexOf(dir);
      if (index > -1) {
        this.setState({
          held_dir: this.state.held_dir.splice(index, 1),
        });
      }
    });

    console.log("finished the mount");
  }

  placeChar = () => {
    console.log("** VIBE CHECK **");
    const pixelSize = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
    );
    const character = this.props.char;
    const map = this.props.map;

    console.log("pixel size =", pixelSize);
    console.log("hi");
    console.log("character:", character);
    console.log("map:", map);

    const dir = this.state.held_dir[0];
    if (dir) {
      if (dir === "right") {
        this.setState({
          x: this.state.x + this.state.speed,
        });
      } else if (dir === "left") {
        this.setState({
          x: this.state.x - this.state.speed,
        });
      } else if (dir === "up") {
        this.setState({
          y: this.state.y - this.state.speed,
        });
      } else if (dir === "down") {
        this.setState({
          y: this.state.y + this.state.speed,
        });
      }
      character.setAttribute("facing", dir);
    }
    character.setAttribute("walking", dir ? "true" : "false");

    const leftLimit = -8;
    const rightLimit = (16 * 11)+8;
    const topLimit = -8 + 32;
    const bottomLimit = (16 * 7);

    if (this.state.x < leftLimit) {
      this.setState({
        x: leftLimit,
      });
    } else if (this.state.x > rightLimit) {
      this.setState({
        x: rightLimit,
      });
    } else if (this.state.y < topLimit) {
      this.setState({
        y: leftLimit,
      });
    } else if (this.state.y > bottomLimit) {
      this.setState({
        y: bottomLimit,
      });
    }

    const camera_left = pixelSize * 66;
    const camera_top = pixelSize * 42;
    
    map.style.transform = `translate3d( ${-x*pixelSize+camera_left}px, ${-y*pixelSize+camera_top}px, 0 )`;
    character.style.transform = `translate3d( ${x*pixelSize}px, ${y*pixelSize}px, 0 )`;  
  }


  step = () => {
    console.log("stepped");
    this.placeChar();
    window.requestAnimationFrame(() => {
      step();
    })
  }


 

  render() {
    //what to return / display
    console.log("...now then, what did we inherit?");
    console.log("char =", this.props.char);
    console.log("map =", this.props.map);

    if (!this.props.char || !this.props.map) {
      console.log("they're null")
    }

    //this.step();

    return(
      <div>WHAT'S UP GAMERS</div>
    );

  }
}

export default Player;