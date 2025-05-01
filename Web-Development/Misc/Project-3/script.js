"use strict";

const randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

const btnSubmit = document
  .querySelector(".btn-submit")
  .addEventListener("click", () => {
    console.log("Submit has been clicked");
    const guess = document.getElementById("guess--number").value;
    console.log(guess);

    if (guess < randomNumber) {
      console.log("Your guess is to low");
    } else if (guess > randomNumber) {
      console.log("Your guess is to high");
    } else {
      console.log("You won");
    }
  });
