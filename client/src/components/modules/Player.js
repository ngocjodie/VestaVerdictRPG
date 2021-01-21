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
      x: null,
      y: null,
      last_dir: "down", 
      held_dir: null,
      speed: 5,
      fps: 60,
    };
  }

  componentDidMount() {
    this.setState({
      x: this.props.start[0],
      y: this.props.start[1],
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

    //creates cool bounce effect so you know you hit a boundary
    if (newx < this.props.limits[3]) { //this.props.limits[3] = left
      newx = this.props.limits[3];
    } else if (newx > this.props.limits[1]) { //this.props.limits[1] = right
      newx = this.props.limits[1];
    } else if (newy < this.props.limits[0]) { //this.props.limits[0] = top
      newy = this.props.limits[0];
    } else if (newy > this.props.limits[2]) { //this.props.limits[2] = bottom
      newy = this.props.limits[2];
    }

    const change = [newx, newy];
    for (const i in this.props.obstacles) {
      let delta = this.checkCollision(this.props.obstacles[i], newx, newy, dir);
      if (delta !== change) {
        newx = delta[0];
        newy = delta[1];
        break; // since it can only collide with one obstacle at a time
      }
    }
    //roof @ (70,60) (65,60)
    //wall @ (60,75) (60,65)
    //wall @ (84,70) (84,65)
    //foot @ (65,84) (70,84) (80,84)


    this.setState({
      x: newx,
      y: newy,
    });
  }


  checkCollision = (thing, xpos, ypos, direction) => {//thing = [className, x, y, width, height]
    const topBorder = thing[2];             // y
    const bottomBorder = thing[2]+thing[4]; // y + h
    const leftBorder = thing[1];            // x
    const rightBorder = thing[1]+thing[3];  // x + w 
    let final = [xpos, ypos];

    // if new (x,y) bad and old (x,y) fine, kick them back 
    if ((xpos > leftBorder && xpos < rightBorder) && (ypos > topBorder && ypos < bottomBorder)) {
      // console.log("** WE HAVE A COLLISION **"); /////////////////////////////////////////////////////////////////////
      // console.log("for obstacle", thing[0], "it's at", leftBorder, topBorder); ////////////////////////////////////////
      
      if (direction === "right") { //as in, going right pushed x into obstacles
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

//NOTE: translate3d's (0,0) !== pixel/Player's (0,0) --> probably causing my issues

  render() {
    const charStyle ={
      transform: `translate( ${this.state.x}px, ${this.state.y}px )`,
    }
    // console.log("current position:", this.state.x, this.state.y); /////////////////////////////////////////////////
    
    return(
      <div className="character" facing={this.state.last_dir} walking={this.state.held_dir ? "true" : "false"} style={charStyle}>
          <div className="shadow pixel-art"></div>
          <div className="character_spritesheet pixel-art"></div>
      </div>
    );
  }
}

export default Player;

