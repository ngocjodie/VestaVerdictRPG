import React, { Component } from "react";
import Playthroughs from "./Playthroughs.js";
import Awards from "./Awards.js";
import "./Profile.css"
import Rhea from "./Rheas.png"
// import $ from 'jquery'; 


class Frontpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      scrollPercent: 40,
      lastScrollPercent: 0,
      lastScrollTop: 0,
    };
    this.scrollPercent = 40;
  }

  componentDidMount() {
    console.log(this.props.userId);
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    console.log("scrolling!");
    // console.log(this.scrollPercent);
    let scrollTop = window.scrollY;
    if (isNaN(this.scrollPercent)) {
      this.scrollPercent = 20;
    }
    if (isNaN(this.lastScrollPercent)) {
      this.lastScrollPercent = 20;
    }
    if (scrollTop > this.lastScrollTop) {
      this.scrollPercent -= 1;
      this.scrollPercent = Math.max(this.scrollPercent, 15);
      // $("#profpic").animate({'width':20+"%"}, 500);
    } else if (scrollTop <= this.lastScrollTop){
      this.scrollPercent += 1;
      this.scrollPercent = Math.min(this.scrollPercent, 20);
      // $("#profpic").animate({'width':40+"%"}, 500);
    }
    this.lastScrollTop = scrollTop;

    if (this.lastScrollPercent != this.scrollPercent) {
    // let docHeight = document.body.offsetHeight;
    // let winHeight = window.innerHeight;
    // let scrollPercent = scrollTop // (docHeight - winHeight);
    // let scrollPercentRounded = Math.round(scrollPercent * 100);

      document.getElementById("profpic").style.width = Math.round(this.scrollPercent) + "%";
      console.log(this.scrollPercent);
      this.lastScrollPercent = this.scrollPercent;
    }
  }

  render() {
    return (
      <>

        <img src={Rhea} id="profpic" className="Profile-pic" />
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
          <div className={this.state.hasWon ? "holder h2" : "holder h9"}></div>
          <div className="holder h3"></div>
          <div className="holder h4"></div>
        </div>
        <div className="container">
          <div className="holder h5"></div>
          <div className="holder h6"></div>
          <div className="holder h7"></div>
          <div className="holder h8"></div>
        </div>
        <Playthroughs userId={this.props.userId} />
        <Awards userId={this.props.userId} />
      </>

    );
  }
}

export default Frontpage;