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

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection);
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

/*
function game() {
  let numRounds = 0;
  while (numRounds < 5) {
    let playerSelection = prompt("Your Turn: ").toUpperCase();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    numRounds++;
    console.log("Round " + numRounds);
    console.log("Player " + playerScore);
    console.log("Computer " + computerScore);
  }
  if (playerScore > computerScore) {
    return "Congratulations! You won the game!";
  } else if (playerScore < computerScore) {
    return "You lost against our computer! Props to you though.";
  } else {
    return "You tied against the computer! Try again?";
  }
}
*/

const weapons = document.querySelectorAll("#weapon");
weapons.forEach((weapon) =>
  weapon.addEventListener("click", function () {
    let computerSelection = getComputerChoice();
    const res = playRound(weapon.className.toUpperCase(), computerSelection);
    console.log(res);
  })
);

console.log(e);

//console.log(weapons);
//console.log(game());
