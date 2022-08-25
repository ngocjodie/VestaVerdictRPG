import React, { Component } from "react";
import "../../utilities.css";
import "./Skeleton.css";
import "./Game.js";
import bg from "./basicBlack.png";




//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "812283311961-fcpb2hgendg4mbnef4o9ksadgkhgqrrs.apps.googleusercontent.com";

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
      <br></br>
      <div className="Skeleton-bg">
  <img src={bg} className="Skeleton-img"/>
    </div>
      <p className="Skeleton-paraheader">
      THE VESTA VERDICT RPG
      </p>
      <div className="Skeleton-paragraph">
      Choose your role and prove your innocence.
      </div>
      </>
    );
  }
}

export default Skeleton;
