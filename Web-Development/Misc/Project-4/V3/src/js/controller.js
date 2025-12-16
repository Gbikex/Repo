import {
  MODAL_DISPLAY_VARIABLE,
  BTN_COPY_VARIABLE,
  DISPLAY_VAL_ON,
  DISPLAY_VAL_OFF,
} from "./config.js";
import { changeElement } from "./helper.js";
import generatePasswordView from "./views/genPasswordView.js";
import copyPasswordView from "./views/copyPasswordView.js";
import getInformationView from "./views/getInformationView.js";

console.log("Controller");

// Generates password
const controlPasswordGeneration = function () {
  generatePasswordView.renderPassword();
  changeElement(BTN_COPY_VARIABLE, DISPLAY_VAL_ON);
};
// Copy generated password
const controlPasswordCopy = function () {
  copyPasswordView.copyPassword();
};
// Reset interface
const controlReset = function () {
  generatePasswordView.clear();
  generatePasswordView._inputElement.value = "";
  changeElement(BTN_COPY_VARIABLE, DISPLAY_VAL_OFF);
};
// Open modal dialog
const controlOpenDialog = function () {
  changeElement(MODAL_DISPLAY_VARIABLE, DISPLAY_VAL_ON);
};
// Close dialog
const controlCloseDialog = function () {
  changeElement(MODAL_DISPLAY_VARIABLE, DISPLAY_VAL_OFF);
};

const init = function () {
  generatePasswordView.addHandlerPwGen(controlPasswordGeneration);
  copyPasswordView.addHandlerPwCopy(controlPasswordCopy);
  generatePasswordView.addHandlerPwReset(controlReset);
  getInformationView.addHandlerInfoOpen(controlOpenDialog);
  getInformationView.addHandlerInfoClose(controlCloseDialog);
};

init();
