//Go up and down the stairs
function getStairsMovementDirection(stairNumber, isClimbingStairs) {
  if(stairNumber % 2 === 0 && isClimbingStairs === false) {
    return "down"
  } else if(stairNumber % 2 !== 0 && isClimbingStairs === false) {
      return "right"
  } else if (stairNumber % 2 === 0 && isClimbingStairs === true) {
    return "up"
  } else {
    return "right"
  }
}
  
//Zig-zag movement
function getZigZagMovementDirection(step) {
  if(step % 6 === 0) {
    return "up"
  } else if(step % 3 === 0) {
    return "down" 
  } else {
    return "right"
  }
}

//Move the prince using the keyboard
function manuallyControl(key) {
  if (key === "KeyW") {
    moveDirection("up");
  }
  if (key === "KeyA") {
    moveDirection("left")
  }
  if(key === "KeyS") {
    moveDirection("down")
  }
  if(key === "KeyD") {
    moveDirection("right")
  }
}
//Drink potion 2
function givePotion2Answer() {

}

//Drink potion 3
function givePotion3Answer() {

}

//Drink potion 4
function givePotion4Answer() {

}

//Drink potion 5
function givePotion5Answer() {

}

//Drink potion 6
function givePotion6Answer() {

}

//Drink potion 7
function givePotion7Answer() {

}

//Drink potion 8
function givePotion8Answer() {

}

//Drink potion 9
function givePotion9Answer() {

}

//Drink potion 10
function givePotion10Answer() {

}

//Drink potion 11
function givePotion11Answer() {

}

//Drink potion 12
function givePotion12Answer() {

}

//Solve Level 7 Dungeon
function level7Move() {

}

//Solve Level 8 Dungeon
function level8Move() {

}


// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
  toExport = [
    { name: "getStairsMovementDirection", content: getStairsMovementDirection, type: "function" },
    { name: "getZigZagMovementDirection", content: getZigZagMovementDirection, type: "function" },
    { name: "manuallyControl", content: manuallyControl, type: "function" },
    { name: "givePotion2Answer", content: givePotion2Answer, type: "function" },
    { name: "givePotion3Answer", content: givePotion3Answer, type: "function" },
    { name: "givePotion4Answer", content: givePotion4Answer, type: "function" },
    { name: "givePotion5Answer", content: givePotion5Answer, type: "function" },
    { name: "givePotion6Answer", content: givePotion6Answer, type: "function" },
    { name: "givePotion7Answer", content: givePotion7Answer, type: "function" },
    { name: "givePotion8Answer", content: givePotion8Answer, type: "function" },
    { name: "givePotion9Answer", content: givePotion9Answer, type: "function" },
    { name: "givePotion10Answer", content: givePotion10Answer, type: "function" },
    { name: "givePotion11Answer", content: givePotion11Answer, type: "function" },
    { name: "givePotion12Answer", content: givePotion12Answer, type: "function" },
    { name: "level7Move", content: level7Move, type: "function" },
    { name: "level8Move", content: level8Move, type: "function" },
  ]

} catch (error) {
  toExport = { error: error.message }
}

export { toExport };