"use strict";

function generatePassword(pwLong = 16) {
  let newPassword;
  let passwordTemplate;

  const charList = ["a", "b", "c", "e", "e", "f", "g", "h"];
  const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const symList = ["§", "'", "+", "!", "%", "/", "=", "("];

  let numOpt = 0;

  pwLong % 3 === 0 ? (numOpt = pwLong / 3) : (numOpt = Math.floor(pwLong / 3));
  console.log(numOpt);

  const charLength = numOpt;
  const numLength = numOpt;
  const symLength = pwLong - numOpt * 2;

  console.log(charLength, numLength, symLength);

  passwordTemplate = loopString(charList, charLength);
  passwordTemplate += loopString(numList, numLength);
  passwordTemplate += loopString(symList, symLength);

  console.log(`Template string: ${passwordTemplate}`);

  newPassword = passwordTemplate
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");

  console.log(newPassword);
}

function loopString(arr, num) {
  let tmpPart = "";
  for (let i = 0; i < num; i++) {
    const randomIndex = Math.trunc(Math.random() * arr.length);
    tmpPart += arr[randomIndex];
  }
  console.log(`Inner function log: ${tmpPart}`);
  return tmpPart;
}

generatePassword(undefined);
