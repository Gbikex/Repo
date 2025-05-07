"use strict";

function generatePassword(pwLong = 11) {
  const charList = ["a", "b", "c", "e", "e", "f", "g", "h"];
  const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const symList = ["§", "'", "+", "!", "%", "/", "=", "("];

  let numOpt = 0;

  pwLong % 3 === 0 ? (numOpt = pwLong / 3) : (numOpt = pwLong / 2);
  console.log(numOpt);

  const charLength = Math.floor(numOpt);
  const numLength = Math.floor(numOpt);
  const symLength = pwLong - numOpt;

  console.log(charLength, numLength, symLength);
}

generatePassword(undefined);
