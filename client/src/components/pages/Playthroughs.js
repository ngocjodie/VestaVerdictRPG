import React, { Component } from "react";
import { get } from "../../utilities";
import "./Profile.css";


/*
 * What should it inherit (if anything at all)?
 * states of the character(?)
 * 
*/
class Playthroughs extends Component{
  constructor(props){
    super(props);
    this.state = {
        playthroughs: ""
    };
}
  

  componentDidMount() {
    get("/api/playthroughs", { userId: this.props.userId}).then(num => {
        this.setState({ playthroughs: num.playthroughs });
    });
  }

  render() {
    //what to return / display
    return(
      <div id="numplays" className="Profile-info">
          Number of playthroughs: {this.state.playthroughs}
      </div>
    );
  }
}


export default Playthroughs;