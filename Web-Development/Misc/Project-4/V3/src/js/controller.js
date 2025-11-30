"use strict";

import genPasswordView from "./views/genPasswordView";
import generatePasswordView from "./views/genPasswordView";

console.log("Controller");

// Generates password
const controlPasswordGeneration = function () {
  genPasswordView.renderPassword();
};

const init = function () {
  generatePasswordView.addHandlerPwGen(controlPasswordGeneration);
};

init();
