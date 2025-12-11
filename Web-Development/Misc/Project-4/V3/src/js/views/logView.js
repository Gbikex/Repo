import { state } from "../model.js";
import genPasswordView from "./genPasswordView.js";
import { resetElement } from "../helper.js";
import { LOG_ELEMENT_RESET } from "../config.js";

class LogView {
  _returnElement = document.querySelector(".return_msg__log");

  /**
   * Renders successful password generation
   */
  renderSuccessElement() {
    this._returnElement.innerHTML = state.log.success;
  }

  /**
   * Renders failed generation response
   * @param {string} paramErrorType
   */
  renderErrorElement(paramErrorType) {
    genPasswordView._errorMessage.innerHTML = paramErrorType;
    this._returnElement.innerHTML = state.log.fail;
    this.clearLog();
  }

  /**
   * Clears the dedicated log responses for certain processes
   */
  clearLog() {
    resetElement(this._returnElement, LOG_ELEMENT_RESET);
  }
}

export default new LogView();
