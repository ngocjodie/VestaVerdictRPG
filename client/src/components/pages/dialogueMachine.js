
import { Machine } from 'xstate';

// This machine is completely decoupled from React
// export const dialogueMachine = Machine({
//   id: 'toggle',
//   initial: 'inactive',
//   states: {
//     inactive: {
//       on: { TOGGLE: 'active' }
//     },
//     active: {
//       on: { TOGGLE: 'inactive' }
//     }
//   }
// });


// // a state listens to events in 'on.' if that event is triggered, it transitions states.
export const dialogueMachine = Machine({
  initial: "closed",
  states: {
    closed: {
      on: { OPEN: "opening", }, // OPEN is event name
    },
    opening: {
      on: { DONE: "opened", },
    },
    opened: {
      on: {
        CLOSE: "closing",
        CONTINUE: "onlyTextClosing"
      },
    },
    onlyTextClosing: {
      on: { DONE: "onlyTextOpening", },
    },
    onlyTextOpening: {
      on: { DONE: "opened", },  
    },
    closing: {
      on: { DONE: "closed", },
    },
  },
})


// dialogueMachine = Machine({
//   initial: "closed",
//   states: {
//     closed: {
//       on: {
//         OPEN: "opening", // OPEN event 
//       },
//     },
//     opening: {
//       // invoke: {
//       //   src: "openBox",
//       //   onDone: { target: "open" },
//       // },
//     },
//     open: {
//       on: {
//         CLOSE: "closing",
//         CONTINUE: "onlyTextClosing"
//       },
//     },
//     onlyTextClosing: {
//       // invoke: {
//       //   src: "closingOnlyText",
//       //   onDone: { target: "onlyTextOpening" },
//       // },
//     },
//     onlyTextOpening: {
//       //   invoke: {
//       //   src: "openOnlyText",
//       //   onDone: { target: "open" },
//       // },    
//     },
//     closing: {
//       // invoke: {
//       //   src: "closeBox",
//       //   onDone: { target: "closed" },
//       // },
//     },
//   },
// })