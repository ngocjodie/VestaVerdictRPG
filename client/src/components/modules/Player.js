import React, { Component } from "react";

/**
 * THINGS THAT COULD BE PROPS FOR LATER
 *  - x + y for when entering new room
 *  - last_dir to tell where it should face? (I'm leaning no but whatever)
 *  - speed
 *  - map or character classNames to tell what things should look like
 *  - directionLimits + cameraCorners
 */
class Player extends Component{
  constructor(props){
    super(props);

    this.state = {
      x: 90,
      y: 34,
      last_dir: "down", 
      speed: 1,
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
        last_dir: dir,
        held_dir: dir, //array.unshift(dir),
      });
    });
   
    window.addEventListener("keyup", (e) => {
      const dir = directions[e.key];
      this.setState({
        held_dir: null, 
        last_dir: dir,
      });
    });

    setInterval(this.placeChar, this.state.fps); //for placeChar --> maybe put # in state

    console.log("finished the mount");
  }



  placeChar = () => {
    const dir = this.state.held_dir;
    let newx = this.state.x;
    let newy = this.state.y;

    // do one massive set State at the end
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

    const leftLimit = -8;
    const rightLimit = (16 * 11)+8;
    const topLimit = -8 + 32;
    const bottomLimit = (16 * 7);

    if (this.state.x < leftLimit) {
      newx = leftLimit;
    } else if (this.state.x > rightLimit) {
      newx = rightLimit;
    } else if (this.state.y < topLimit) {
      newy = topLimit;
    } else if (this.state.y > bottomLimit) {
      newy = bottomLimit;
    }

    this.setState({
      x: newx,
      y: newy,
    });
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", (e) => {
      const dir = directions[e.key];
      this.setState({
        held_dir: dir, //array.unshift(dir),
        last_dir: dir,
      });
    });
   
    window.removeEventListener("keyup", (e) => {
      const dir = directions[e.key];
      this.setState({
        last_dir: dir,
        held_dir: null, 
      });
    });
  }


  render() {
    const pixelSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--pixel-size'));
    const camera_left = pixelSize * 66;
    const camera_top = pixelSize * 42;

    const mapStyle = { //disable if you don't want camera to move
      transform: `translate3d( ${-this.state.x*pixelSize+camera_left}px, ${-this.state.y*pixelSize+camera_top}px, 0 )`,
    }
    const charStyle ={
      transform: `translate3d( ${this.state.x*pixelSize}px, ${this.state.y*pixelSize}px, 0 )`,
    }
    
//style={mapStyle} <-- put this in if you want camera to move with player
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