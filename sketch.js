

let moveCount = 0;
//below is a hack to put together
//a "2D" array in javascript which
//does not have 2D arrays
var decisionArray = [];

for (var i = 0; i < 3; i++) {
  decisionArray[i] = [];
}

var tempArray = [];

for (var i = 0; i < 3; i++) {
  tempArray[i] = [];
}

function setup() {
  createCanvas(500, 500);
  background("yellow");
  textSize("12");
  line(166, 0, 166, 500);
  line(332, 0, 332, 500);
  line(0, 166, 500, 166);
  line(0, 332, 500, 332);
  //reset decisionArray with 0's
  initArray(decisionArray);
  initArray(tempArray);
  console.log(decisionArray[0][0]);
} //setup
function initArray(x) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      x[i][j] = "0";
    } //for j
  } //for i
}
//g1=da g2=ta
//will return move
function computerRandomMove(grid1, grid2) {
  let row, col, squareNumber;

  //makes copy
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      grid2[i][j] = grid1[i][j];
    } //j
  } //i

  for (let k = 1; k <= 9; k++) {
    row = floor((k - 1) / 3);
    col = (k - 1) % 3;
    //check
    if (grid2[row][col] == "0") {
      grid2[row][col] = "O";
      if (winConfirmed(grid2)) {
        grid1[row][col] = "O";
        return k;
      }
      grid2[row][col] = "0";
    } //if
  } //for k
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      grid2[i][j] = grid1[i][j];
    } //j
  } //i

  for (let k = 1; k <= 9; k++) {
    row = floor((k - 1) / 3);
    col = (k - 1) % 3;
    //check
    if (grid2[row][col] == "0") {
      grid2[row][col] = "X";
      if (winConfirmed(grid2)) {
        grid1[row][col] = "O";
        return k;
      }
      grid2[row][col] = "0";
    } //if
  } //for k
  //looking where to move
  
  
  /*SPECIFIC MOVE NUMBER 1:
My program will make O always take the middle as it's main goal 
placing an ’O’ in square [1][1]
The code for this may be found at line number “95"
# # #   # # #
# # # → # O #
# # #   # # #
  */
  
  if (moveCount == 1) {
    //nested if
    if (grid1[1][1] == "0") {
      grid1[1][1] = "O";
      return 5;
    } //if
  } //if mc==1

  
  
    /*SPECIFIC MOVE NUMBER 2:
My program will prevent a double win from square 6 and 8 
placing an ’O’ in square [2][2]
The code for this may be found at line number “114"
# # #   # # #
# # x → # # x
# x #   # x o
  */

  if (moveCount == 3) {
    //nested if
    if (
      grid1[2][1] == "X" &&
      grid1[1][2] == "X" &&
      grid1[2][2] == "0" &&
      grid1[1][1] == "O"
    ) {
      grid1[2][2] = "O";
      return 9;
    } //if
  } //if mc==1

  
  /*SPECIFIC MOVE NUMBER 3:
My program will prevent a double win from square 4 and 8
placing an ’O’ in square [0][2]
The code for this may be found at line number “137"
# # #   # # #
X # # → X # #
# X #   O X #
  */

  if (moveCount == 3) {
    //nested if
    if (
      grid1[1][0] == "X" &&
      grid1[2][1] == "X" &&
      grid1[2][0] == "0" &&
      grid1[1][1] == "O"
    ) {
      grid1[2][0] = "O";
      return 7;
    } //if
  } //if mc==1

  
  
   /*SPECIFIC MOVE NUMBER 3:
My program will prevent a double win from square 2 and 6 
placing an ’O’ in square [2][0]
The code for this may be found at line number “161"
# X #   # X O
# # X → # # X
# # #   # # #
  */

  if (moveCount == 3) {
    //nested if
    if (
      grid1[0][1] == "X" &&
      grid1[1][2] == "X" &&
      grid1[0][2] == "0" &&
      grid1[1][1] == "O"
    ) {
      grid1[0][2] = "O";
      return 3;
    } //if
  } //if mc==1

  
   /*SPECIFIC MOVE NUMBER 4:
My program will prevent a double from square 2 and 7
placing an ’O’ in square [0][0]
The code for this may be found at line number “185"
# X #   O X #
# # # → # # #
X # #   X # #
  */
  
  
  if (moveCount == 3) {
    //nested if
    if (
      grid1[0][1] == "X" &&
      grid1[2][0] == "X" &&
      grid1[1][0] == "0" &&
      grid1[1][1] == "O"
    ) {
      grid1[0][1] = "O";
      return 4;
    } //if
  } //if mc==1

  //this code is to prevent a double from square 3 and 4 where X would go to square 1

  if (moveCount == 3) {
    //nested if
    if (
      grid1[0][2] == "X" &&
      grid1[1][0] == "X" &&
      grid1[0][0] == "0" &&
      grid1[1][1] == "O"
    ) {
      grid1[0][0] = "O";
      return 1;
    } //if
  } //if mc==1

  //this code is to prevent a double from square 2 and 4 where X would go to square 1
  if (moveCount == 3) {
    //nested if
    if (grid1[1][0] == "X" && grid1[0][0] == "0" && grid1[0][1] == "X") {
      grid1[0][0] = "O";
      return 1;
    } //if
  } //if mc==1

  //this code is to prevent a double from square 1 and 9 where X would go to square either square 3 or 7

  if (moveCount == 3) {
    //nested if
    if (
      grid1[0][0] == "X" &&
      grid1[2][2] == "X" &&
      grid1[1][2] == "0" &&
      grid1[1][1] == "O"
    ) {
      grid1[1][2] = "O";
      return 6;
    } //if
  } //if mc==1

  //this code is to prevent a double from square 3 and 7 where X would go to square either square 1 or 9
  if (moveCount == 3) {
    //nested if
    if (
      grid1[0][2] == "X" &&
      grid1[2][0] == "X" &&
      grid1[1][0] == "0" &&
      grid1[1][1] == "O"
    ) {
      grid1[1][0] = "O";
      return 4;
    } //if
  } //if mc==1

  //this code is to prevent a double from square 4 and 9 where X would go to square 7

  if (moveCount == 3) {
    //nested if
    if (
      grid1[2][2] == "X" &&
      grid1[1][0] == "X" &&
      grid1[2][0] == "0" &&
      grid1[1][1] == "O"
    ) {
      grid1[2][0] = "O";
      return 7;
    } //if
  } //if mc==1

  //this code is to prevent a double from square 2 and 9 where X would go to square 6
  if (moveCount == 3) {
    //nested if
    if (
      grid1[0][1] == "X" &&
      grid1[2][2] == "X" &&
      grid1[1][2] == "0" &&
      grid1[1][1] == "O"
    ) {
      grid1[1][2] = "O";
      return 6;
    } //if
  } //if mc==1

  //this code is to prevent a double from X where X takes square 9, and if it already did then O need to take the corner beside it on square 7
  if (moveCount == 3) {
    //nested if
    if (grid1[2][2] == "0") {
      grid1[2][2] = "O";
      return 9;
    } //if
    //if mc==1
    else if (grid1[2][2] == "X" &&
             grid1[2][0] == "0") {
      grid1[2][0] = "O";
      return 7;
    }
  }

  //if x takes mid

  //the following code is for O to take both of the corner so X cant win
  if (moveCount == 1) {
    //nested if
    if (grid1[1][1] == "X" && 
        grid1[0][0] == "0") {
      grid1[0][0] = "O";
      return 1;
    } //if
  } //if mc==1

  if (moveCount == 3) {
    //nested if
    if (grid1[1][1] == "X" && 
        grid1[2][2] == "X" && 
        grid1[0][0] == "O") {
      grid1[0][2] = "O";
      return 3;
    } //if
  } //if mc==1

  let looking = true;

  while (looking) {
    squareNumber = round(random(1, 9));

    row = floor((squareNumber - 1) / 3);
    col = (squareNumber - 1) % 3;

    if (grid1[row][col] == "0") {
      looking = false;
    }
  } //while
  grid1[row][col] = "O";
  return squareNumber;
} //crm

