var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init() {
  setupModeBtn();
  setupSquares();
  reset();
}

function setupModeBtn() {
  // mode btns event listeners
  for (i = 0; i < modeBtns.length; i++) {
    modeBtns[i].addEventListener("click", function() {
      modeBtns[0].classList.remove("selected");
      modeBtns[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
      // if(this.textContent ==="Easy"){
      //   numOfSquares = 3;
      // } else {
      //   numOfSquares = 6;
      // }
      reset();
    });
  }
}

function setupSquares() {
  for (i = 0; i < squares.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
      // grab color of clicked squares
      var clickedColor = this.style.backgroundColor;
      // compare color to pickedColor
      if (clickedColor === pickedColor) {
        message.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = pickedColor;
        resetBtn.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again!";

      }
    });
  }
}

function reset() {
  colors = generateRanodomColors(numOfSquares);
  //pick a new random colors
  pickedColor = pickColor();
  //change colorDisplay
  colorDisplay.textContent = pickedColor;
  message.textContent = "";
  resetBtn.textContent = "New Colors";

  //change colors of squares
  for (i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "#c5f0a4";
}

resetBtn.addEventListener("click", function() {
  reset();
});

function changeColors(color) {
  //loop through all squares
  for (i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRanodomColors(num) {
  //make an array
  var arr = [];
  //repeat num times
  for (i = 0; i < num; i++) {
    //get a random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick red from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick green from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick blue from 0-255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
