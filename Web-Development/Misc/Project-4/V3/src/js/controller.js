import {
  MODAL_DISPLAY_VARIABLE,
  BTN_COPY_VARIABLE,
  DISPLAY_VAL_ON,
  DISPLAY_VAL_OFF,
  MINLENGTH,
  MAX_LENGTH,
} from "./config.js";
import { state } from "./model.js";
import { changeElement } from "./helper.js";
import generatePasswordView from "./views/genPasswordView.js";
import copyPasswordView from "./views/copyPasswordView.js";
import getInformationView from "./views/getInformationView.js";
import logView from "./views/logView.js";

console.log("Controller");

// Generates password
const controlPasswordGeneration = function () {
  // 1) Checking if the minimum limit met
  if (
    generatePasswordView.inputElement.value < MINLENGTH &&
    generatePasswordView.inputElement.value
  )
    return logView.renderErrorElement(state.responses.pwMinLengthMsg);

  // 2) Checking if the max limit not over shot
  if (generatePasswordView.inputElement.value > MAX_LENGTH)
    return logView.renderErrorElement(state.responses.pwMaxLengthMSG);

  // 3) If all pre requirements met pw is generated
  generatePasswordView.renderPassword();
  changeElement(BTN_COPY_VARIABLE, DISPLAY_VAL_ON);

  // 4) Render generated PW and success msg to ui
  generatePasswordView.renderSuccessfullyGenPW();

  // 5) Render success msg
  logView.renderSuccessElement();
};

// Copy generated password
const controlPasswordCopy = function () {
  copyPasswordView.copyPassword();
};

// Reset interface
const controlReset = function () {
  generatePasswordView.clear();
  generatePasswordView.inputElement.value = "";
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
