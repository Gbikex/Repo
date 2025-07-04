"use strict";

const btnGenerate = document.querySelector(".btn--generate");
const btnReset = document.querySelector(".btn--reset");
const btnCopy = document.createElement("button");
const btnCopyText = document.createTextNode("Copy");
let inputLength = document.querySelector(".input--length");
let pDisplay = document.querySelector(".display.pw");
const pMessage = document.querySelector(".display.msg");
const responseMsg = {
  genPw: "Here is your password:",
};

class PasswordGenerate {
  //pwLong = 16;
  constructor(pwLong) {
    this.pwLong = pwLong;

    //Generates password
    btnGenerate.addEventListener("click", () => {
      console.log("Generated PW");
      console.log(`Input number:${inputLength.value}`);

      const value = inputLength.value;
      console.log(`This is what i need ${value}`);

      pMessage.textContent = responseMsg.genPw;
      pDisplay.textContent = this._generatePassword();
      btnCopy.appendChild(btnCopyText);
      pDisplay.appendChild(btnCopy);
    });

    //Reset page
    btnReset.addEventListener("click", () => {
      pMessage.textContent = "";
      pDisplay.textContent = "";
      inputLength.value = "";
    });

    //Copy PW to clipboard
    btnCopy.addEventListener("click", () => {
      console.log("Copy");
      let pwToCopy = document.querySelector(".display.pw").textContent;
      pwToCopy = pwToCopy.replace("Copy", "");
      navigator.clipboard.writeText(pwToCopy);
      console.log(pwToCopy);
    });
  }

  _loopString(arr, num) {
    let tmpPart = "";
    for (let i = 0; i < num; i++) {
      const randomIndex = Math.trunc(Math.random() * arr.length);
      tmpPart += arr[randomIndex];
    }
    console.log(`Inner function log: ${tmpPart}`);
    return tmpPart;
  }

  _generatePassword(pwLong) {
    let newPassword;
    let passwordTemplate;

    // prettier-ignore
    const charList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    // prettier-ignore
    const symList = [" ","!","”","#","$","%","&","’","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~",];

    let numOpt = 0;

    this.pwLong % 3 === 0
      ? (numOpt = this.pwLong / 3)
      : (numOpt = Math.floor(this.pwLong / 3));
    console.log(numOpt);

    const charLength = numOpt;
    const numLength = numOpt;
    const symLength = this.pwLong - numOpt * 2;

    console.log(charLength, numLength, symLength);

    passwordTemplate = this._loopString(charList, charLength);
    passwordTemplate += this._loopString(numList, numLength);
    passwordTemplate += this._loopString(symList, symLength);

    console.log(`Template string: ${passwordTemplate}`);

    newPassword = passwordTemplate
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");

    console.log(newPassword);
    return newPassword;
  }
}

const appPasswordGenerator = new PasswordGenerate(10);
