"use strict";

//const playerMove = 1;
const gameMoves = ["Rock", "Paper", "Scissor"];
const gameMessages = {
  playerRound: "Player win the round",
  playerMove: "Player choose:",
  playerWin: "Player won the game",
  computerRound: "Computer win the round",
  computerMove: "Computer choose",
  computerWin: "Computer won the game",
  draw: "The round is draw",
};
let playerScore = 1;
let computerScore = 0;

const btnSubmit = document.querySelector(".btn--play");
const btnReset = document.querySelector(".btn--reset");
const movePlayer = document.querySelector(".game--response_player");
const moveComputer = document.querySelector(".game--response_computer");
const gameResponse = document.querySelector(".game--response_response");
const playerGameScore = document.querySelector(".game--score-player");
const computerGameScore = document.querySelector(".game--score-computer");
const scoreDiv = document.querySelector(".game--score");

playerGameScore.textContent = playerScore;
computerGameScore.textContent = computerScore;

console.log(
  movePlayer,
  moveComputer,
  gameResponse,
  playerGameScore,
  computerGameScore
);
console.log(btnSubmit);

const randomMoveNumber = function () {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  return randomNumber;
};

const randomMoveTranslate = function (randomNumber) {
  //console.log(randomNumber);
  switch (randomNumber) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissor";
    default:
      return "Error invalid number";
  }
};

//const gameMoves = ["Rock", "Paper", "Scissor"];

const playGame = function (pMove, cMove) {
  console.log(`Player move is ${pMove}`);
  console.log(`Computer move is ${cMove}`);

  //Player win
  if (pMove === gameMoves[0] && cMove === gameMoves[2]) {
    console.log(`1 - ${gameMoves[0]} - ${gameMoves[2]}`);
    return gameMessages.playerRound;
  } else if (pMove === gameMoves[1] && cMove === gameMoves[0]) {
    console.log(`2 - ${gameMoves[1]} - ${gameMoves[0]}`);
    return gameMessages.playerRound;
  } else if (pMove === gameMoves[2] && cMove === gameMoves[1]) {
    console.log(`3 - ${gameMoves[2]} - ${gameMoves[1]}`);
    return gameMessages.playerRound;
    //Computer win
  } else if (pMove === gameMoves[2] && cMove === gameMoves[0]) {
    console.log(`4 - ${gameMoves[2]} - ${gameMoves[0]}`);
    return gameMessages.computerRound;
  } else if (pMove === gameMoves[0] && cMove === gameMoves[1]) {
    console.log(`5 - ${gameMoves[0]} - ${gameMoves[1]}`);
    return gameMessages.computerRound;
  } else if (pMove === gameMoves[1] && cMove === gameMoves[2]) {
    console.log(`6 - ${gameMoves[1]} - ${gameMoves[2]}`);
    return gameMessages.computerRound;
  }
  //Draw
  else {
    console.log(`Draw`);
    return gameMessages.draw;
  }
};
//console.log(randomMoveNumber());
//console.log(randomMoveTranslate(randomMoveNumber()));
//console.log(
//  playGame(
//    randomMoveTranslate(playerMove),
//    randomMoveTranslate(randomMoveNumber())
//  )
//);

btnSubmit.addEventListener("click", function () {
  const playerMove = Number(document.getElementById("player--move").value);
  const computerMove = randomMoveNumber();
  const rpsGame = playGame(
    randomMoveTranslate(playerMove),
    randomMoveTranslate(computerMove)
  );

  movePlayer.textContent = `${gameMessages.playerMove} ${randomMoveTranslate(
    playerMove
  )}`;
  moveComputer.textContent = `${
    gameMessages.computerMove
  } ${randomMoveTranslate(computerMove)}`;
  gameResponse.textContent = rpsGame;

  if (playerScore > 0 || computerScore > 0) {
    scoreDiv.style.display = "block";
  } else {
    console.log("eh");
  }
});
