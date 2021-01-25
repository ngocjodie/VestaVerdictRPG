
//IF YOU WANT AN OBJECT ON A MAP, GIVE IT A NAME THEN PUT ITS OTHER INFO IN AN ARRAY
// ~ NOTE: one must be an "exit" with name "door" that's 50x80 --> or we could make them invisible for cool puzzle rooms


export const mapinfo = {
  //might need to switch keys to names and make the pngs elements so we can reuse things
  "room1": {
    thismap: "river",
    playerstart: [100, 100],
    nextmap: "room2", //which map it switches to when Player collides with exit object

    objects: { 
    // UNIQUEkey: [CSS className,  x,   y,  width, height]
      "exit"    : [   "door",     500, 400,   50,    80  ],
      "crate"   : ["small-box", 560, 60, 25, 25],
      "~grapes~": ["checker", 700, 430, 50, 80],
      "another" : ["small-box", 300, 300, 96, 54],
      "board"   : ["checker", 150, 120, 70, 70],
      "hidden"  : ["invisible", 200, 200, 30, 60], //if the className is invisible, then the onClick functions will work for pngs inside of them
    },
  },

  "room2": {
    thismap: "checker",
    playerstart: [480, 272], // N/A at the moment
    nextmap: "room3",

    objects: { 
    // UNIQUEkey : [CSS className,  x,   y,  width, height]
      "exit"     : [   "door",     600, 400,   50,    80  ],
      "checkers" : ["checker", 100, 100, 60, 60],
      "fake exit": ["door", 45, 390, 50, 80],
    },
  },

  "room3": {
    thismap: "map",
    playerstart: [50, 200], // N/A at the moment
    nextmap: "room1",

    objects: { 
    //UNIQUEkey: [CSS className,  x,   y,  width, height]
      "exit"   : [   "door",     700, 200,   50,    80  ],
      "seat1"  : ["small-box", 400, 300, 40, 40],
      "seat2"  : ["small-box", 450, 300, 40, 40],
      "seat3"  : ["small-box", 500, 300, 40, 40],
      "seat4"  : ["small-box", 550, 300, 40, 40],
      "seat5"  : ["small-box", 600, 300, 40, 40],
      "west"   : ["left-telescope", 20, 85, 60, 60],
      "east"   : ["right-telescope", 820, 480, 60, 60],
    },
  },


}