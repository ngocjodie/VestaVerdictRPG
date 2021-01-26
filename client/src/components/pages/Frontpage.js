import React, { Component } from "react";
import Playthroughs from "./Playthroughs.js";
import Awards from "./Awards.js";
import "./Profile.css"
import Rhea from "./Rheas.png"


class Frontpage extends Component{
    constructor(props){
      super(props);
      this.state = {
        hasWon: false,
    };
}
    componentDidMount() {
      console.log(this.props.userId)
    }

render() {
    return (
      <>
      
    <img src={Rhea} className="Profile-pic"/>
    <div className="Profile-name"> RHEA</div>
    <br></br>
    <div class="fading_line"></div>
    <div className="Profile-info"> AWARDS CABINET </div>
    <div class="container">
  <div class="holder h1">
  <div class="tooltip"> 
  <span class="tooltiptext">Tooltip text</span>
</div>
  </div>
  <div className={this.state.hasWon ? "holder h1":"holder h3"}></div>
  <div class="holder h3"></div>
  <div class="holder h4"></div>
</div>
<div class="container">
  <div class="holder h1"></div>
  <div class="holder h2"></div>
  <div class="holder h3"></div>
  <div class="holder h4"></div>
</div>



  
<Playthroughs userId={this.props.userId}/>

    <Awards userId={this.props.userId}/>
    </>

    );
  }
}

export default Frontpage;