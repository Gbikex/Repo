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
  errorLog(paramErrorType) {
    //const { paramErrorType } = state.responses;
    console.log("heheheehhee");
    console.log(paramErrorType);
    genPasswordView._errorMessage.innerHTML = paramErrorType;
    this._returnElement.innerHTML = state.log.fail;
    this.clearLog();
  }

  resetLog() {
    this._returnElement.innerHTML = "";
  }

  clearLog() {
    logTimeout(this._returnElement);
  }
}

export default new LogResponses();
