import React, { Component } from "react";

import "../../input.js";
import "./Player.css";
import { drawChar } from "../../canvas.js";

/*
 * What should it inherit?
 * a location?
 * 
*/
class Player extends Component{
  constructor(props){
    super(props);

    this.state = {
      x: 90,
      y: 34,
      color: "orange",
      speed: 10, //or make it a prop
    };
  }

  /* Direction key state
  directions = {
    up: "up",
    down: "down",
    left: "left",
    right: "right",
  }
  keys = {
    38: directions.up,
    37: directions.left,
    39: directions.right,
    40: directions.down,
  }
  */

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
      console.log("up");
      this.setState({
        y: this.state.y - this.state.speed,
      });
    } else if (e.key === "ArrowDown") {
      console.log("down");
      this.setState({
        y: this.state.y + this.state.speed,
      });
    } else if (e.key === "ArrowLeft") {
      console.log("left");
      this.setState({
        x: this.state.x - this.state.speed,
      });
    } else if (e.key === "ArrowRight") {
      console.log("right");
      this.setState({
        x: this.state.x + this.state.speed,
      });
    }
  });


  componentDidMount() {
    //only for api calls
  }


 

  render() {
    //what to return / display
    drawChar(this.state.x, this.state.y, this.state.color);

  }
}

export default Player;





/*
 * class Player extends Component{
  constructor(props){
    super(props);

    this.state = {
      char: null,
      x: 90,
      y: 34,
      color: "orange",
      speed = 1,
      held_directions = [],
    };
  }

   Direction key state 
  directions = {
    up: "up",
    down: "down",
    left: "left",
    right: "right",
  }
  keys = {
    38: directions.up,
    37: directions.left,
    39: directions.right,
    40: directions.down,
  }
  window.addEventListener("keydown", (e) => {
    var dir = keys[e.which];
    if (dir && this.state.held_directions.indexOf(dir) === -1) {
      this.setState({
        held_directions: this.state.held_directions.unshift(dir),
      });
    }
  });

  window.addEventListener("keyup", (e) => {
    var dir = keys[e.which];
    var index = held_directions.indexOf(dir);
    if (index > -1) {
      this.setState({
        held_directions: this.state.held_directions.splice(index, 1),

      });
    }
  });


  componentDidMount() {
    //only for api calls
    this.setState({
      char: document.querySelector(".character"),
    });
  }

  const placeCharacter = () => {
   
    var pixelSize = parseInt(
       getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
    );
    
    const held_direction = held_directions[0];
    if (held_direction) {
       if (held_direction === directions.right) {
         this.setState({
           x = this.state.x + this.state.speed,
        });
       }
       if (held_direction === directions.left) {
         this.setState({
           x = this.state.x - this.state.speed,
         });
       }
       if (held_direction === directions.down) {
         this.setState({
             y = this.state.y + this.state.speed,
         });
       }
       if (held_direction === directions.up) {
        this.setState({
            y = this.state.y - this.state.speed,
        });
      }
    }
    
    //Limits (gives the illusion of walls)
    var leftLimit = -8;
    var rightLimit = (16 * 11)+8;
    var topLimit = -8 + 32;
    var bottomLimit = (16 * 7);
    if (this.state.x < leftLimit) {
      this.setState({
        x = leftLimit,
     });
    }
    if (x > rightLimit) {
      this.setState({
        x = rightLimit,
     });
    }
    if (y < topLimit) {
      this.setState({
        y = topLimit,
     });
    }
    if (y > bottomLimit) {
      this.setState({
        y = bottomLimit,
     });
    }
    
    
    this.state.char.style.transform = `translate3d( ${this.state.x*pixelSize}px, ${this.state.y*pixelSize}px, 0 )`;  
  }

  //Set up the game loop
  const step = () => {
    placeCharacter();
    window.requestAnimationFrame(() => {
      step(); //might cause some issues
    })
  }

 

  render() {
    //what to return / display
    step(); //kick off the first step!

  }
}

export default Player;

 */