import { state } from "../model.js";
import genPasswordView from "./genPasswordView.js";
import { logTimeout } from "../helper.js";

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
    genPasswordView._errorMessage.innerHTML = state.responses.pwMaxLengthMSG;
    this._returnElement.innerHTML = state.log.fail;

    //TO_DO reset log needs some love
  }

  resetLog() {
    this._returnElement.innerHTML = "";
  }

  clearLog() {
    logTimeout(this._returnElement);
  }
}

export default new LogResponses();