function outputMove() {
  //enter moves into first square
  if (
    mouseX > 0 &&
    mouseX < 166 &&
    mouseY > 0 &&
    mouseY < 166 &&
    mouseIsPressed &&
    decisionArray[0][0] == "0"
  ) {
    drawX(1);
    moveCount++;
    decisionArray[0][0] = "X";
    consoleOutput(decisionArray);
  } else if (
    mouseX > 166 &&
    mouseX < 333 &&
    mouseY > 0 &&
    mouseY < 166 &&
    mouseIsPressed &&
    decisionArray[0][1] == "0"
  ) {
    drawX(2);
    moveCount++;
    decisionArray[0][1] = "X";
    consoleOutput(decisionArray);
  } else if (
    mouseX > 333 &&
    mouseX < 500 &&
    mouseY > 0 &&
    mouseY < 166 &&
    mouseIsPressed &&
    decisionArray[0][2] == "0"
  ) {
    drawX(3);
    moveCount++;
    decisionArray[0][2] = "X";
    consoleOutput(decisionArray);
  } else if (
    mouseX > 0 &&
    mouseX < 166 &&
    mouseY > 166 &&
    mouseY < 333 &&
    mouseIsPressed &&
    decisionArray[1][0] == "0"
  ) {
    drawX(4);
    moveCount++;
    decisionArray[1][0] = "X";
    consoleOutput(decisionArray);
  } else if (
    mouseX > 166 &&
    mouseX < 333 &&
    mouseY > 166 &&
    mouseY < 333 &&
    mouseIsPressed &&
    decisionArray[1][1] == "0"
  ) {
    drawX(5);
    moveCount++;
    decisionArray[1][1] = "X";
    consoleOutput(decisionArray);
  } else if (
    mouseX > 333 &&
    mouseX < 500 &&
    mouseY > 166 &&
    mouseY < 333 &&
    mouseIsPressed &&
    decisionArray[1][2] == "0"
  ) {
    drawX(6);
    moveCount++;
    decisionArray[1][2] = "X";
    consoleOutput(decisionArray);
  } else if (
    mouseX > 0 &&
    mouseX < 166 &&
    mouseY > 333 &&
    mouseY < 500 &&
    mouseIsPressed &&
    decisionArray[2][0] == "0"
  ) {
    drawX(7);
    moveCount++;
    decisionArray[2][0] = "X";
    consoleOutput(decisionArray);
  } else if (
    mouseX > 166 &&
    mouseX < 333 &&
    mouseY > 333 &&
    mouseY < 500 &&
    mouseIsPressed &&
    decisionArray[2][1] == "0"
  ) {
    drawX(8);
    moveCount++;
    decisionArray[2][1] = "X";
    consoleOutput(decisionArray);
  } else if (
    mouseX > 333 &&
    mouseX < 500 &&
    mouseY > 333 &&
    mouseY < 500 &&
    mouseIsPressed &&
    decisionArray[2][2] == "0"
  ) {
    drawX(9);
    moveCount++;
    decisionArray[2][2] = "X";
    consoleOutput(decisionArray);
  } //if
}

