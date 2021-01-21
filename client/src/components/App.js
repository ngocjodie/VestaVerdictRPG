import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import Game from "./pages/Game.js";
import About from "./pages/About.js";
import "../utilities.css";
import Frontpage from "./pages/Frontpage.js";
import { socket } from "../client-socket.js";
import NavBar from "./pages/navbar.js";
import { get, post } from "../utilities";
// for fonts:
import '../style.scss';



/**
 * Define the "App" component as a class.
 * path = "/about/"
 * 
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
    };
  }

  componentDidMount() {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        this.setState({ userId: user._id });
      }
    });
  }

  handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      this.setState({ userId: user._id });
      console.log(user._id)
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  handleLogout = () => {
    this.setState({ userId: undefined });
    post("/api/logout");
  };

  render() {
    return ( //right div to do things in the empty tag
      <>
        <NavBar handleLogin={this.handleLogin} handleLogout={this.handleLogout} userId={this.state.userId}/>
        <Router>
          <Skeleton path="/" handleLogin={this.handleLogin} handleLogout={this.handleLogout} userId={this.state.userId} />
          <Game path="/game/" userId={this.state.userId} />
          <About path="/about/" />
          <Frontpage path="/frontpage/:userId"/>
          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;