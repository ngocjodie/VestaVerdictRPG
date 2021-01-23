
import React, { Component } from "react";
import DialogueBox from "./DialogueBox.js";
import Convos from "./Convos";

class About extends Component{
  constructor(props){
    super(props);
    this.state = {
        dialogueOption:0 ,
        hasClicked: true,

    };
}


  render() {
      return ( <DialogueBox dialogue={Convos[this.state.dialogueOption]}/>
        );
      }
    }
    

export default About;