function winConfirmed(n) {
  if (
    (n[0][0] == n[0][1] && n[0][0] == n[0][2] && n[0][0] != "0") ||
    (n[1][0] == n[1][1] && n[1][0] == n[1][2] && n[1][0] != "0") ||
    (n[2][0] == n[2][1] && n[2][0] == n[2][2] && n[2][0] != "0") ||
    (n[0][0] == n[1][0] && n[0][0] == n[2][0] && n[0][0] != "0") ||
    (n[0][1] == n[1][1] && n[0][1] == n[2][1] && n[0][1] != "0") ||
    (n[0][2] == n[1][2] && n[0][2] == n[2][2] && n[0][2] != "0") ||
    (n[0][0] == n[1][1] && n[0][0] == n[2][2] && n[0][0] != "0") ||
    (n[0][2] == n[1][1] && n[0][2] == n[2][0] && n[0][2] != "0")
  ) {
    return true;
  } //b if
  else {
    return false;
  }
} //wc

function checkwin(n) {
  if (winConfirmed(n)) {
    if (moveCount % 2 == 1) {
      background("yellow");
      stroke("black");
      textSize(30);
      textAlign(CENTER, CENTER);
      text("you win", 250, 250);
      noLoop();
    } else {
      background("red");
      stroke("black");
      textSize(30);
      textAlign(CENTER, CENTER);
      text("you lose", 250, 250);
      noLoop();
    }
  } //wctrue
  else if (moveCount == 9) {
    background("orange");
    stroke("balck");
    textSize(30);
    textAlign(CENTER, CENTER);
    text("tied", 250, 250);
    noLoop();
  }
}
//as you would think
function consoleOutput(x) {
  for (var i = 0; i < 3; i++) {
    print(i + ": " + x[i][0] + " " + x[i][1] + " " + x[i][2] + " ");
  } //endfor
} //consoleoutput
function drawCircle(n) {
  circle(83 + 166 * ((n - 1) % 3), 83 + 166 * floor(((n - 1) / 3) % 3), 120);
  //text(n, 83 + 166 * ((n - 1) % 3), 83 +
  //166 * floor(((n - 1) / 3) % 3));
}
function drawX(n) {
  let x = 83 + 166 * ((n - 1) % 3);
  let y = 83 + 166 * floor(((n - 1) / 3) % 3);
  line(x - 40, y - 40, x + 40, y + 40);
  line(x - 40, y + 40, x + 40, y - 40);
}
//call out outputMove here
function draw() {
  if (moveCount % 2 == 0) {
    outputMove();
  } //if
  else {
    drawCircle(computerRandomMove(decisionArray, tempArray));
    moveCount++;
    consoleOutput(decisionArray);
  }

  checkwin(decisionArray);
}
