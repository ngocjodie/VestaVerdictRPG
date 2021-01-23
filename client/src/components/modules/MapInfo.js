
//IF YOU WANT AN OBJECT ON A MAP, GIVE IT A NAME THEN PUT ITS OTHER INFO IN AN ARRAY


export const mapinfo = {
  //might need to switch keys to names and make the pngs elements
  "river": {
    "playerstart": [100, 100],
    "nextmap": "checker",
    "exit": [500, 400],

    "objects": { //UNIQUEkey: [CSS className, x, y, width, height]
      "crate"   : ["small-box", 560, 60, 25, 25],
      "~grapes~": ["checker", 700, 430, 50, 80],
      "another" : ["small-box", 300, 300, 96, 54],
      "board"   : ["checker", 150, 120, 70, 70],
      "hidden"  : ["invisible", 200, 200, 30, 60], //if the className is invisible, then the onClick functions will work for pngs inside of them
    },
  },

  "checker": {
    "playerstart": [480, 272],
    "nextmap": "map",
    "exit": [600, 400],

    "objects": { //UNIQUEkey: [CSS className, x, y, width, height]
      "checkers" : ["checker", 100, 100, 60, 60],
      "fake exit": ["door", 45, 90, 50, 80],
    },
  },

  "map": {
    "playerstart": [50, 200],
    "nextmap": "river",
    "exit": [700, 200],
    
    "objects": { //UNIQUEkey: [CSS className, x, y, width, height]
      "seat1": ["small-box", 400, 300, 40, 40],
      "seat2": ["small-box", 450, 300, 40, 40],
      "seat3": ["small-box", 500, 300, 40, 40],
      "seat4": ["small-box", 550, 300, 40, 40],
      "seat5": ["small-box", 600, 300, 40, 40],
    },
  },


}