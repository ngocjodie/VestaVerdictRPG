import React, { Component } from "react";
import "../../utilities.css";
import "./Skeleton.css";
import "./Game.js";
import image_coming from'./highcouncil.png';


//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "929690839465-7el5elpd43lv4fgmh53vvcfegqbp961n.apps.googleusercontent.com";

class Skeleton extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <>
      <p class="gamename">  The Vesta Verdict  </p>

      <div className="pic">
        <img src={image_coming} alt="council" />
      </div>
      
      <par className="para">
      Choose your role and prove your innocence. This will be more of a paragraph! Hopefully it will make people want to play our game :D Any suggestions about relative info to be
included here?

      </par>
      </>
    );
  }
}

export default Skeleton;
