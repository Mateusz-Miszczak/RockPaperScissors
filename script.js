"use strict";

const threeButtons = document.querySelectorAll(".rps-btn");
const playerScore = document.getElementById("player-score");
const hands = document.getElementById("hands");
const result = document.getElementById("result");
const resetButton = document.getElementById("end-game-btn");

const getRandomChoice = () => {
  const rockPaperScissorsArray = ["Rock", "Paper", "Scissors"];
  let randomChoice = Math.floor(Math.random() * rockPaperScissorsArray.length);
  return rockPaperScissorsArray[randomChoice];
};

const getResult = (playerChoice, computerChoice) => {
  let score = 0;
  if (playerChoice === computerChoice) {
    score = 0;
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    score = 1;
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1;
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1;
  } else {
    score = -1;
  }
  return score;
};

const showResult = (score, playerChoice, computerChoice) => {
  switch (score) {
    case 1:
      result.innerText = " You win!";
      break;
    case -1:
      result.innerText = " You lose!";
      break;
    case 0:
      result.innerText = " It's a draw!";
      break;
  }
  playerScore.innerText = `${Number(playerScore.innerText) + score}`;
  hands.innerText = `Player chose: ${playerChoice}
  Computer chose: ${computerChoice}`;
};

const onClickRPS = (playerChoice) => {
  const computerChoice = getRandomChoice();
  const score = getResult(playerChoice.value, computerChoice);
  showResult(score, playerChoice.value, computerChoice);
};

const playGame = () => {
  threeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      onClickRPS(btn);
    });
  });
  resetButton.addEventListener("click", () => endGame());
};

const endGame = () => {
  playerScore.innerText = "";
  result.innerText = "";
  hands.innerText = "";
};

playGame();
