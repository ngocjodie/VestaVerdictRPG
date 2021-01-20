import React, { Component } from "react";

/**
 * PROPS:
 * @param number[] limits: [top, right, bottom, left]
 * @param number[][] obstacles: [css-type, x, y]
 * @param number[] start: [x, y]
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
      held_dir: null,
      speed: 1.5,
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

    //creates cool bounce effect so you knwo you hit a boundary
    if (this.state.x < this.props.limits[3]) { //this.props.limits[3] = left
      newx = this.props.limits[3];
    } else if (this.state.x > this.props.limits[1]) { //this.props.limits[1] = right
      newx = this.props.limits[1];
    } else if (this.state.y < this.props.limits[0]) { //this.props.limits[0] = top
      newy = this.props.limits[0];
    } else if (this.state.y > this.props.limits[2]) { //this.props.limits[2] = bottom
      newy = this.props.limits[2];
    }

    const delta = [newx, newy];
    //console.log("current coords", newx,",",newy); ////////////////////////////////////////////////////
    for (const i in this.props.obstacles) {
      let option = this.checkCollision(this.props.obstacles[i], newx, newy);
      if (delta !== option) {
        newx = delta[0];
        newy = delta[1];
        break; // since it can only collide with one obstacle at a time
      }
    }
    //console.log("and now new coords", newx,",",newy); ////////////////////////////////////////////////////

    this.setState({
      x: newx, //finalpos[0],
      y: newy, // finalpos[1],
    });

  }


  checkCollision = (thing, xpos, ypos) => {
    //extract the values from thing[className, x, y, width, height]
    const topBorder = thing[2];             // y
    const bottomBorder = thing[2]+thing[4]; // y + h
    const leftBorder = thing[1];            // x
    const rightBorder = thing[1]+thing[3];  // x + w
    let final = [xpos, ypos];

    // if new (x,y) bad and old (x,y) fine, make it the limit btw them
    if ((xpos > leftBorder && xpos < rightBorder) && (ypos > topBorder && ypos < bottomBorder)) {
      console.log("** WE GOT A COLLISION **"); //////////////////////////////////////////////////////////////
      if (this.state.last_dir === "right") { //going right pushed x into obstacles
        final[0] = leftBorder;
      } else if (this.state.last_dir === "left") {
        final[0] = rightBorder;
      } else if (this.state.last_dir === "down") {
        final[1] = topBorder;
      } else if (this.state.last_dir === "up") {
        final[1] = bottomBorder;
      }
      //only deal with single directions because we don't move diagonal
    }
    return final;
  }
/*
*/

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