let canvas;


// functions below
const drawChar = (x, y, color) => {
  console.log("I'm in");
  // get the canvas element
  canvas = document.getElementById("game-canvas");
  if (!canvas) return;
  const context = canvas.getContext("2d");

  context.fillStyle = color;
  context.fillRect(x, y, 50, 50);
};

// const moveChar = (dir, char) => {
//   canvas = document.getElementById("game-canvas");
//   if (!canvas) return;
//   const context = canvas.getContext("2d");
//   console.log(context);
//   if (dir === "up") {
//     char.setState({
//       y: char.state.y - char.state.speed,
//     });
//   }
// }


// const handleInput = (e) => {
//   if (e.key === "ArrowUp") {
//     console.log("up");
//     this.setState({
//       player: {
//         y: this.state.y - this.state.speed,
//       },
//     });
//   } else if (e.key === "ArrowDown") {
//     console.log("down");
//     this.setState({
//       player: {
//         y: this.state.y + this.state.speed,
//       },
//     });
//   } else if (e.key === "ArrowLeft") {
//     console.log("left");
//     this.setState({
//       player: {
//         x: this.state.x - this.state.speed,
//       },
//     });
//   } else if (e.key === "ArrowRight") {
//     console.log("right");
//     this.setState({
//       player: {
//         X: this.state.x + this.state.speed,
//       },
//     });
//   }
// };


/** main draw */
export const drawCanvas = () => {
  console.log("I'm in");
  // get the canvas element
  canvas = document.getElementById("game-canvas");
  if (!canvas) return;
  const context = canvas.getContext("2d");
  console.log(context);

  // clear the canvas to black
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // window.addEventListener("keydown", (e) => {
  //   if (e.key === "ArrowUp") {
  //     console.log("up");
  //     canvas.player.setState({
  //       y: canvas.player.state.y - canvas.player.state.speed,
  //     });
  //   } else if (e.key === "ArrowDown") {
  //     console.log("down");
  //     canvas.player.setState({
  //       y: canvas.player.y + canvas.player.state.speed,
  //     });
  //   } else if (e.key === "ArrowLeft") {
  //     console.log("left");
  //     canvas.player.setState({
  //       x: canvas.player.state.x - canvas.player.state.speed,
  //     });
  //   } else if (e.key === "ArrowRight") {
  //     console.log("right");
  //     canvas.player.setState({
  //       x: canvas.player.state.x + canvas.player.state.speed,
  //     });
  //   }
  // });

  // context.fillStyle = canvas.player.color;
  // context.fillRect(canvas.player.x, canvas.player.y, 50, 50);
 // drawChar(context, canvas.player);
}