import React from 'react';
import { Machine, interpret } from 'xstate';
import { dialogueMachine } from './dialogueMachine.js';

import "./dialogueText.js"
import "./dialogueBox2.css"

/*
 * What should it inherit? If dialogue shows up later?
 * states of the character(?)
 * 
*/

class Dialogue extends React.Component {
  state = {
    current: dialogueMachine.initialState
  };


  service = interpret(dialogueMachine).onTransition(current =>
    this.setState({ current })
  );

  componentDidMount() {
    this.service.start();
  }

/*
  forClick = () => { //practicing my passing-functions-into-html skills
    const { send } = this.service;
    const continuing = false;
    const ret = continuing ? send("CONTINUE") : send("CLOSE"); 
    console.log("continuingFunction");
    return ret;
  }
*/

  componentWillUnmount() {
    this.service.stop();
  }
  

  render() {
    console.log("check");
    const { current } = this.state;
    const { send } = this.service;
    // TEST PURPOSES ONLY : MUST CHANGE WITH DIALOGUE
    var continuing = false;

    var boxHidden = current.matches('closed') || current.matches('closing') ? true : false;
    var textHidden = current.matches('closed') || current.matches('closing') || current.matches('onlyTextClosing') ? true : false;
    
    if (this.state.current.matches("closed")) {
      // alert("state:closed")
      onkeyup = function (e) {
        e.preventDefault;
          //e.keyCode === 32 is deprecated terms that my computer hates, so I found the "modern" version and it works
        if (e.key === " ") { //
          // alert('state: closed, button pressed')
          send("OPEN")
        }
      }
    }

    if (this.state.current.matches("opening")) {
      // alert("state: opening")
      setTimeout(() => {
        send("DONE");
      }, 300
  );
    }

    if (this.state.current.matches("closing")) {
      // alert("closing")
      setTimeout(() => {
          send("DONE");
        }, 300
    );
    }

    if (this.state.current.matches("onlyTextClosing")) {
      // alert("textclosing")
      alert(textHidden)
      setTimeout(() => {
        send("DONE");
      }, 300
  );
    }

    if (this.state.current.matches("onlyTextOpening")) {
      // alert("textOpening")
      setTimeout(() => {
        send("DONE");
      }, 300
  );
    }


    return (
        <div className="dBox-flex-container">
          <div className={`dBox-boxPic dBox-img ${boxHidden ? " dBox-hidden" : ""}`}>
            <div className={`dBox-textQ anim-typewriter ${boxHidden ? " dBox-hidden" : ""}`}> Question </div>
            <button onClick={() => {continuing ? send("CONTINUE") : send("CLOSE"); console.log("continuingFunction")}} className={`dBox-textA ${textHidden ? " dBox-hidden" : " dBox-blockDisplay"}`}><div className="dBox-choices"> Answer Options </div></button>
          </div>
        </div>
  );
  }
}

export default Dialogue;