import React, { Component } from "react";
import Playthroughs from "./Playthroughs.js";
import "./Profile.css"
import Rhea from "./Rheas.png"
import {get} from "../../utilities.js"


class Frontpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      awards: [],
      scrollPercent: 40,
      lastScrollPercent: 0,
      lastScrollTop: 0,
    };
    this.scrollPercent = 40;
  }

  componentDidMount() {
    console.log(this.props.userId);
    window.addEventListener('scroll', this.handleScroll);
    get("/api/awards",{userId:this.props.userId}).then((response)=>{
      this.setState({awards:response.awards})
    })
  }
  

  // handleScroll() {
  //   console.log("scrolling!");
  //   // console.log(this.scrollPercent);
  //   let scrollTop = window.scrollY;
  //   if (isNaN(this.scrollPercent)) {
  //     this.scrollPercent = 20;
  //   }
  //   if (isNaN(this.lastScrollPercent)) {
  //     this.lastScrollPercent = 20;
  //   }
  //   if (scrollTop > this.lastScrollTop) {
  //     this.scrollPercent -= 1;
  //     this.scrollPercent = Math.max(this.scrollPercent, 15);
  //     // $("#profpic").animate({'width':20+"%"}, 500);
  //   } else if (scrollTop <= this.lastScrollTop){
  //     this.scrollPercent += 1;
  //     this.scrollPercent = Math.min(this.scrollPercent, 20);
  //     // $("#profpic").animate({'width':40+"%"}, 500);
  //   }
  //   this.lastScrollTop = scrollTop;

  //   if (this.lastScrollPercent != this.scrollPercent) {
  //   // let docHeight = document.body.offsetHeight;
  //   // let winHeight = window.innerHeight;
  //   // let scrollPercent = scrollTop // (docHeight - winHeight);
  //   // let scrollPercentRounded = Math.round(scrollPercent * 100);

  //     document.getElementById("profpic").style.width = Math.round(this.scrollPercent) + "%";
  //     console.log(this.scrollPercent);
  //     this.lastScrollPercent = this.scrollPercent;
  //   }
  // }

  render() {
    return (
      <>

        <img src={Rhea} id="profpic" className="Profile-pic" />
        <div className="Profile-name"> RHEA</div>
        <br></br>
        <div className="fading_line"></div>
        <div className="Profile-info"> AWARDS CABINET </div>
        <div className="container">
        <div className={this.state.awards.indexOf("fruit") !== -1 ? "holder h1" : "holder h9"}></div>
          <div className={this.state.awards.indexOf("flameo")!== -1 ? "holder h2" : "holder h9"}></div>
          <div className={this.state.awards.indexOf("omens") !== -1 ? "holder h3" : "holder h9"}></div>
          <div className={this.state.awards.indexOf("eye")!== -1 ? "holder h4" : "holder h9"}></div>
        </div>
        <div className="container">
          <div className={this.state.awards.indexOf("cinnamon")!== -1 ? "holder h5" : "holder h9"}></div>
          <div className={this.state.awards.indexOf("sly")!== -1 ? "holder h6" : "holder h9"}></div>
          <div className={this.state.awards.indexOf("dove")!== -1 ? "holder h7" : "holder h9"}></div>
          <div className={this.state.awards.indexOf("liar") !== -1 ? "holder h8" : "holder h9"}></div>
        </div>
        <Playthroughs userId={this.props.userId} />
        <br></br>
      </>

    );
  }
}

export default Frontpage;