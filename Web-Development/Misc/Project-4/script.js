"use strict";

const btnGenerate = document.querySelector(".generate");
const btnReset = document.querySelector(".reset");
const btnCopy = document.createElement("button");
const btnCopyText = document.createTextNode("Copy");
let inputLength = document.querySelector(".pw.length");
let pDisplay = document.querySelector(".display.pw");
const pMessage = document.querySelector(".display.msg");
const responseMsg = {
  genPw: "Here is your password:",
};
console.log(btnGenerate);
console.log(btnReset);
console.log(inputLength);
console.log(pDisplay);
console.log(pMessage);

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
  pMessage.textContent = responseMsg.genPw;
  pDisplay.textContent = pwDisplay;
  btnCopy.appendChild(btnCopyText);
  pDisplay.appendChild(btnCopy);
});

btnCopy.addEventListener("click", () => {
  console.log("Copy");
  let pwToCopy = document.querySelector(".display.pw").textContent;
  pwToCopy = pwToCopy.replace("Copy", "");
  navigator.clipboard.writeText(pwToCopy);
  console.log(pwToCopy);
});

btnReset.addEventListener("click", () => {
  pMessage.textContent = "";
  pDisplay.textContent = "";
  inputLength.value = "";
});
