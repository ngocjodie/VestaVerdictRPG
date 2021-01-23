
   const Convos = [[
       {   // 0  : ends
        "question":"Start",
        "answers":[
            {"title":" < oh wow. a dying lady!","response":1},
            {"title":"What is the word?","response":1},
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
  ]];

  export default Convos;