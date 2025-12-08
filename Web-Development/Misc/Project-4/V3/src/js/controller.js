import generatePasswordView from "./views/genPasswordView";
import copyPasswordView from "./views/copyPasswordView";

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
};

const init = function () {
  generatePasswordView.addHandlerPwGen(controlPasswordGeneration);
  copyPasswordView.addHandlerPwCopy(controlPasswordCopy);
  generatePasswordView.addHandlerPwReset(controlReset);
};

init();
