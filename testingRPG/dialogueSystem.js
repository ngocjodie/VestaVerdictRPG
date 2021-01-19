var dialogueSystem = [

    {   // 0  : ends
        "question":"Start",
        "answers":[
            {"title":" < oh wow. a dying lady!","response":1}
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

// var currentConvo = 0;

// window.printcurrentConvo = function(){
//     //sets innerhtml of question to the question part
//     // document.getElementById("question").innerHTML = dialogueSystem[currentConvo].question;
//     var answers = "";
//     // for length of answer options for the question
//     for(var i=0,l=dialogueSystem[currentConvo].answers.length;i<l;i++){
//         // CHANGE BUTTON STUFF HERE UWU
//         // basically formats html so each title is given its own <p> and <button>
//         // and also setConvo on click, which prints things out and moves the convo location
//         answers += "<p><button id='butt' class='choices' onclick='setConvo("+dialogueSystem[currentConvo].answers[i].response+")'>"+dialogueSystem[currentConvo].answers[i].title+"</button></p>";
//         // <p><button class='choices' onclick='setConvo(dialogueSystem[currentConvo].answers[i].response)'>dialogueSystem[currentConvo].answers[i].title</button></p>
//     }
//     // sets the div html id'd answers with the variable stuff above
//     document.getElementById("answers").innerHTML = answers;
// }

var currentConvo = 0;

window.printcurrentConvo = function(){
    var answers = "";
    for(var i=0,l=dialogueSystem[currentConvo].answers.length;i<l;i++){
        answers += "<p><button class='choices butt' onclick='setConvo("+dialogueSystem[currentConvo].answers[i].response+")'>"+dialogueSystem[currentConvo].answers[i].title+"</button></p>";
        // <p><button class='choices' onclick='setConvo(dialogueSystem[currentConvo].answers[i].response)'>dialogueSystem[currentConvo].answers[i].title</button></p>
    }
    document.getElementById("answers").innerHTML = answers;
}

window.setConvo = function(num) {
    currentConvo = num;
    setTimeout(function(){
        window.printcurrentConvo();
    }, 401);
}

window.printcurrentConvo();

var continuing = [5, 6, 8, 9, 10];
var ending = [0, 1, 2, 3, 4, 7];

var clicky = 0;
// 0 = all hidden
// 1 = unhidden box, unhidden question, unhidden/faded in answers
// 2 = none hidden, reset to 0

var allHidden;

if (document.getElementById('boxImage').classList.contains("hidden") && document.getElementById('question').classList.contains("hidden") & document.getElementById('answers').classList.contains("hidden")) {
    allHidden = true;
}


document.body.onkeyup = function(e) {
    if (e.repeat) { return }

    if (e.keyCode == 32 && clicky == 0 && ending.includes(currentConvo) && allHidden) {
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