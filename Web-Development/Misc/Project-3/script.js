"use strict";

const randomNumber = Math.trunc(Math.random() * 20) + 1;
let responseText = document.querySelector(".response");
const responses = {
  high: "Your guess is too high!",
  low: "Your guess is too low!",
  win: "You guessed the number, we have a winner!",
};

console.log(randomNumber);

const btnSubmit = document
  .querySelector(".submit")
  .addEventListener("click", () => {
    const guess = document.getElementById("guess--number").value;
    console.log(typeof guess);
    if (guess > 0 && guess < 20) {
      if (guess < randomNumber) {
        responseText.textContent = responses.low;
      } else if (guess > randomNumber) {
        responseText.textContent = responses.high;
      } else {
        responseText.textContent = responses.win;
        document.querySelector(".submit").disabled = true;
        document.getElementById("guess--number").disabled = true;
      }
    } else {
      alert("Please enter a valid number between 1 and 20!");
    }
  });
