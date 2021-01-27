
   const Convos = [[  // using response: 111 to end a conversation
       {   // LAIA CONVO - index 0
        //"person":"portrait-Laia"  === person field mapping to the CSS className
        "question":"LAIA: Burn it all! Rhea, are you here?",
        "answers":[
            {"title":"Yes","response":1, "id":0},
            {"title":"[Stay Silent]","response":1},
        ]
    },
    {
        // 1 : end
        "question":"LAIA: Curses! How did I . . . RHEA?",
        "answers":[
            {"title":"Coming!","response":2},
            {"title":"[Stay silent]", "response":6}
        ]
    },
    {
        // 2 : end
        "question":"LAIA: Rhea, there you are! I need your help. I left my paint bag at the vista.",
        "answers":[
            {"title": "So?","response":3},
            {"title": "I can go get it.","response":4},
            {"title": "I'd help, but I need to practice.","response":5}
        ]
    },
    {
        // 3 : end
        "question":"LAIA: Rhea, please! The Dux is coming for his portrait sitting. I need time to set up.",
        "answers":[
            {"title": "Okay fine, I'll go.","response": 4},
            {"title": "I'd help, but I need to practice.","response":5}
        ]
    },
    {
        // 4 : end
        "question":"LAIA: Ah, thank you! Take the west path to get there quickly.",
        "answers":[
            {"title": "[End]","response": 111},
        ]
    },
    {
        // 5 : cont
        "question":"LAIA: Oh, I forgot about your test! I'll give you directions so you can get there quickly.",
        "answers":[
            {"title":"Okay, I'll be fast!","response":8},
        ]
    },
    {
        // 6: cont
        "question":"LAIA: RHEA! You better not be home.",
        "answers":[
            {"title":"[You hear your sister's footfalls]","response":7},
        ]
    },
    {
        // 7 : end
        "question":"LAIA: There you are! Ugh, sometimes you're so--nevermind, I really need your help. I left my paint bag on the vista.",
        "answers":[
            {"title":"So?","response":3},
            {"title": "I can go get it.","response":4},
            {"title":"I can't go! I have to practice for the trials.","response":5 }
        ]
    },
    {
        // 8 : cont
        "question":"LAIA: Take the west path, and you'll reach the vista at the top.",
        "answers":[
            {"title":"[END]","response":111}
        ]
    },
  ],
  [
    {   // OLD WOMAN 1ST CONVO - 1ST ANSWER [END]
     "question":"The old woman groans. 'Hello? Is someone there? I've fallen, and I can't get my fruit.'",
     "answers":[ 
         {"title":" [Walk away] ","response":111, "id":3},
         {"title":"Do you need help?","response":1},
         {"title":"Are you okay?","response":2}
     ]
 },
 {
     // 1 : end 2nd ANSWER [END] - ALSO WHAT HAPPENS WHEN THEY WALK AWAY HERE?
     "question":"OLD WOMAN: I need my fruit. Bring it to me, will you Dear?",
     "answers":[
         {"title":"Of course","response":111},
         {"title":"No, bye","response":111}

     ]
 },
 {
     // 2 : end
     "question":"OLD WOMAN: Oh, I'm just peachy. *She breaks out in a fit of coughing*",
     "answers":[
         {"title": "How can I help?","response":1},
         {"title": "You don't look too good.","response":3}
     ]
 },
 {
     // 3 : end BOTH ANSWERS [END] #DIDNT_HELP
     "question":"OLD WOMAN: Thank you for pointing that out, Dear. Now, could you help me pick up my fruit?",
     "answers":[
        {"title":"Of course","response":111},
        {"title":"No, bye","response":111}
     ]
 },
],
[
    {   // FRUIT CONVO - index 2
     "question":"FRUIT: Do you want some fruit? Mmm-mmm. You could take a little bite.",
     "answers":[
         {"title":"No thanks.","response":1, "id":0},
         {"title":"Sure","response":2},
     ]
 },
 {
     // 1 : end [END] ANSWERS 1 AND 3
     "question":"FRUIT: You sure?",
     "answers":[
         {"title":"Yup.","response":111, "id":532},
         {"title":"Now that you mention it, I could use a little snack.", "response":2},
         {"title":"Say nothing (why are you talking to a grape anyway?)", "response":111}
     ]
 },
 {
     // 2 : end FRUIT CHOICE
     "question":"FRUIT: Ah, the right choice!",
     "answers":[
         {"title": "[Eat one grape]","response":3, "id":5},
         {"title": "[Eat a handful of grapes]","response":3,"id":6},
         {"title": "Umm, nevermind.","response":1}
     ]
 },
 {
     // 3 : end [END]
     "question":"Tasty!",
     "answers":[
         {"title": "[You pick up the remaining grapes]","response": 111},
     ]
 },
],
[
    {   // OLD WOMAN 2ND CONVO - index 3
     "question":"OLD WOMAN: Thank you, Dear! Can I have the fruit?.",
     "answers":[
         {"title":"[Give her all of the fruit]","response":1, "id":7},
         {"title":"[Keep some for later]","response":1, "id":8},
     ]
 },
 {
     // 1 : end [END] ANSWERS 1
     "question":"The old woman gobbles down the fruit. 'Thank you! But before I move on, I could use some water.'",
     "answers":[
         {"title":"Sorry, I gotta go.","response":111, "id":11},
         {"title":"I can get some for you", "response":2, "id":12},
     ]
 },
 {
     // 2 : END ALL
     "question":"OLD WOMAN: Thank you, Dear. There's a fountain at the temple courtyard right down the path.",
     "answers":[
         {"title": "Cool, I didn't know there was a path here","response":111, "id":5},
         {"title": "I'll be right back.","response":111,"id":6},
     ]
 },
],
[
    {   // OLD WOMAN 3RD CONVO - index 4
     "question":"The old woman accepts your water. 'Thank you, Dear.''",
     "answers":[
         {"title":"You're welcome","response":1},
         {"title":"Cool, now you won't die","response":1},
     ]
 },
 {
     // 1 : end 
     "question":"OLD WOMAN: Before you go . . . I need a bag like that for my journey. Could I buy it from you?",
     "answers":[
         {"title":"No, sorry","response":2, "id":13},
         {"title":"Okay, sure", "response":3, "id":14},
     ]
 },
 {
     // 2 : END ALL
     "question":"OLD WOMAN: Okay, you best be on your way.",
     "answers":[
         {"title": "[Better head home]","response":111},
         
     ]
 },
 {
    // 3 : END ALL
    "question":"OLD WOMAN: Ahh, thank you! Here is one gold piece.",
    "answers":[
        {"title": "[Better head home]","response":111},
        
    ]
},
],
[
    {   // LAIA WITH BAG  - index 5
     "question":"LAIA: Oh, Rhea you're back!",
     "answers":[
         {"title":"Here's your bag!","response":1},
         {"title":"A thank you would be nice.","response":2},
     ]
 },
 {
     // 1 : END ALL
     "question":"LAIA: Thank you so much! And good luck!",
     "answers":[
         {"title":"[You've remembered all you can]","response":111}, 
     ]
 },
 {
     // 2 : END ALL
     "question":"LAIA: Thank you, course! This was a huge help. And good luck later!",
     "answers":[
         {"title": "[You've remembered all you can]","response":111},
         
     ]
 },
],
[
    {   // LAIA WITHOUT BAG - index 6
     "question":"LAIA: Oh, Rhea you're back!",
     "answers":[
         {"title": "Sorry, I couldn't find your bag (lie)","response":1,"id":60},
         {"title":"I sold your bag","response":2},
     ]
 },
 {
     // 1 : END ALL
     "question":"LAIA: Oh no! Thank you for trying.",
     "answers":[
         {"title":"[You've remembered all you can]","response":111},
     ]
 },
 {
     // 2 : END ALL
     "question":"LAIA: What? Why?",
     "answers":[
         {"title": "[You've remembered all you can]","response":111},
         
     ]
 },
],
[
    {   // CASSANDRA GREETS - INDEX 7
     "question":"CASSANDRA: Welcome to the temple of Vesta, young sister.",
     "answers":[
         {"title": "How do the trials work?","response":1,},
         {"title":"I'm ready for the trials","response":2},
     ]
 },
 {
     // 1 : 
     "question":"CASSANDRA: I am looking for an Apprentice Seer. The three sisters of the High Council have tests prepared to judge your readiness.",
     "answers":[
         {"title": "I am ready","response":2},
        ]
 },
 {
     // 2 : END ALL
     "question":"CASSANDRA: When you're prepared, enter the temple.",
     "answers":[
         {"title": "Thank you","response":111}, //should be > 3
         
     ]
 },
],
[
{   // CASSANDRA GREETS TELESCOPE - INDEX 8
     "question":"CASSANDRA: Welcome to the temple of Vesta, young sister.",
     "answers":[
         {"title": "How do the trials work?","response":1,},
         {"title":"I'm ready for the trials","response":2},
         {"title":"You seem familiar","response":3},
     ]
 },
 {
     // 1 : END ALL
     "question":"CASSANDRA: I am looking for an Apprentice Seer. The three sisters of the High Council have tests prepared to judge your readiness.",
     "answers":[
         {"title": "I'm ready","response":2},
        ]
 },
 {
     // 2 : END ALL
     "question":"CASSANDRA: When you're prepared, enter the temple.",
     "answers":[
         {"title": "Thank you","response":111}, //should be > 4
     ]
    },
 { //   3
     // 3 : END ALL
     "question":"CASSANDRA: I don't know what you could mean.",
     "answers":[
        {"title": "How do the trials work?","response":1,},
        {"title":"I'm ready for the trials","response":2},
         
     ]
 },
],
[
    {   // JUNO TOY TEST - INDEX 9
         "question":"JUNO: Hello, young sister. Choose three.",
         "answers":[
             {"title": "Why?","response":1},
             {"title":"Okay","response":2},
         ]
     },
     {
         // 1 : END ALL
         "question":"JUNO: I will tell you no more.",
         "answers":[
            {"title":"Okay","response":2},
            ]
     },
     {
         // 2 : END ALL 
         "question":"[The toys sit on the table in front of you.]",
         "answers":[
             {"title": "[Choose the teddy bear]","response":3},
             {"title": "[Choose the skull]","response":3, "id":663},
             {"title": "[Choose the comb]","response":3},



         ]
        },
     {
         // 3 : HORSE IMPORTANT
         "question":"JUNO: Interesting. Choose again.",
         "answers":[
            {"title": "[Choose the chipped vase]","response":4},
            {"title": "[Choose the dice set]","response":4},
            {"title": "[Choose the little carved horse]","response":4, "id":666}, 
         ]
     },
     {
        // 4 : 
        "question":"JUNO: Once more.",
        "answers":[
           {"title": "[Choose the orange]","response":5, "id":664},
           {"title": "[Choose the doll]","response":5},
           {"title": "[Choose the crystal]","response":5,} 
        ]
    },
    {
        // 5 : END ALL
        "question":"JUNO: Thank you, sister.",
        "answers":[
           {"title": "[Step away]","response":111}, //should be > 6
        ]
    },
    ],
    [
    {   // LIVIA CONVO - index 10
        "question":"LIVIA: Do you know how to play Chellah?",
        "answers":[
            {"title":"Yes (lie)","response":4, "id":780},
            {"title":"I've never played.","response":1},
        ]
    },
    {
        // 1 : end
        "question":"Chellah may be a game of luck and chance to some. But to seers, it is a training exercise.",
        "answers":[    
        {"title":"[Continue]","response":2},
        ]
    },
    {
        // 2 : end
        "question":"LIVIA: When I place the marble into the covered maze, you must tell me the path it takes at each turn.",
        "answers":[
            {"title": "[Continue]","response":3},
        ]
    },
    {
        // 3 : end
        "question":"LIVIA: If you have the power of Sight, you will understand which path to choose at each branch. Shall we commence?",
        "answers":[
            {"title": "[Drop the marble into the maze]","response": 5},
        ]
    },
    {
        // 4 : end
        "question":"LIVIA: Very well, let's begin.",
        "answers":[
            {"title": "[Drop the marble into the box]","response": 5},
            {"title": "[Open the wooden game box]","response": 6, "id":800},
            {"title": "[Stare at the marble confidently]","response": 6, "id":800},  //this is hilarious


        ]
    },
    {
        // 5 : cont                           make intuitions in brackets too
        "question":"Which path do you choose? You feel a pull toward the middle.",
        "answers":[
            {"title":"Right","response":7, "id":122},
            {"title":"Middle","response":8},
            {"title":"Left","response":7, "id":122},
        ]
    },
    {
        // 6: cont
        "question":"LIVIA: I sense ... you need an explanation.",
        "answers":[
            {"title":"[Let her continue]","response":1},
        ]
    },
    {
        // 7 : ALL END
        "question":"LIVIA: Ah, sometimes our Sight can fail us.",
        "answers":[
            {"title":"I'll do better next time","response":1}, //want to start over, right?
            {"title": "My bad","response":1},
            {"title":"Thank you","response":1 }
        ]
    },
    {
        // 8 : cont
        "question":"Which path do you choose? You feel a pull toward the left.",
        "answers":[
            {"title":"Right","response":7, "id":122},
            {"title":"Middle","response":7, "id":122},
            {"title":"Left","response":9},
        ]
    },
    {
        // 9 : cont
        "question":"Which path do you choose? You feel a pull toward the middle.",
        "answers":[
            {"title":"Right","response":7, "id":122},
            {"title":"Middle","response":10},
            {"title":"Left","response":7, "id":122},
        ]
    },
    {
        // 10 : cont
        "question":"Which path do you choose? You don't feel an intuition.",
        "answers":[
            {"title":"Right","response":7, "id":124},
            {"title":"Middle","response":11,"id":300},
            {"title":"Left","response":7, "id":124}, 
        ]
    },
    {
        // 11 : cont
        "question":"LIVIA: Ah, well done. That path was correct.",
        "answers":[
            {"title":"Thank you","response":111},
        ]
    },
    //maybe another option to close the scene even if Rhea fails
  ],
  [
    {   // After LAIA  - index 11 END
        "question":"LAIA: Thank you! Hurry Back!",
        "answers":[
            {"title":"[Continue]","response":111}, //should be a large #
        ]
    },
],
[
    {   // After PROMISING FRUIT  - index 12 END
        "question":"OLD WOMAN: Thank you for offering to get my fruit!",
        "answers":[
            {"title":"[Continue]","response":111}, //should be > 0
        ]
    },
],
[
    {   // After PROMISING Water  - index 13 END
        "question":"OLD WOMAN: Thank you for getting me water, Dear! Come back soon.",
        "answers":[
            {"title":"[Continue]","response":111},  //should be > 0
        ]
    },
],
[
    {   // After JUNO  - index 14 END
        "question":"JUNO: Go on.",
        "answers":[
            {"title":"[Continue]","response":111},  //should be > 0
        ]
    },
],
[
    {   // After LIVIA if good  - index 15 END
        "question":"LIVIA: I can feel the Sight in you. Return to Cassandra when you're finished with all three tasks.",
        "answers":[
            {"title":"[Continue]","response":111}, //should be > 0
        ]
    },
],
[
    {   // After LIVIA if NOT good  - index 16 END
        "question":"LIVIA: Return to Cassandra when you're finished with all three tasks.",
        "answers":[
            {"title":"[Continue]","response":111}, //should be > 0
        ]
    },
],
[
    {   // After Fortunata   - index 17 END
        "question":"FORTUNATA: Those were all my riddles.",
        "answers":[
            {"title":"[Continue]","response":111}, //should be > 0
        ]
    },
],
[
    {   // COUNCIL SCENE 1 - index 18                                                                        
     "question":"LIVIA: We now call on the defendant, who is charged with destroying the sacred fire and breaking her holy oath. Rhea, please come forward.",
     "answers":[
         {"title":"[Walk to the stand]","response":1},
     ]
 },
 {
     // 1 : end
     "question":"JUNO: She should be ashamed. She looks too confident.",
     "answers":[
         {"title":"[Next]","response":2},
     ]
 },
 {
     // 2 : end
     "question":"FORTUNATA: Hush! She looks terrified.",
     "answers":[
         {"title": "[Next]","response":3},
     ]
 },
 {
     // 3 : end
     "question":"JUNO: Well, she should be. Her betrayal has angered the goddess.",
     "answers":[
         {"title": "[Next]","response": 4},
     ]
 },
 {
     // 4 : end
     "question": "LIVIA: 'Be quiet, Juno. Above all, the goddess wants justice. We will hold a fair trial.' The High Priestess turns toward you. 'Do you still claim innocence?'",
     "answers":[
        {"title":"Yes, I do","response":5},
        {"title":"Please! I swear, I didn't do it.","response":5},
        {"title":"This council doesn't seem very fair.","response":8, "id":33},
     ]
 },
 {
     // 5 : cont
     "question":"LIVIA: Very well. We wish to hear your testimony. Swear in the name of the goddness to tell nothing but the truth.",
     "answers":[
         {"title":"In Vesta's name, I swear","response":6},
     ]
 },
 {
     // 6: cont
     "question":"FORTUNATA: If you are innocent, the truth is your greatest power. We will listen to your story, and judge accordingly. But if you are guilty, the sentence is death.",
     "answers":[
         {"title":"[Next]","response":7},
     ]
 },
 {
     // 7 : end
     "question":"LIVIA: Now, tell us--what happened the day you first came to the temple?",
     "answers":[
         {"title":"I'll try my best to remember...","response":111}, //both should be > 10
         {"title": "It all started with my sister","response":111},
     ]
 },
 {
     // 8 : cont
     "question":"JUNO: If you are innocent, you should not be worried.",
     "answers":[
         {"title":"Very well","response":5},
         {"title":"Easy for you to say","response":6},
         {"title":"I'm worried you won't see the truth","response":6},

     ]
 },
],
[
    {   // Turtle  - index 19 END
        "person": "practice-smiley",
        "question":"TURTLE: *turtle turtle*",
        "answers":[
            {"title":"[Good turtle]","response":111},  //should be > 0
        ]
    },
],

[
    {   // Parrot  - index 20 END
        "person": "practice-smiley",
        "question":"PARROT: Meep meep!",
        "answers":[
            {"title":"[Good bird]","response":111},  //should be > 0
        ]
    },
],
[  
    {   // COUNCIL SCENE #2 -IF YOU GOT WATER - index 20
     "question":"FORTUNATA: These details may be important. What were you doing the morning of the trials?",
     "answers":[
         {"title":"I went to the vista","response":1},
         {"title":"I was at home all morning (lie)","response":2, "id":439},
     ]
 },
 {
     // 1 : end
     "question":"LIVIA: Did anything of note happen?",
     "answers":[
         {"title":"I helped someone who'd fallen","response":8},
         {"title":"I met some talking grapes", "response":7},
         {"title":"No, I found my sister's bag and went home", "response":8},     
        ]
 },
 {
     // 2 : end
     "question":"JUNO: A lie! I saw you drawing water from our well.",
     "answers":[
         {"title": "You might be mistaking me for someone else","response":3, 'id':321},
         {"title": "Oh, I forgot! I also went to the vista.","response":4, 'id':321},
     ]
 },
 {
     // 3 : end
     "question":"JUNO: I know what I saw.",
     "answers":[
         {"title": "[Next]","response": 4},
     ]
 },
 {
     // 4 : end
     "question":"FORTUNATA: Your lie is troubling, young sister.",
     "answers":[
         {"title": "[Next]","response": 5},
     ]
 },
 {
     // 5 : END HERE
     "question":"LIVIA: Yes, indeed. If that is your testimony, we will move forward. Tell us about the trials.",
     "answers":[
         {"title":"Okay, let me remember","response":111},
     ]
 },
 {
     // 6: cont
     "question":"LAIA: RHEA! You better not be home.",
     "answers":[
         {"title":"[You hear your sister's footfalls]","response":7},
     ]
 },
 {
     // 7 : 
     "question":"FORTUNATA: Magic fruit? That's concerning.",
     "answers":[
         {"title": " [Next]","response":9},
     ]
 },
 {
     // 8 : END
     "question":"LIVIA: If that is your testimony, we will move forward. Tell us about the trials.",
     "answers":[
         {"title":"Okay, let me remember","response":111},
     ]
 },
 {
    // 9 : END
    "question":"LIVIA: It could mean many things. Rhea, please go on. Try to remember what happened at the trials.",
    "answers":[
        {"title":"Okay, let me remember","response":111},
    ]
},
],
[  
    {   // COUNCIL SCENE #2 -IF YOU DID NOT GET WATER - index 21
     "question":"LIVIA: These details may be important. What were you doing the morning of the trials?",
     "answers":[
         {"title":"I went to the vista","response":1},
         {"title":"I was at home all morning (lie)","response":2, "id":439},
     ]
 },
 {
     // 1 : end
     "question":"LIVIA: Did anything of note happen?",
     "answers":[
         {"title":"I helped someone who'd fallen","response":5},
         {"title":"I met some talking grapes", "response":4},
         {"title":"No, I found my sister's bag and went home", "response":5},     
        ]
 },
 {
     // 2 : end
     "question":"FORTUNATA: Her story checks out. No one saw her before the trials.",
     "answers":[
         {"title": "[Next]","response" :3},
     ]
 },
 {
     // 3 : END HERE
     "question":"LIVIA: Yes, indeed. If that is your testimony, we will move forward. Tell us about the trials.",
     "answers":[
         {"title":"Okay, let me remember","response":111},
     ]
 },
 {
     // 4 : 
     "question":"FORTUNATA: Magic fruit? That's concerning.",
     "answers":[
         {"title": " [Next]","response":6},
     ]
 },
 {
     // 5 : END
     "question":"LIVIA: If that is your testimony, we will move forward. Tell us about the trials.",
     "answers":[
         {"title":"Okay, let me remember","response":111},
     ]
 },
 {
    // 6 : END
    "question":"LIVIA: It could mean many things. Rhea, please go on. Try to remember what happened at the trials.",
    "answers":[
        {"title":"Okay, let me remember","response":111},
    ]
},
],
[
    {   // LIVIA CONVO - index 22
        "question":"LIVIA: Do you know how to play Chellah?",
        "answers":[
            {"title":"Yes (lie)","response":4, "id":780},
            {"title":"I've never played.","response":1},
        ]
    },
    {
        // 1 : end
        "question":"Chellah may be a game of luck and chance to some. But to seers, it is a training exercise.",
        "answers":[    
        {"title":"[Continue]","response":2},
        ]
    },
    {
        // 2 : end
        "question":"LIVIA: When I place the marble into the covered maze, you must tell me the path it takes at each turn.",
        "answers":[
            {"title": "[Continue]","response":3},
        ]
    },
    {
        // 3 : end
        "question":"LIVIA: If you have the power of Sight, you will understand which path to choose at each branch. Shall we commence?",
        "answers":[
            {"title": "[Drop the marble into the maze]","response": 5},
        ]
    },
    {
        // 4 : end
        "question":"LIVIA: Very well, let's begin.",
        "answers":[
            {"title": "[Drop the marble into the box]","response": 5},
            {"title": "[Open the wooden game box]","response": 6, "id":800},
            {"title": "[Stare at the marble confidently]","response": 6, "id":800},  //this is hilarious


        ]
    },
    {
        // 5 : cont                           make intuitions in brackets too
        "question":"Which path do you choose? You feel a strong pull toward the middle.",
        "answers":[
            {"title":"Right","response":7, "id":122},
            {"title":"Middle","response":8},
            {"title":"Left","response":7, "id":122},
        ]
    },
    {
        // 6: cont
        "question":"LIVIA: I sense ... you need an explanation.",
        "answers":[
            {"title":"[Let her continue]","response":1},
        ]
    },
    {
        // 7 : ALL END
        "question":"LIVIA: Ah, sometimes our Sight can fail us.",
        "answers":[
            {"title":"I'll do better next time","response":1}, //want to start over, right?
            {"title": "My bad","response":1},
            {"title":"Thank you","response":1 }
        ]
    },
    {
        // 8 : cont
        "question":"Which path do you choose? You feel a strong pull toward the left.",
        "answers":[
            {"title":"Right","response":7, "id":122},
            {"title":"Middle","response":7, "id":122},
            {"title":"Left","response":9},
        ]
    },
    {
        // 9 : cont
        "question":"Which path do you choose? You feel a strong pull toward the middle.",
        "answers":[
            {"title":"Right","response":7, "id":122},
            {"title":"Middle","response":10},
            {"title":"Left","response":7, "id":122},
        ]
    },
    {
        // 10 : cont
        "question":"Which path do you choose? You feel a strong pull toward the middle.",
        "answers":[
            {"title":"Right","response":7, "id":124},
            {"title":"Middle","response":11,"id":300},
            {"title":"Left","response":7, "id":124}, 
        ]
    },
    {
        // 11 : cont
        "question":"LIVIA: Ah, well done. That path was correct.",
        "answers":[
            {"title":"Thank you","response":111},
        ]
    },
  ],
  [
    {   // COUNCIL SCENE 3 GOOD Omens, GOOD trials CONVO - index 23
        "question":"LIVIA: Yes, we all met you that day. I thought you had great promise. I could sense the Sight in you.",
        "answers":[
            {"title":"[Next]","response":1},
        ]
    },
    {
        // 1 : end
        "question":"FORTUNATA: I concur.",
        "answers":[    
        {"title":"[Next]","response":2},
        ]
    },
    {
        // 2 : end
        "question":"JUNO: The omens, they were good.",
        "answers":[
            {"title": "[Next]","response":3},
        ]
    },
    {
        // 3 : end
        "question":"LIVIA: And so, Cassandra chose you as her apprentice. But it wasn't even a week until she dissapeared.",
        "answers":[
            {"title": "I just got mixed up in all of this","response": 4},
            {"title": "All I ever wanted was to become a Seer","response": 8},

        ]
    },
    {
        // 4 : end
        "question":"JUNO: Mistake or not, your actions reflect only on you.",
        "answers":[
            {"title": "[Next]","response": 5},
        ]
    },
    {
        // 5 : cont      
        "question":"FORTUNATA: But she claims innocence. Let her finish.",
        "answers":[
            {"title":"[Next]","response":7},
        ]
    },
    {
        // 6: cont
        "question":"LIVIA: I sense ... you need an explanation.",
        "answers":[
            {"title":"[Let her continue]","response":1},
        ]
    },
    {
        // 7 : ALL END
        "question":"LIVIA: Yes. Now tell us, what happened the night the sacred fire was destroyed?",
        "answers":[
            {"title":"I will do my best to remember","response":111},
        ]
    },
    {
        // 8 : cont
        "question":"JUNO: Ambition like yours can lead to a fall.",
        "answers":[
            {"title":"It's not like that","response":7},
            {"title":"Let me finnish my story","response":7},

        ]
    },
    {
        // 9 : cont
        "question":"FORTUNATA: Continue, Rhea. What happened the night the sacred fire went out?",
        "answers":[
            {"title":"I will try my best to remember","response":111},
        ]
    }
],
[
    {   // COUNCIL SCENE 3 BAD OMENS, GOOD CONVO - index 24
        "question":"LIVIA: Yes, we all met you that day. I thought you had great promise. I could sense the Sight in you.",
        "answers":[
            {"title":"[Next]","response":1},
        ]
    },
    {
        // 1 : end
        "question":"FORTUNATA: I concur.",
        "answers":[    
        {"title":"[Next]","response":2},
        ]
    },
    {
        // 2 : end
        "question":"JUNO: But the omens . . . they were dark.",
        "answers":[
            {"title": "[Next]","response":3},
        ]
    },
    {
        // 3 : end
        "question":"LIVIA: And so, Cassandra chose you as her apprentice. But it wasn't even a week until she dissapeared.",
        "answers":[
            {"title": "I just got mixed up in all of this","response": 4},
            {"title": "All I ever wanted was to become a Seer","response": 8},

        ]
    },
    {
        // 4 : end
        "question":"JUNO: Mistake or not, your actions reflect only on you.",
        "answers":[
            {"title": "[Next]","response": 5},
        ]
    },
    {
        // 5 : cont      
        "question":"FORTUNATA: But she claims innocence. Let her finish.",
        "answers":[
            {"title":"[Next]","response":7},
        ]
    },
    {
        // 6: cont
        "question":"LIVIA: I sense ... you need an explanation.",
        "answers":[
            {"title":"[Let her continue]","response":1},
        ]
    },
    {
        // 7 : ALL END
        "question":"LIVIA: Yes. Now tell us, what happened the night the sacred fire was destroyed?",
        "answers":[
            {"title":"I will do my best to remember","response":111},
        ]
    },
    {
        // 8 : cont
        "question":"JUNO: Ambition like yours can lead to a fall.",
        "answers":[
            {"title":"It's not like that","response":7},
            {"title":"Let me finnish my story","response":7},

        ]
    },
    {
        // 9 : cont
        "question":"FORTUNATA: Continue, Rhea. What happened the night the sacred fire went out?",
        "answers":[
            {"title":"I will try my best to remember","response":111},
        ]
    }
],
[
    {   // COUNCIL SCENE 3 Bad OMENS, bad trials CONVO - index 25
        "question":"LIVIA: Yes, we all met you that day at the trials. I will admit . . . I did not understand Cassandra's choice.",
        "answers":[
            {"title":"[Next]","response":1},
        ]
    },
    {
        // 1 : end
        "question":"FORTUNATA: You had spirit but, errr, no Sight.",
        "answers":[    
        {"title":"[Next]","response":2},
        ]
    },
    {
        // 2 : end
        "question":"JUNO: The omens . . . they were dark.",
        "answers":[
            {"title": "[Next]","response":3},
        ]
    },
    {
        // 3 : end
        "question":"LIVIA: And yet, Cassandra chose you as her apprentice.",
        "answers":[
            {"title": "I just got mixed up in all of this","response": 4},
            {"title": "Don't you find her choice suspicious?","response": 8, 'id': 222},

        ]
    },
    {
        // 4 : end
        "question":"JUNO: Mistake or not, your actions reflect only on you.",
        "answers":[
            {"title": "[Next]","response": 5},
        ]
    },
    {
        // 5 : cont      
        "question":"FORTUNATA: But she claims innocence. Let her finish.",
        "answers":[
            {"title":"[Next]","response":7},
        ]
    },
    {
        // 6: cont
        "question":"FORTUNATA: This is indeed troubling, but please go on.",
        "answers":[
            {"title":"[Next]","response":10},
        ]
    },
    {
        // 7 : ALL END
        "question":"LIVIA: Yes. Now tell us, what happened the night the sacred fire was destroyed?",
        "answers":[
            {"title":"I will do my best to remember","response":111},
        ]
    },
    {
        // 8 : cont
        "question":"LIVIA: You have a point. I did not understand Cassandra's logic. She was set on choosing you.",
        "answers":[
            {"title":"Her intentions were not pure","response":9},
            {"title":"Things aren't what they seem","response":10},

        ]
    },
    {
        // 9 : cont
        "question":"JUNO: Cassandra was always dedicated, a good priestess. I do not understand her intentions, but I do not believe she was corrupt.",
        "answers":[
            {"title":"Listen to my side of the story before you decide","response":6},
            {"title":"I know this is hard to hear, but please listen","response":6},

        ]
    },
    {
        // 10 : cont
        "question":"LIVIA: Yes. Now tell us, what happened the night the sacred fire was destroyed?",
        "answers":[
            {"title":"I will do my best to remember","response":111},
        ]
    }
],
[
    {   // COUNCIL SCENE 3 Good OMENS, bad trials CONVO - index 26
        "question":"LIVIA: Yes, we all met you that day at the trials. I will admit . . . I did not understand Cassandra's choice.",
        "answers":[
            {"title":"[Next]","response":1},
        ]
    },
    {
        // 1 : end
        "question":"FORTUNATA: You had spirit but, errr, no Sight.",
        "answers":[    
        {"title":"[Next]","response":2},
        ]
    },
    {
        // 2 : end
        "question":"JUNO: Still, the omens were all good.",
        "answers":[
            {"title": "[Next]","response":3},
        ]
    },
    {
        // 3 : end
        "question":"LIVIA: And yet, Cassandra chose you as her apprentice.",
        "answers":[
            {"title": "I just got mixed up in all of this","response": 4},
            {"title": "Don't you find her choice suspicious?","response": 8, 'id': 222},

        ]
    },
    {
        // 4 : end
        "question":"JUNO: Mistake or not, your actions reflect only on you.",
        "answers":[
            {"title": "[Next]","response": 5},
        ]
    },
    {
        // 5 : cont      
        "question":"FORTUNATA: But she claims innocence. Let her finish.",
        "answers":[
            {"title":"[Next]","response":7},
        ]
    },
    {
        // 6: cont
        "question":"FORTUNATA: This is indeed troubling, but please go on.",
        "answers":[
            {"title":"[Next]","response":10},
        ]
    },
    {
        // 7 : ALL END
        "question":"LIVIA: Yes. Now tell us, what happened the night the sacred fire was destroyed?",
        "answers":[
            {"title":"I will do my best to remember","response":111},
        ]
    },
    {
        // 8 : cont
        "question":"LIVIA: You have a point. I did not understand Cassandra's logic. She was set on choosing you.",
        "answers":[
            {"title":"Her intentions were not pure","response":9},
            {"title":"Things aren't what they seem","response":10},

        ]
    },
    {
        // 9 : cont
        "question":"JUNO: Cassandra was always dedicated, a good priestess. I do not understand her intentions, but I do not believe she was corrupt.",
        "answers":[
            {"title":"Listen to my side of the story before you decide","response":6},
            {"title":"I know this is hard to hear, but please listen","response":6},

        ]
    },
    {
        // 10 : cont
        "question":"LIVIA: Yes. Now tell us, what happened the night the sacred fire was destroyed?",
        "answers":[
            {"title":"I will do my best to remember","response":111},
        ]
    }
],
[
    {   // FIRE SCENE - NO FRUIT
        "question":"Cassandra looks . . . different.",
        "answers":[
            {"title":"[Step forward]","response":1},
            {"title":"[Stay in the shadows]","response":3},

        ]
    },
    {
        // 1 : end
        "question":"Cassandra places her hands directly on the fire. She turns at the sound of your footsteps.",
        "answers":[    
        {"title":"What are you doing?","response":2},
        {"title":"Stop!","response":2},
        {"title":"I knew you looked familiar","response":5},


        ]
    },
    {
        // 2 : end
        "question":"CASSANDRA: You shouldn't be here, child.",
        "answers":[
            {"title":"You were acting strangely, so I followed you","response":2},
            {"title":"That makes two of us","response":2},
            {"title":"Stop what you're doing, or I'll call for help","response":2},
        ]
    },
    {
        // 3 : end
        "question":"Cassandra places her hands directly on the fire. When she removes them, they are unburned.",
        "answers":[
            {"title":"What are you doing?","response":2},
            {"title":"Stop!","response":2},
            {"title":"[Remain hidden]","response":4},

        ]
    },
    {
        // 4 : end
        "question":"Cassandra eats a handful of fruit. She begins to glow.",
        "answers":[
            {"title": "Stop!","response": 13},
            {"title":"[Watch in terror]","response":11},
        ]
    },
    {
        // 5 : cont      
        "question":"CASSANDRA: Took you long enough. Oh well . . . I was hoping things wouldn't get this messy.",
        "answers":[
            {"title":"Stop what you're doing, or I'll call for help","response":7},
            {"title":"Err, what things?","response":8},
        ]
    },
    {
        // 6: cont
        "question":"FORTUNATA: This is indeed troubling, but please go on.",
        "answers":[
            {"title":"[Next]","response":10},
        ]
    },
    {
        // 7 : ALL END
        "question":"CASSANDRA: I have no time for this. Leave!",
        "answers":[
            {"title":"[Next]","response":9},
        ]
    },
    {
        // 8 : cont
        "question":"Cassandra laughs. 'Do whatever you like.'",
        "answers":[
            {"title":"[Next]","response":9},


        ]
    },
    {
        // 9 : cont
        "question":"Cassandra eats a handful of fruit. She begins to glow and the fire swirls toward her.",
        "answers":[
            {"title":"[Scream for help]","response":10},
            {"title":"[Run forward and push Cassandra away from the fire]","response":11},
            {"title":"[Shield yourself]","response":12},
        ]
    },
    {
        // 10 : cont
        "question":"The fire blazes, and then explodes",
        "answers":[
            {"title":"I will do my best to remember","response":111},
        ]
    },
    {
        // 11 : cont
        "question":"The fire blazes, and then explodes",
        "answers":[
            {"title":"I will do my best to remember","response":111},
        ]
    },
    {
        // 12 : cont
        "question":"The fire blazes, and then explodes",
        "answers":[
            {"title":"I will do my best to remember","response":111},
        ]
    },
    {
        // 13 : cont
        "question":"CASSANDRA: What are you doing here? LEAVE!",
        "answers":[
            {"title":"[Scream for help]","response":10},
            {"title":"[Run forward and push Cassandra away from the fire]","response":11},
            {"title":"[Shield yourself]","response":12},
        ]
    }
]
];

  export default Convos;