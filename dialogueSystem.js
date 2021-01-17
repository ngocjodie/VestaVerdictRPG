var prevActions = [];

var dialogueSystem = [
    {   // 0
        "question":"Start",
        "answers":[
            {"title":"oh wow. a dying lady!","response":1},
            ]
    },
    {
        // 1
        "question":"Lady:  help, i've fallen and i can't get my fruit!",
        "answers":[
            {"title":"don't worry. i'll find it.","response":8}
            ]
    },
    {
        // 2
        "question":"Lady: Keke, you cursed forever now.",
        "answers":[
            {"title":":[","response":7},
            ]
    },
    {
        // 3
        "question":"Lady: legitness. my throat be dry too though.",
        "answers":[
            {"title":"yes, m'aam. fountain water coming right up","response":4},
            {"title":"unfortunately not my problem.","response":6}
            ]
    },
    {
        // 4
        "question":"Lady: Thanks man. Your purse looks lit, can I buy it?",
        "answers":[
            {"title":"ya.","response":5},
            {"title":"nah, it's my mum's.","response":6}
            ]
    },
    {
        // 5
        "question":"Lady: Aight here's your cash.",
        "answers":[
            {"title":"im rich","response":7}
        ]
    },
    {
        // 6
        "question":"Lady: >:(",
        "answers":[
            {"title":":o","response":2},
            ]
    },
    {
        // 7
        "question":"Game Over",
        "answers":[
            {"title":"Restart","response":0},
            ]
    },
    {
        // 8
        "question":"You found the fruit.",
        "answers":[
            {"title": "Press to eat the fruit.","response":9},
            {"title": "Press to return the fruit.","response":10}
        ]
    },
    {
        // 9
        "question":"lady: Where my fruit at?",
        "answers":[
            {"title": "i ate it omnomnom.","response": 6},
        ]
    },
    {
        // 10
        "question":"lady: Where my fruit at?",
        "answers":[
            {"title": "here you go.","response": 3},
        ]
    }
    ];
    
    
var currentConvo = 0;

window.printcurrentConvo = function(){
    document.getElementById("question").innerHTML = dialogueSystem[currentConvo].question;
    var answers = "";
    for(var i=0,l=dialogueSystem[currentConvo].answers.length;i<l;i++){
        // CHANGE BUTTON STUFF HERE UWU
        answers += "<p><button  class='unstyled-button' onclick='setConvo("+dialogueSystem[currentConvo].answers[i].response+")'>"+dialogueSystem[currentConvo].answers[i].title+"</button></p>";
    }
    document.getElementById("answers").innerHTML = answers;
}

window.setConvo = function(num) {
    currentConvo = num;
    window.printcurrentConvo();
}

window.printcurrentConvo();

