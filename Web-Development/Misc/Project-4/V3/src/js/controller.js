import generatePasswordView from "./views/genPasswordView";

console.log("Controller");

// Generates password
const controlPasswordGeneration = function () {
  generatePasswordView.renderPassword();
};

const init = function () {
  generatePasswordView.addHandlerPwGen(controlPasswordGeneration);
};

init();
