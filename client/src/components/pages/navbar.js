import React, { Component } from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import "../../utilities.css";
import "./navbar.css";



// This identifies your application to Google's authentication service
const GOOGLE_CLIENT_ID = "929690839465-7el5elpd43lv4fgmh53vvcfegqbp961n.apps.googleusercontent.com";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="NavBar-container">
        <div className="NavBar-linkContainer u-inlineBlock">
        <Link to="/" className="NavBar-link">
            HOME
          </Link>
          <Link to="/about/" className="NavBar-link">
            ABOUT
          </Link>
          
          {/*
          <Link to="/howtoplay/" className="NavBar-link">
            HOW TO PLAY
          </Link>
          */}

          <Link to="/game/" className="NavBar-link">
            GAME
          </Link>
          {this.props.userId && (
          <Link to={`/frontpage/${this.props.userId}`} className="NavBar-link">
            PROFILE
          </Link>
                    )}
          {this.props.userId ? (
            <GoogleLogout
              clientId={GOOGLE_CLIENT_ID}
              render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="NavBar-Plainbutton NavBar-link">SIGN OUT</button>
              )}
              buttonText="Logout"
              onLogoutSuccess={this.props.handleLogout}
              onFailure={(err) => console.log(err)}
              className="NavBar-link NavBar-login"
            />
          ) : (
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="NavBar-Plainbutton NavBar-link">SIGN IN</button>
              )}
              buttonText="Login"
              onSuccess={this.props.handleLogin}
              onFailure={(err) => console.log(err)}
              className="NavBar-link NavBar-login"
            />
          )}
        </div>
      </nav>
    );
  }
}

export default NavBar;