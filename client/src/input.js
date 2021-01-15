/**  ASSUMPTIONS
 * 
 * there are boundaries that the player can't pass
 * if the player goes off screen, it takes them to the beginning of the next screen
 * if certain objects are clicked on, they will be processed by an onClick in-tag function
 * the player can move if they're not in a conversation
 * 
 */

const handleInput = (e) => {
  if (e.key === "ArrowUp") {
    console.log("up");
  } else if (e.key === "ArrowDown") {
    console.log("down");
  } else if (e.key === "ArrowLeft") {
    console.log("left");
  } else if (e.key === "ArrowRight") {
    console.log("right");
  }
};

//if not dialoguing
window.addEventListener("keydown", handleInput);