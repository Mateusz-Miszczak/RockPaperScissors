"use strict";

const threeButtons = document.querySelectorAll("rps-btn");
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
