import React, { Component } from "react";
import { get, post } from "../../utilities";

import DialogueBox from "../pages/DialogueBox.js";
import Convos from "../pages/Convos";
import Player from "./Player.js";
import Box from "./Box.js";
// import AWARDS_DEFINITION from "./awardsDefinition.js";




/**
 * PROPS:
 * @param {number} width
 * @param {number} height
 * @param {string} key for us to tell exactly what piece is rendering (many pieces could share a CSS class)
 * @param {string} name for className in Game.css to render
 * @param {number[]} start --> where player starts on this map
 * @param {Object[]} objects player obstacles --> look for a special one labelled goal
 * @param {() => ()} switch for switching to the next map
 * 
 * @param {() => ()} conversing for letting Game control the process of conversation
 * @param {number} dialogueOption for which convo to do next --> maybe eliminate this when we get the GET request up and running
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
      // speed: 5,
      speed: 5,
      fps: 60,
      intervalid: null,
      situation: "moving",  //can be "moving", "dialoguing", or "interacting"
      overlay: null, //there can only be one overlay -- or change to interactable so that it won't even try to process 2 interactions at once

      //"moving"      = only time when playerx/y can be changed and Player re-rendered
      //"dialoguing"  = when dialogue box things are happening --> pay attention to choices and send them to server(?) immediately after
      //"interacting" = when Box's onClick things are happening --> can't do anything else til it's clicked again
      //maybe dialoguing is the same as interacting ...
    };
  }

  componentDidMount() {
    this.setState({
      playerx: this.props.start[0],
      playery: this.props.start[1],
      intervalid: setInterval(this.placeChar, this.state.fps)
    });

    const directions = {
      "ArrowUp": "up",
      "ArrowDown": "down",
      "ArrowLeft": "left",
      "ArrowRight": "right",
      "w": "up",
      "s": "down",
      "a": "left",
      "d": "right",
    }

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
          this.props.switch(); //moves to the next map
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
    const bottomBorder = thing[2] + thing[4]; // y + h
    const leftBorder = thing[1];            // x
    const rightBorder = thing[1] + thing[3];  // x + w 
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


  distancetest = (x1, y1, x2, y2, w2, h2, limit) => {
    let a = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;      //corner distances
    let b = ((x2 + w2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;
    let c = ((x2 - x1) ** 2 + (y2 + h2 - y1) ** 2) ** 0.5;
    let d = ((x2 + w2 - x1) ** 2 + (y2 + h2 - y1) ** 2) ** 0.5;
    if (a < limit || b < limit || c < limit || d < limit) {
      return true;
    }
    return false;
  }


  interaction = (properties) => { // onClick function --doesn't work for invisible CSS class
    const type = properties.id;
    // radius limit is the last parameter
    const close = this.distancetest(this.state.playerx, this.state.playery, properties.x, properties.y, properties.width, properties.height, 64);

    if (type === "START") { //tester
      post("/api/choice", { choice: "WIPE" }).then((what) => {
        console.log("from the POST", what); ///////////////////////////////////////////////
        this.props.switch();
      })
      //api call to wipe the player's previous choices
    }

    let awardsDefinition = {"sly": ["3", "6"], "cinnamon": ["0", "13"]};

    if (type === "END") {
      get("/api/choice").then((important_choices) => {
        console.log("sent get request");
        console.log(awardsDefinition);
        Object.entries(awardsDefinition).forEach((awardName, decisions) => {
          console.log("hello im here 1");
          let getAwards = true;
          for (let s in decisions) {
            if (!important_choices.includes(s)) {
              getAwards = false;
            }
          }
          // const getAwards = decisions.reduce(id => {
          //   return (important_choices.includes(id))
          // })
          if (getAwards) {
            console.log("hello im here");
            console.log(awardName[0]);
            post("/api/awards", { award: awardName[0] })
          }
        })
      }
      )}

    if (!close) {
      console.log("too far from the thing it clicked on"); ////////////////////////////////////////////////
      return;
    }

    //specific cases may/will require hardcoding

    // console.log("clicking on", properties, "of type", type);

    if (type === "turtle") { //template
      this.startConversation(19);
    } else if (type === "telescopeLeft") { //how telescopes work
      this.showNewThing("pretty view"); //aesthetic view

    } else if (type === "telescopeRight") {
      if (this.batchofIDs(["past 1st flashback"])){  //finished 2nd Council Scene
        this.showNewThing("empty clearing");
      } else if (this.batchofIDs(["7"]) || this.batchofIDs(["8"])) { //gave fruit to old woman
        //POST request that they've seen healthy Cassandra
        this.showNewThing("healthy Cassandra walking away");
      } else {
        this.showNewThing("old woman in clearing");
      }
                                                      //promised water ?            does she ever leave the temple after the 1st flashback? 
    } else if (type === "fountain" && this.batchofIDs(["12"]) && !this.batchofIDs(["past 1st flashback"])) {
      // POST request to log the choice
      post("/api/choice", {choice: "#"} ).then(()=>{ //WATER = id:"12" right?
        console.log("got water");
      });

    } else if (type === "bag") {
      // POST request to log the choice
      post("/api/choice", {choice: "#"} ).then(()=>{ //got bag
        console.log("got bag");
      });
      // cover it with a tile of ground using showNewThing?

    } else if (type === "fruit") {
      this.startConversation(2);  //tempting grapes
      //hide them in a similar way to the bag?

    } else if (type === "old woman") {
      if (this.batchofIDs(["haven't talked before"])){
        this.startConversation(1);
      } else if (this.batchofIDs(["promised fruit"])){
        this.startConversation(12);
      } else if (this.batchofIDs(["talked once before and talked to fruit"])){
        this.startConversation(3);
      } else if (this.batchofIDs(["12"])){ //promised water?
        this.startConversation(13);
      } else if (this.batchofIDs(["got water"])) { //same # as fountain's POST
        this.startConversation(4);
      }

    } else if (type === "Laia") {
      if (this.batchofIDs(["14"])) { //sold bag
        this.startConversation(6);
      } else if (this.batchofIDs(["got bag"])) { //13 + more or just not 14? or POST once bag is clicked on?
        this.startConversation(5);
      } else if (this.batchofIDs(["talked to her before"])) {
        this.startConversation(11); //don't see her anywhere else right?
      } else { //start 
        this.startConversation(0); // or would this automatically start after first Council Scene?
      }

    } else if (type === "Cassandra") {
      if (this.batchofIDs(["in phase 2"])) { //finished 2nd Council Scene
        if (this.batchofIDs(["finished all tests"])) {
          // Convo doesn't exist yet?
        } else if (this.batchofIDs(["between tests"])) {
          //Convo doesn't exist yet?
        } else if (this.batchofIDs(["saw healthy Cassandra in telescope"])) {
          this.startConversation(8);
        } else {
          this.startConversation(7);
        }
      } else { // in phase 3
        //
      }

    } else if (type === "Livia") {
      if (this.batchofIDs(["in phase 2"])) { //finished 2nd Council Scene
        if (this.batchofIDs(["122"])) { //fail chellah
          this.startConversation(16);
        } else if (this.batchofIDs(["300"])) { //pass chellah
          this.startConversation(15);
        } else if (this.batchofIDs(["5"]) || this.batchofIDs(["6"])) { //ate 1 or many grapes
          this.startConversation(22);
        } else if (this.batchofIDs(["532"])) { //no fruit
          this.startConversation(10);
        }
      } else { //in phase 3
        //
      }

    } else if (type === "Juno") {
      if (this.batchofIDs(["in phase 2"])) { //finished 2nd Council Scene
        if (this.batchofIDs(["finished toy test"])) {
          this.startConversation(14);
        } else {
          this.startConversation(9);
        }
      } else { //in phase 3
        //
      }

    } else if (type === "Fortunata") {
      if (this.batchofIDs(["in phase 2"])) { //finished 2nd Council Scene
        if (this.batchofIDs(["finished riddles"])) {
          this.startConversation(17);
        } else {
          this.startConversation(); //Convo doesn't exist yet
        }
      } else { //in phase 3
        //
      }

    } else if (type === "council") { //
      if (this.batchofIDs(["finished first flashback"])) {
        if (this.batchofIDs(["got water"])) {
          this.startConversation(20);
        } else {
          this.startConversation(21); 
        }
      } else { //3rd Council Scene bad=666   tirals: bad=122,124 good=300
        if (this.batchofIDs(["300"]) && !this.batchofIDs(["666"])) { //good omens, good trials
          this.startConversation(23);
        } else if (this.batchofIDs(["666","300"])) { // bad omens, good trials
          this.startConversation(24);
        } else if (this.batchofIDs(["666","124"]) || this.batchofIDs(["666","122"])) { //bad omens, bad trials
          this.startConversation(25);
        } else if (this.batchofIDs(["122"]) || this.batchofIDs(["124"])) { //good omens, bad trials
          this.startConversation(26);
        }
      }

    } else {
      console.log("Hello there"); //////////////////////////////////////////////////////////////////
    }
  }





  showNewThing = (name) => { //mostly for telescope but maybe for others, you never know ...
    // callback function that'll render another box based on what the caller Box says
    // assume it's a square that's supposed to cover the page: x=230, y=22, w=500, h=500
    if (this.state.overlay !== null) {
      return;
    }

    this.setState({
      situation: "interacting",                                       //because there can only be 1 at a time
      overlay: <Box name={name} x={80} y={22} width={800} height={500} id={"newthing"} key={"newthing"} interact={this.hideNewThing} />,
    });
  }

  hideNewThing = (name) => {
    // callback function that'll get back to Player movement and normal game play
    this.setState({
      situation: "moving",
      overlay: null,
    });
  }


  startConversation = (index) => { //different function because IT tells Player when to continue gameplay
<<<<<<< HEAD
=======
    /*index*/
