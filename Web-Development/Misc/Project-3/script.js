"use strict";

const randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
let responseText = document.querySelector(".response");

const responses = {
  high: "Your guess is too high!",
  low: "Your guess is too low!",
  win: "You guessed the number, we have a winner!",
};

const btnSubmit = document
  .querySelector(".btn-submit")
  .addEventListener("click", () => {
    const guess = document.getElementById("guess--number").value;
    console.log(guess);

    if (guess < randomNumber) {
      responseText.textContent = responses.low;
    } else if (guess > randomNumber) {
      responseText.textContent = responses.high;
    } else {
      responseText.textContent = responses.win;
    }
  });
