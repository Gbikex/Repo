import {
  MODAL_DISPLAY_VARIABLE,
  MODAL_DISPLAY_VAL_ON,
  MODAL_DISPLAY_VAL_OFF,
} from "./config.js";
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
// Open modal dialog
const controlOpenDialog = function () {
  getInformationView.changeElement(
    MODAL_DISPLAY_VARIABLE,
    MODAL_DISPLAY_VAL_ON
  );
};
// Close dialog
const controlCloseDialog = function () {
  getInformationView.changeElement(
    MODAL_DISPLAY_VARIABLE,
    MODAL_DISPLAY_VAL_OFF
  );
};

const init = function () {
  generatePasswordView.addHandlerPwGen(controlPasswordGeneration);
  copyPasswordView.addHandlerPwCopy(controlPasswordCopy);
  generatePasswordView.addHandlerPwReset(controlReset);
  getInformationView.addHandlerInfoOpen(controlOpenDialog);
  getInformationView.addHandlerInfoClose(controlCloseDialog);
};

init();
