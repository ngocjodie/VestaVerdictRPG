var dialogueSystem = [

    {   // 0  : ends
        "question":"Start",
        "answers":[
            {"title":" < oh wow. a dying lady!","response":1},
            {"title":"What is the word?","response":1}
        ]
    },
    {
        // 1 : end
        "question":"LADY: help, i've fallen and i can't get my fruit!",
        "answers":[
            {"title":" < don't worry. i'll find it.","response":2}
        ]
    },
    {
        // 2 : end
        "question":"You found the fruit.",
        "answers":[
            {"title": " < Press to eat the fruit.","response":3},
            {"title": " < Press to return the fruit.","response":4}
        ]
    },
    {
        // 3 : end
        "question":"LADY: Where my fruit at?",
        "answers":[
            {"title": " < i ate it omnomnom.","response": 5},
        ]
    },
    {
        // 4 : end
        "question":"LADY: Where my fruit at?",
        "answers":[
            {"title": " < here you go.","response": 6},
        ]
    },
    {
        // 5 : cont
        "question":"LADY: I curse you forever now.",
        "answers":[
            {"title":" < :[","response":10},
        ]
    },
    {
        // 6: cont
        "question":"LADY: thx 4 fruit. my throat be dry too though.",
        "answers":[
            {"title":" < yes, m'aam. fountain water coming right up","response":7},
            {"title":" < unfortunately not my problem.","response":9}
        ]
    },
    {
        // 7 : end
        "question":"LADY: Thanks man. Your purse looks lit btw, can I buy it?",
        "answers":[
            {"title":" < ya.","response":8},
            {"title":" < nah, it's my mum's.","response":9}
        ]
    },
    {
        // 8 : cont
        "question":"LADY: Aight here's your cash.",
        "answers":[
            {"title":" < im rich","response":10}
        ]
    },
    {
        // 9 : cont
        "question":"LADY: >:[ ",
        "answers":[
            {"title":" < :o","response":10},
        ]
    },
    {
        // 10 : cont
        "question":"Game Over",
        "answers":[
            {"title":" < Restart","response":0},
        ]
    }
];

var currentConvo = 0;

window.printcurrentConvo = function(){
    var answers = "";
    for(var i=0,l=dialogueSystem[currentConvo].answers.length;i<l;i++){
        answers += "<p><button class='choices' onclick='setConvo("+dialogueSystem[currentConvo].answers[i].response+")'>"+dialogueSystem[currentConvo].answers[i].title+"</button></p>";
        // <p><button class='choices' onclick='setConvo(dialogueSystem[currentConvo].answers[i].response)'>dialogueSystem[currentConvo].answers[i].title</button></p>
    }
    document.getElementById("answers").innerHTML = answers;
}

window.setConvo = function(num) {
    currentConvo = num;
    setTimeout(function(){
        window.printcurrentConvo();
    }, 201);
}

window.printcurrentConvo();

var continuing = [5, 6, 8, 9, 10];
var ending = [0, 1, 2, 3, 4, 7];

var clicky = 0;
// 0 = all hidden
// 1 = unhidden box, unhidden question, unhidden/faded in answers
// 2 = none hidden, reset to 0

document.body.onkeyup = function(e) {
    if (e.repeat) { return }

    if (e.keyCode == 32 && clicky == 0 && ending.includes(currentConvo)) {
        // alert('immediate space');
        event.preventDefault();
        clicky = 1;
        if (ending.includes(currentConvo)) {
            // alert(currentConvo);
            // alert('ending');
            document.getElementById('boxImage').classList.toggle('hidden');
        }

        var i = 0;
        var qText = dialogueSystem[currentConvo].question;

        var speed;
        var fast = 25;
        var medium = 50;
        var slow = 100;

        if (qText.length < 10) {
            speed = slow;
        } else if (qText.length > 10 && qText.length < 15) {
            speed = medium;
        } else {
            speed = fast;
        }

        setTimeout(function(){
            document.getElementById('question').classList.toggle('hidden');
        }, speed);

        var consoleTyper = setInterval(function () {
            if (i != qText.length) {
                i += 1;
                document.getElementById("question").innerHTML = qText.substr(0, i);
            }
            else
            {
                clearInterval(consoleTyper);   
                document.getElementById('answers').classList.toggle('hidden');
            }}, speed);
    }

    document.getElementById("answers").onclick = function(event) {
        if (e.repeat) { return }
        if (continuing.includes(currentConvo)) {
            // alert(currentConvo);
            // alert('continuing');

            var i = 0;
            var qText = dialogueSystem[currentConvo].question;
    
            var speed;
            var fast = 25;
            var medium = 50;
            var slow = 100;
    
            if (qText.length < 10) {
                speed = slow;
            } else if (qText.length > 10 && qText.length < 15) {
                speed = medium;
            } else {
                speed = fast;
            }

            setTimeout(function(){
                document.getElementById('question').classList.toggle('hidden');
            }, speed);
    
            var consoleTyper = setInterval(function () {
                if (i != qText.length) {
                    i += 1;
                    document.getElementById("question").innerHTML = qText.substr(0, i);
                }
                else
                {
                    clearInterval(consoleTyper);   
                    // alert('toggle');
                    setTimeout(function(){
                        document.getElementById('answers').classList.toggle('hidden');
                    }, 200);
                }}, speed);
                       
                //     document.getElementById('answers').classList.toggle('hidden');
                // }}, speed);
                // alert('toggle 2');
                document.getElementById('question').classList.toggle('hidden');
                document.getElementById('answers').classList.toggle('hidden');
        }
        else {
            // HIDES
            setTimeout(function(){
                document.getElementById('boxImage').classList.toggle('hidden');
                document.getElementById('question').classList.toggle('hidden');
                document.getElementById('answers').classList.toggle('hidden');
                }, 200);
                event.preventDefault();
            }
            clicky = 0;
        }   
}

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