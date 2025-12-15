import generatePasswordView from "./views/genPasswordView.js";
import copyPasswordView from "./views/copyPasswordView.js";
import getInformationView from "./views/getInformationView.js";

console.log("Controller");

// Generates password
const controlPasswordGeneration = function () {
  generatePasswordView.renderPassword();
};
// Copy generated password
const controlPasswordCopy = function () {
  copyPasswordView.copyPassword();
};
// Reset interface
const controlReset = function () {
  generatePasswordView.clear();
  generatePasswordView._inputElement.value = "";
};
// Get info
const controlGetInfo = function () {
  getInformationView.test();
};

const init = function () {
  generatePasswordView.addHandlerPwGen(controlPasswordGeneration);
  copyPasswordView.addHandlerPwCopy(controlPasswordCopy);
  generatePasswordView.addHandlerPwReset(controlReset);
  getInformationView.addHandlerInfo(controlGetInfo);
};

init();
