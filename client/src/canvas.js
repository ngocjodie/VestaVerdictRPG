let canvas;

// functions below
const drawChar = (context, x, y, color) => {
  context.fillStyle = color;
  context.fillRect(x, y, 50, 50);
};


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

  drawChar(context, 20, 20, "blue");

  // draw all the players
  // Object.values(drawState.players).forEach((p) => {
  //   drawPlayer(context, p.x, p.y, p.color);
  // });
};