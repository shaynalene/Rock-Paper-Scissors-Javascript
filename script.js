function getComputerChoice() {
  let genRndmChoice = Math.floor(Math.random() * 3) + 1; // generates a number between 1-3
  console.log(genRndmChoice);

  switch (genRndmChoice) {
    case 1:
      return "ROCK";
    case 2:
      return "PAPER";
    case 3:
      return "SCISSORS";
  }
}

let round = document.querySelector(".round");
let playerScoreDisplay = document.querySelector("#playerScore");
let computerScoreDisplay = document.querySelector("#computerScore");
let resultDisplay = document.querySelector("#result");
let restartGame = document.getElementById("restart");
let gameResult = document.querySelector("#gameResult");
let playerSelection;
let numRounds = 1;

// Disables all weapon selections from user
const nodeList = document.querySelectorAll("#playerSelection");
for (i = 0; i < nodeList.length; i++) {
  nodeList[i].disabled = true;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  //Player wins
  if (
    (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
    (playerSelection == "PAPER" && computerSelection == "ROCK") ||
    (playerSelection == "SCISSORS" && computerSelection == "PAPER")
  ) {
    playerScore++;

    return `You won! ${playerSelection} beats ${computerSelection}`;
  }
  // Player loses
  else if (
    (playerSelection == "ROCK" && computerSelection === "PAPER") ||
    (playerSelection == "PAPER" && computerSelection === "SCISSORS") ||
    (playerSelection == "SCISSORS" && computerSelection === "ROCK")
  ) {
    computerScore++;

    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection == computerSelection) {
    return `It's a tie! Play again!`;
  } else {
    return `Invalid input! Try again!`;
  }
}

function getPlayerChoice(string) {
  if (numRounds <= 5) {
    let computerSelection = getComputerChoice();
    playerSelection = string;
    resultDisplay.textContent = playRound(playerSelection, computerSelection);
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    if (numRounds == 5) {
      gameResult.textContent = game();
    }
    round.textContent = `Round ${numRounds}/5`;
  }
  numRounds++;
}

function game() {
  if (playerScore > computerScore) {
    playerScore = 0;
    computerScore = 0;
    return "Congratulations! You won the game!";
  } else if (playerScore < computerScore) {
    playerScore = 0;
    computerScore = 0;
    return "You lost against our computer! Props to you though.";
  } else {
    playerScore = 0;
    computerScore = 0;
    return "You tied against the computer! Try again?";
  }
}
restartGame.addEventListener("click", function () {
  const nodeList = document.querySelectorAll("#playerSelection");
  for (i = 0; i < nodeList.length; i++) {
    nodeList[i].disabled = false;
  }

  playerScore = 0;
  computerScore = 0;
  numRounds = 1;
  gameResult.textContent = "";
  playerScoreDisplay.textContent = "0";
  computerScoreDisplay.textContent = "0";
  round.textContent = `Round ${numRounds}/5`;
});
