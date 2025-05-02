"use strict";

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let responseText = document.querySelector(".response");
const responses = {
  high: "Your guess is too high!",
  high_emoji: "👇",
  low: "Your guess is too low!",
  low_emoji: "👆",
  win: "You guessed the number, we have a winner!",
  win_emoji: "🫵",
  lost: "Ran out of chances, you lost the game",
};
const formDisable = document.getElementById("guess--number");
const btnSubmitDisable = document.querySelector(".submit");
const highscoreHolder = document.querySelector(".highscore.holder");

let guessChance = 20;
let highScore = 0;
document.querySelector(".left").textContent = guessChance;

console.log(randomNumber);

const btnSubmit = document
  .querySelector(".submit")
  .addEventListener("click", () => {
    const guess = document.getElementById("guess--number").value;

    if (guessChance > 0) {
      if (guess > 0 && guess <= 20) {
        if (guess < randomNumber) {
          responseText.textContent = responses.low + responses.low_emoji;
          guessChance--;
          document.querySelector(".left").textContent = guessChance;
        } else if (guess > randomNumber) {
          responseText.textContent = responses.high + responses.high_emoji;
          guessChance--;
          document.querySelector(".left").textContent = guessChance;
        } else {
          responseText.textContent = responses.win + responses.win_emoji;

          document.querySelector(".result").textContent = randomNumber;

          formDisable.disabled = true;
          btnSubmitDisable.disabled = true;

          if (guessChance > highScore) {
            highScore = guessChance;
            highscoreHolder.textContent = highScore;
          }
          console.log(highScore);
          console.log(guessChance);
        }
      } else {
        alert("Please enter a valid number between 1 and 20!");
      }
    } else {
      formDisable.disabled = true;
      btnSubmitDisable.disabled = true;
      responseText.textContent = responses.lost;
    }
  });

const btnReset = document
  .querySelector(".reset")
  .addEventListener("click", () => {
    responseText.textContent = "";
    document.querySelector(".result").textContent = "?";
    document.querySelector(".left").textContent = 20;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    guessChance = 20;
    formDisable.value = "";
    formDisable.disabled = false;
    btnSubmitDisable.disabled = false;
    console.log(randomNumber);
  });
