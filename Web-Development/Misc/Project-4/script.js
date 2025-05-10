"use strict";

const btnGenerate = document.querySelector(".generate");
const inputLength = document.querySelector(".pw.length");
const pDisplay = document.querySelector(".display");
console.log(btnGenerate);
console.log(inputLength);
console.log(pDisplay);

function generatePassword(pwLong = 16) {
  let newPassword;
  let passwordTemplate;

  // prettier-ignore
  const charList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  // prettier-ignore
  const symList = [" ","!","”","#","$","%","&","’","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~",];

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
  return newPassword;
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

btnGenerate.addEventListener("click", () => {
  console.log("Test");
  console.log(inputLength.value);
  let pwDisplay = generatePassword(inputLength.value || undefined);
  pDisplay.textContent = pwDisplay;
});
