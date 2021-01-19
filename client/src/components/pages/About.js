import React, { Component } from "react";
// import { useMachine } from "@xstate/react";
// import { Machine } from "xstate";

import "./About.css";

/*
 * What should it inherit? If dialogue shows up later?
 * states of the character(?)
 * 
*/

// STEPS:
// 1. A set of states (e.g., idle, loading, success, error, etc.)
// 2. A set of actions (e.g., SEARCH, CANCEL, SELECT_PHOTO, etc.)
// 3. An initial state (e.g., idle)
// 4. A transition function (e.g., transition('idle', 'SEARCH') == 'loading')


// DESCRIPTIONS OF STATES
// noDialogue: box, question, answers all hidden
// startDialogue: box unhidden, question writes, answers fadein
// continuedDialogue: box unchanged, question writes, answers fade in
// NOTE: on transition, all states should have question and answers hidden. unhidden is condiitonal

// const stateMachine = new Machine({
//   id: "toggleMachine",
//   initial: "noDialogue",
//   states: {
//     "noDialogue": {
//       on: {
//         SPACEBAR: "startDialogue"
//       }
//     },
//     "startDialogue": {
//       on: {
//         SPACEBAR: "noDialogue",
//         CLICK: "noDialogue",
//         CLICK: "continuedDialogue"
//       }
//     },
//     "continuedDialogue": {
//       on: {
//         SPACEBAR: "noDialogue",
//         CLICK: "noDialogue",
//         CLICK: "continuedDialogue"
//       }
//     }
//   }
// });

// function App() {
//   const [current, send] = useMachine(toggleMachine);
// }

// console.log(current);

class Dialogue extends Component{
  constructor(props){
    super(props);

  }

  componentDidMount() {
    //only for api calls
  }

  render() {
    //what to return / display
    return (
      <div>
        
      <h1 className="About-title"> ABOUT </h1>
      <p className="About-summary-text">
        We are Team Purple for the 6.148 WebLab class and competition.  All of us are interested in games and storytelling, so we made an RPG-style game to reflect that.  Hope you enjoy!
      </p>
    </div>
    );
  }
}

export default Dialogue;


