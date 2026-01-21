"use strict";

import playGame from "./view/playGameView.js";
import pickUser from "./view/pickUserView.js";
import pickComputer from "./view/pickComputerView.js";

const userPick = pickUser.userPick(function (pick) {
  const userMove = pick;
  const computerMove = pickComputer.computerPick();

  playGame.playGame(userMove, computerMove);
});

const init = function () {
  userPick;
};
init();

console.log("Hello from the Controller");
// Test //
