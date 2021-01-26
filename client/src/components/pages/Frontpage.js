import React, { Component } from "react";
import Playthroughs from "./Playthroughs.js";
import Awards from "./Awards.js";
import "./Profile.css"
import Rhea from "./Rheas.png"


class Frontpage extends Component{
    constructor(props){
      super(props);
      this.state = {
        hasWon: true,
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
    <div className="fading_line"></div>
    <div className="Profile-info"> AWARDS CABINET </div>
    <div className="container">
  <div className="holder h1">
  <div className="tooltip"> 
  <span className="tooltiptext">Tooltip text</span>
</div>
  </div>
  <div className={this.state.hasWon ? "holder h2":"holder h9"}></div>
  <div className="holder h3"></div>
  <div className="holder h4"></div>
</div>
<div className="container">
  <div className="holder h5"></div>
  <div className="holder h6"></div>
  <div className="holder h7"></div>
  <div className="holder h8"></div>
</div>



  
<Playthroughs userId={this.props.userId}/>

    <Awards userId={this.props.userId}/>
    </>

    );
  }
}

export default Frontpage;