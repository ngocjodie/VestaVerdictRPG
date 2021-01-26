import React from 'react';
import { Machine, interpret } from 'xstate';
import { dialogueMachine } from './dialogueMachine.js';
import { get, post } from "../../utilities";



import "./dialogueText.js"
import "./dialogueBox2.css"

// const dialogueSystem = [

//   {   // 0  : ends
//       "question":"Start",
//       "answers":[
//           {"title":" < oh wow. a dying lady!","response":1},
//           {"title":"What is the word?","response":1},
//       ]
//   },
//   {
//       // 1 : end
//       "question":"LADY: help, i've fallen and i can't get my fruit!",
//       "answers":[
//           {"title":" < don't worry. i'll find it.","response":2}
//       ]
//   },
//   {
//       // 2 : end
//       "question":"You found the fruit.",
//       "answers":[
//           {"title": " < Press to eat the fruit.","response":3},
//           {"title": " < Press to return the fruit.","response":4}
//       ]
//   },
//   {
//       // 3 : end
//       "question":"LADY: Where my fruit at?",
//       "answers":[
//           {"title": " < i ate it omnomnom.","response": 5},
//       ]
//   },
//   {
//       // 4 : end
//       "question":"LADY: Where my fruit at?",
//       "answers":[
//           {"title": " < here you go.","response": 6},
//       ]
//   },
//   {
//       // 5 : cont
//       "question":"LADY: I curse you forever now.",
//       "answers":[
//           {"title":" < :[","response":10},
//       ]
//   },
//   {
//       // 6: cont
//       "question":"LADY: thx 4 fruit. my throat be dry too though.",
//       "answers":[
//           {"title":" < yes, m'aam. fountain water coming right up","response":7},
//           {"title":" < unfortunately not my problem.","response":9}
//       ]
//   },
//   {
//       // 7 : end
//       "question":"LADY: Thanks man. Your purse looks lit btw, can I buy it?",
//       "answers":[
//           {"title":" < ya.","response":8},
//           {"title":" < nah, it's my mum's.","response":9}
//       ]
//   },
//   {
//       // 8 : cont
//       "question":"LADY: Aight here's your cash.",
//       "answers":[
//           {"title":" < im rich","response":10}
//       ]
//   },
//   {
//       // 9 : cont
//       "question":"LADY: >:[ ",
//       "answers":[
//           {"title":" < :o","response":10},
//       ]
//   },
//   {
//       // 10 : cont
//       "question":"Game Over",
//       "answers":[
//           {"title":" < Restart","response":0},
//       ]
//   }
// ];

 /**
 * What should it inherit? If dialogue shows up later?
 * states of the character(?)
 * @param {[Convo Object]} dialogue sequence list of Q&A
 * @param {() => ()} ending function to exit dialogue and get it off the map
 */

class DialogueBox extends React.Component {

  // once it starts taking in props: modify class to this.props.dialogue
  // after creating dialogue component as <Dialogue dialogue = {dialogueChoice}/>
  constructor(props){
    super(props)
    this.state = {
      current: dialogueMachine.initialState,
      currentDialogue: this.props.dialogue[0]
    }
  
  }

  service = interpret(dialogueMachine).onTransition(current =>
    this.setState({ current })
  );

  componentDidMount() {
    this.service.start();

  }

  componentWillUnmount() {
    this.service.stop();
  }

  handleAnswer(answer) {
    console.log("about to enter post..."); /////////////////////////////////////////////////////////////////
    post("/api/choice", {choice: answer.id} ).then(()=>{
      // console.log("the array:",this.props.dialogue); ////////////////////////////////////////////////////////
      // console.log("the choice/index:",answer.response); /////////////////////////////////////////////////////
      if (answer.response >= this.props.dialogue.length || answer.id == "99") {
        console.log("We have reached the end"); /////////////////////////////////////////////////////////
        this.props.ending(); 
        //maybe return a parameter that'll help Map/Game figure out
        return;
      }
      /**
       * if (answer.response === null) {
       *   console.log("time to go"); /////////////////////////////////////////////////////////////////
       *   this.props.ending();
       *   return;
       * }
       * exit the Box by sending signal to Map
       * and ignore setState
       */
      this.setState({
        currentDialogue: this.props.dialogue[answer.response],
      })
    })
  }


  render() {
    console.log("check");
    const { current } = this.state;
    const { send } = this.service;
    // TEST PURPOSES ONLY : MUST CHANGE WITH DIALOGUE
    var continuing = true;

    var boxHidden = current.matches('closed') || current.matches('closing') ? true : false;
    var textHidden = current.matches('closed') || current.matches('closing') || current.matches('onlyTextClosing') ? true : false;
    
    if (this.state.current.matches("closed")) {
      // alert("state:closed")
      // onkeyup = function (e) { //switch to automatically opening once it's clicked on
      //   e.preventDefault;
      //   if (e.keyCode === 32) {
      //     // alert('state: closed, button pressed')
      //     send("OPEN")
      //   }
      // }

      onclick = function (e) {
        e.preventDefault;
        send("OPEN");
      }
    }

    if (this.state.current.matches("opening")) {
      // alert("state: opening")
      setTimeout(() => {
          send("DONE");
        }, 30
      );
    }

    if (this.state.current.matches("closing")) {  //where it ends
      // alert("closing")
      setTimeout(() => {
          send("DONE");
        }, 30
      );
      // console.log("time to go"); ///// more effective up by the POST request //////
      // this.props.ending();
    }

    if (this.state.current.matches("onlyTextClosing")) {
      // alert("textclosing")
      setTimeout(() => {
          send("DONE");
        }, 30
      );
    }

    if (this.state.current.matches("onlyTextOpening")) {
      // alert("textOpening")
      setTimeout(() => {
          send("DONE");
        }, 30
      );
    }


    return (
        <div className="dBox-flex-container">
          <div className={`dBox-boxPic dBox-img ${boxHidden ? " dBox-hidden" : ""}`}>
            <div className={`anim-typewriter dBox-textQ ${textHidden ? " dBox-hidden" : " dBox-blockDisplay"}`}> 
              {this.state.currentDialogue.question} 
            </div>
            {this.state.currentDialogue.answers.map((answer)=> (
            <button onClick={() => {continuing ? send("CONTINUE") : send("CLOSE"); this.handleAnswer(answer)}} className={`dBox-textA ${textHidden ? " dBox-hidden" : " dBox-blockDisplay"}`}><div className="dBox-choices"> {answer.title} </div></button>
            ))}
          </div>
        </div>
  );
  }
}

export default DialogueBox;