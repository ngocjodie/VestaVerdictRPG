import React, { Component } from "react";
import "../../utilities.css";
import "./Skeleton.css";

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

    <p class="gamename">  The Vesta Verdict  </p>
    </>

    );
  }
}

export default Frontpage;