var currentPlayer = "X";
var gameActive = true;
var gameState = ["", "", "", "", "", "", "", "", ""];

var winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function makeMove(cellIndex) {
  if (gameState[cellIndex] === "" && gameActive) {
    gameState[cellIndex] = currentPlayer;
    document.getElementsByClassName("cell")[cellIndex].textContent = currentPlayer;
    if (checkWin()) {
      document.getElementById("message").textContent = "Player " + currentPlayer + " wins!";
      gameActive = false;
    } else if (checkTie()) {
      document.getElementById("message").textContent = "It's a tie!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      document.getElementById("message").textContent = "Player " + currentPlayer + "'s turn";
    }
  }
}

function checkWin() {
  for (var i = 0; i < winningConditions.length; i++) {
    var [a, b, c] = winningConditions[i];
    if (
      gameState[a] !== "" &&
      gameState[a] === gameState[b] &&
      gameState[a] === gameState[c]
    ) {
      return true;
    }
  }
  return false;
}

function checkTie() {
  return !gameState.includes("");
}

function resetGame() {
  currentPlayer = "X";
  gameActive = true;
  gameState = ["", "", "", "", "", "", "", "", ""];
  document.getElementById("message").textContent = "Player " + currentPlayer + "'s turn";
  var cells = document.getElementsByClassName("cell");
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
}
