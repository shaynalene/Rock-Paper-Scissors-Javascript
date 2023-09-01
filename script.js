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
let roundNum = 1;
let resdisp = document.querySelector(".result");
let playerdisp = document.querySelector(".player");
let compdisp = document.querySelector(".computer");
let dispscore = document.querySelector("#score");
let green = document.querySelector("#green");
let red = document.querySelector("#red");
let round = document.querySelector(".round");

const weapons = document.querySelectorAll("#weapon");
weapons.forEach((weapon) => (weapon.disabled = true)); //weapons are first disabled

const startbtn = document.querySelector(".start");
startbtn.addEventListener("click", function () {
  weapons.forEach((weapon) => (weapon.disabled = false));
});

// WEAPON BUTTONS ENABLED
weapons.forEach((weapon) =>
  weapon.addEventListener("click", function () {
    let computerSelection = getComputerChoice();
    const res = playRound(weapon.className.toUpperCase(), computerSelection);
    displayStatus(res, weapon, computerSelection);
  })
);

function displayStatus(result, weapon, computerSelection) {
  round.textContent = "ROUND " + roundNum++;
  playerdisp.textContent = "Player played " + weapon.className.toUpperCase();
  compdisp.textContent = "Computer played " + computerSelection;
  green.textContent = playerScore;
  green.style.color = "green";
  red.textContent = computerScore;
  red.style.color = "red";

  //playerScore.textContent.style.color = "green";
  //dispscore.textContent = ` ${(playerScore)} + " : " + ${(computerScore)}`;
  resdisp.textContent = result;

  // DISPLAY WINNER IF ONE REACHES 5 POINTS
  if (playerScore >= 5 || computerScore >= 5) {
    weapons.forEach((weapon) => (weapon.disabled = true));
    const gameres = document.querySelector(".gameresult");
    if (playerScore > computerScore) {
      gameres.style.color = "green";
      gameres.textContent = "Congratulations! You won the game!";
    } else if (playerScore < computerScore) {
      gameres.style.color = "red";
      gameres.textContent =
        "You lost against our computer! Props to you though.";
    }
  }
}

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
