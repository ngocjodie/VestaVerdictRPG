import React, { Component } from "react";
import Playthroughs from "./Playthroughs.js";
import Awards from "./Awards.js";
import "./Profile.css"
import Rhea from "./Rheas.png"


class Frontpage extends Component{
    constructor(props){
      super(props);
    }
  
    componentDidMount() {
      console.log(this.props.userId)
    }

render() {
    return (
      <>
    <img src={Rhea} className="Profile-pic"/>


    <Playthroughs userId={this.props.userId}/>

    <Awards userId={this.props.userId}/>
    </>

    );
  }
}

export default Frontpage;