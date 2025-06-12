"use strict";

const gameMoves = ["Rock", "Paper", "Scissor"];
const gameMessages = {
  playerRound: "Player win the round",
  playerMove: "Player choose:",
  playerWin: "Player won the game!",
  computerRound: "Computer win the round",
  computerMove: "Computer choose",
  computerWin: "Computer won the game!",
  drawRound: "The round is draw",
  drawGame: "We have two winners!",
};
let playerScore = 0;
let computerScore = 0;
const gameWinScore = 5;

const btnPlay = document.querySelector(".btn--play");
const btnReset = document.querySelector(".btn--reset");
const movePlayer = document.querySelector(".game--response_player");
const moveComputer = document.querySelector(".game--response_computer");
const gameResponse = document.querySelector(".game--response_response");
const playerGameScore = document.querySelector(".game--score-player");
const computerGameScore = document.querySelector(".game--score-computer");
const scoreDiv = document.querySelector(".game--score");
const responseDiv = document.querySelector(".game--response");
const winner = document.querySelector(".game--response_winner");
const playerChoice = document.getElementById("player--move");

console.log(
  movePlayer,
  moveComputer,
  gameResponse,
  playerGameScore,
  computerGameScore,
  winner,
  playerChoice
);
console.log(btnPlay);

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

const playGame = function (pMove, cMove) {
  console.log(`Player move is ${pMove}`);
  console.log(`Computer move is ${cMove}`);

  //Player win
  if (pMove === gameMoves[0] && cMove === gameMoves[2]) {
    console.log(`1 - ${gameMoves[0]} - ${gameMoves[2]}`);
    playerScore++;
    return gameMessages.playerRound;
  } else if (pMove === gameMoves[1] && cMove === gameMoves[0]) {
    console.log(`2 - ${gameMoves[1]} - ${gameMoves[0]}`);
    playerScore++;
    return gameMessages.playerRound;
  } else if (pMove === gameMoves[2] && cMove === gameMoves[1]) {
    console.log(`3 - ${gameMoves[2]} - ${gameMoves[1]}`);
    playerScore++;
    return gameMessages.playerRound;
    //Computer win
  } else if (pMove === gameMoves[2] && cMove === gameMoves[0]) {
    console.log(`4 - ${gameMoves[2]} - ${gameMoves[0]}`);
    computerScore++;
    return gameMessages.computerRound;
  } else if (pMove === gameMoves[0] && cMove === gameMoves[1]) {
    console.log(`5 - ${gameMoves[0]} - ${gameMoves[1]}`);
    computerScore++;
    return gameMessages.computerRound;
  } else if (pMove === gameMoves[1] && cMove === gameMoves[2]) {
    console.log(`6 - ${gameMoves[1]} - ${gameMoves[2]}`);
    computerScore++;
    return gameMessages.computerRound;
  }
  //Draw
  else {
    console.log(`Draw`);
    computerScore++;
    playerScore++;
    return gameMessages.drawRound;
  }
};

const isGameOn = function (pScore, cScore) {
  console.log(pScore, cScore);
  if (Number(pScore) === gameWinScore || Number(cScore) === gameWinScore) {
    console.log("end");
    btnPlay.disabled = true;
  }

  if (Number(pScore) === gameWinScore && Number(cScore) === gameWinScore) {
    winner.textContent = gameMessages.drawGame;
    playerChoice.disabled = true;
  } else if (Number(pScore) === gameWinScore) {
    playerChoice.disabled = true;
    winner.textContent = gameMessages.playerWin;
  } else if (Number(cScore) === gameWinScore) {
    playerChoice.disabled = true;
    winner.textContent = gameMessages.computerWin;
  }
};

btnPlay.addEventListener("click", function () {
  responseDiv.style.display = "block";
  const playerMove = Number(playerChoice.value);
  const computerMove = randomMoveNumber();
  const rpsGame = playGame(
    randomMoveTranslate(playerMove),
    randomMoveTranslate(computerMove)
  );

  playerGameScore.textContent = playerScore;
  computerGameScore.textContent = computerScore;

  isGameOn(playerGameScore.textContent, computerGameScore.textContent);

  movePlayer.textContent = `${gameMessages.playerMove} ${randomMoveTranslate(
    playerMove
  )}`;
  moveComputer.textContent = `${
    gameMessages.computerMove
  } ${randomMoveTranslate(computerMove)}`;
  gameResponse.textContent = rpsGame;

  if (playerScore > 0 || computerScore > 0) {
    scoreDiv.style.display = "block";
  }
});

btnReset.addEventListener("click", function () {
  console.log("test");
  playerScore = 0;
  computerScore = 0;
  playerGameScore.textContent = 0;
  computerGameScore.textContent = 0;
  responseDiv.style.display = "none";
  scoreDiv.style.display = "none";
  btnPlay.disabled = false;
  playerChoice.disabled = false;
  winner.textContent = "";
});
