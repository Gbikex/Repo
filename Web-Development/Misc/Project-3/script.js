"use strict";

const randomNumber = Math.trunc(Math.random() * 20) + 1;
let responseText = document.querySelector(".response");
const responses = {
  high: "Your guess is too high!",
  low: "Your guess is too low!",
  win: "You guessed the number, we have a winner!",
  lost: "Ran out of chances, you lost the game",
};
const formDisable = document.getElementById("guess--number");
const btnSubmitDisable = document.querySelector(".submit");
const highscoreHolder = document.querySelector(".highscore.holder");

let guessChance = 20;
document.querySelector(".left").textContent = guessChance;

console.log(randomNumber);

const btnSubmit = document
  .querySelector(".submit")
  .addEventListener("click", () => {
    const guess = document.getElementById("guess--number").value;

    if (guessChance > 0) {
      if (guess > 0 && guess <= 20) {
        if (guess < randomNumber) {
          responseText.textContent = responses.low;
          guessChance--;
          document.querySelector(".left").textContent = guessChance;
        } else if (guess > randomNumber) {
          responseText.textContent = responses.high;
          guessChance--;
          document.querySelector(".left").textContent = guessChance;
        } else {
          responseText.textContent = responses.win;

          document.querySelector(".result").textContent = randomNumber;

          highscoreHolder.textContent = guessChance;

          formDisable.disabled = true;
          btnSubmitDisable.disabled = true;
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
