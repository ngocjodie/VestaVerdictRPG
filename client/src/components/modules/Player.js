import React, { Component } from "react";

//import "../../input.js";
//import "../pages/Game.css";

/**
 * PROPS FROM GAME.JS:
 * 
 * 
 */
class Player extends Component{
  constructor(props){
    super(props);

    this.state = {
      x: 90,
      y: 34,
      //held_dir: [], //think about not doing array
      last_dir: "down", 
      /**
       * vert: //1,0,-1
       * horiz: //1,0,-1
       */
      speed: 1, //or make it a prop
      fps: 20,
    };
  }


  componentDidMount() {
    //only for api calls
    console.log("mounting Player.js");

    const directions = {
      "ArrowUp": "up",
      "ArrowDown": "down",
      "ArrowLeft": "left",
      "ArrowRight": "right",
    }
   
    // put these in divs and pass to Player Component
    window.addEventListener("keydown", (e) => {
      const dir = directions[e.key];
      this.setState({
        held_dir: dir, //array.unshift(dir),
        last_dir: dir,
      });
    });
   
    window.addEventListener("keyup", (e) => {
      const dir = directions[e.key];
      this.setState({
        held_dir: null, 
      });
    });

    setInterval(this.placeChar, this.state.fps); //for placeChar --> maybe put # in state

    console.log("finished the mount");
  }


  // componentWillUnmount(){
  //   //undo event listeners
  // }

  placeChar = () => {
    const dir = this.state.held_dir;

    // do one massive set State at the end
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
    }

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

  }


  render() {
    //what to return / display

    const pixelSize = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
    );
    const camera_left = pixelSize * 66;
    const camera_top = pixelSize * 42;

    const mapStyle = {
      transform: `translate3d( ${-this.state.x*pixelSize+camera_left}px, ${-this.state.y*pixelSize+camera_top}px, 0 )`,
    }
    const charStyle ={
      transform: `translate3d( ${this.state.x*pixelSize}px, ${this.state.y*pixelSize}px, 0 )`,
    }
    
//style={mapStyle}
    return(
      <div className="map pixel-art" >
        <div className="character" facing={this.state.last_dir} walking={this.state.held_dir ? "true" : "false"} style={charStyle}>
            <div className="shadow pixel-art"></div>
            <div className="character_spritesheet pixel-art"></div>
        </div>
      </div>  
    );

  }
}

export default Player;