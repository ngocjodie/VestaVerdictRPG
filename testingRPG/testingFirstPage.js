setTimeout( function() {

var i = 0;
var qText = "Welcome to The Vesta Verdict.";

var consoleTyper = setInterval(function () {
    if (i != qText.length) {
        i += 1;
        document.getElementById("question").innerHTML = qText.substr(0, i);
    }
    else
    {
        clearInterval(consoleTyper);   
        document.getElementById('answers').classList.toggle('hidden');
    }}, 45);

}, 1000);

// react component, different states, depends on what its showing
// ex: states - 1) asking question 2) continue conversation.
// button goes to each state
// component keeps track of where the player is
// define transition with keystroke
// in react -->

// 1) define states (e.g. typewrite question, fade in answers), 2) if in this state, render this otherwise render that. react renders html conditionally.
// (e.g. if current showing answers --> do this, if answer clicked, transition to different state (e.g. hiding everything or moving onto next))
// hack: lol just c/p into render

// load all dialogue and pass as prop. easiest but not clean.
// dont hardcode when npcs talk to each other. constants.js, import, and take stuff from there to 
// avoid calling api stuff. way cleaner. 
// no database for dialogue uwu. if looots of text, then get/post is better. 

// doc. onkeyup is pass onKeyUp = {this.someFunctionName }
// IF BUTTON (if you click this text, go to this point) [each button gets its own function]
// for toggling == this.state.hidden (bool), when rendering element, pass hidden or dont pass if state is true.
// <div id="boxImage" [just for reference, not c] classList= \{"someClass" + (this.state.hidden ? " hidden" : "")} />

// mongodb compass for text (UI thing on website, get json file and copy stuff)

//  Johan Cervantes.