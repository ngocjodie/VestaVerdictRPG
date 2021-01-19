import React, { Component } from "react";

/**
 * PROPS:
 * @param number[] limits: [top, right, bottom, left]
 * @param number[][] obstacles: [css-type, x, y]
 * 
 * THINGS THAT COULD BE PROPS FOR LATER
 *  - last_dir to tell where it should face? (I'm leaning no but whatever)
 *  - speed
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
    const dir = this.state.held_dir;
    let newx = this.state.x;
    let newy = this.state.y;

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

    if (this.state.x < this.props.limits[3]) { //this.props.limits[3] = left
      newx = this.props.limits[3];
    } else if (this.state.x > this.props.limits[1]) { //this.props.limits[1] = right
      newx = this.props.limits[1];
    } else if (this.state.y < this.props.limits[0]) { //this.props.limits[0] = top
      newy = this.props.limits[0];
    } else if (this.state.y > this.props.limits[2]) { //this.props.limits[2] = bottom
      newy = this.props.limits[2];
    }

    // let finalpos = this.checkCollision(newx, newy);
    // console.log("finalpos =", finalpos, "vs.", newx, "+", newy);

    this.setState({
      x: newx, //finalpos[0],
      y: newy, // finalpos[1],
    });

  }


  // checkCollision = (xpos, ypos) => {
  //   const topLim = this.props.obstacles[0][1];
  //   const bottomLim = topLim + 20;
  //   const leftLim = this.props.obstacles[0][2];
  //   const rightLim = leftLim + 20;
  //   if (xpos < leftLim) {
  //     xpos = leftLim;
  //   } else if (xpos > rightLim) {
  //     xpos = rightLim;
  //   } 
  //   if (ypos < topLim) {
  //     ypos = topLim;
  //   } else if (ypos > bottomLim) {
  //     ypos = bottomLim;
  //   }
  //   return([xpos, ypos]);
  // }


  /*
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
*/

  render() {
    const pixelSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--pixel-size'));
    // const camera_left = pixelSize * 66;
    // const camera_top = pixelSize * 42;
    // const mapStyle = { //disable if you don't want camera to move
    //   transform: `translate3d( ${-this.state.x*pixelSize+camera_left}px, ${-this.state.y*pixelSize+camera_top}px, 0 )`,
    // }
    //style={mapStyle} <-- put this in if you want camera to move with player

    const charStyle ={
      transform: `translate3d( ${this.state.x*pixelSize}px, ${this.state.y*pixelSize}px, 0 )`,
    }
    
    return(
      <div className="character" facing={this.state.last_dir} walking={this.state.held_dir ? "true" : "false"} style={charStyle}>
          <div className="shadow pixel-art"></div>
          <div className="character_spritesheet pixel-art"></div>
      </div>
    );
  }
}

export default Player;