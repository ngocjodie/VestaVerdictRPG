/**  ASSUMPTIONS / 
 * 
 * there are boundaries that the character can't pass
 * if a character goes off screen, it takes them to the beginning of the next screen
 * if certain objects are clicked on, they will be processed by an onClick in-tag function
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
