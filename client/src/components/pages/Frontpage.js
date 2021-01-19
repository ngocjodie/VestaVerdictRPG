import React, { Component } from "react";
import "../../utilities.css";
import "./Skeleton.css";
import Playthroughs from "./Playthroughs.js";
import Awards from "./Awards.js";


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

    <p className="Skeleton-gamename">  The Vesta Verdict </p>

    <Playthroughs userId={this.props.userId}/>

    <Awards userId={this.props.userId}/>



    </>

    );
  }
}

export default Frontpage;