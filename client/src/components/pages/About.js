
import React, { Component } from "react";
import "./About.css"
import bg from "./background_frontpage.jpg"



class About extends Component{
  constructor(props){
    super(props);
    this.state = {

    };
}


  render() {
    return(
<div className="About-bg">
  <img src={bg} className="About-img"/>
</div>

      );
}
}
    

export default About;