>>>>>>> 337c8df68acf83317b7647694aa3205b873012a1
    if (this.state.overlay !== null) {
      return;
    }

    this.setState({
      situation: "dialoguing",
      overlay: <DialogueBox key={"convo"} dialogue={Convos[index]} ending={this.endConversation} />,
    });

  }

  endConversation = () => {
    this.props.conversing();
    this.setState({
      situation: "moving",
      overlay: null,
<<<<<<< HEAD
    }); 
    //if (transitioning to a new room) {
    //   this.props.switch();
    //}
  }

  batchofIDs = (array) => {
    //make sure array of IDs are strings like ["0", "14", "800"]
    let source = [];
    get("/api/choice", { userId: this.props.userId}).then((ret) => {
      console.log("from my GET request:", ret); //////////////////////////////////////////////////////////////////////
      source = ret;
    });
    for (const i in array) {
      if (!source.includes(i)) {
        return false;
      }
    }
    return true;
=======
    });
>>>>>>> 337c8df68acf83317b7647694aa3205b873012a1
  }








  componentWillUnmount() {
    clearInterval(this.state.intervalid);

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

    //send dialogue things so Game can tell what's next
  }

  render() {
    let objs = [];

    for (const key in this.props.objects) {
      objs.push(<Box key={key} id={key} name={this.props.objects[key][0]} x={this.props.objects[key][1]} y={this.props.objects[key][2]} width={this.props.objects[key][3]} height={this.props.objects[key][4]} interact={this.interaction} />);
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

export default Map;