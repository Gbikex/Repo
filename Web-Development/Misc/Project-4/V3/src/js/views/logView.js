import { state } from "../model.js";
import genPasswordView from "./genPasswordView.js";

class LogResponses {
  _returnElement = document.querySelector(".return_msg__log");

  /**
   * Successful generation response
   */
  successLog() {
    //this._returnElement = state.log.success;
    this._returnElement.innerHTML = state.log.success;
  }

  /**
   * Failed generation response
   */
  errorLog() {
    genPasswordView._errorMessage.innerHTML = state.incorrectPwLength;
    this._returnElement.innerHTML = state.log.fail;
  }

  clearLog() {
    this._returnElement.innerHTML = "";
  }
}

export default new LogResponses();
