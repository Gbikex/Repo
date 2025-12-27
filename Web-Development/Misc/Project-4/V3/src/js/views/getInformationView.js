class GetInformationView {
  _infoEL = document.querySelector(".btn_info");
  _infoDiv = document.querySelector(".app_info_modal");
  _infoClose = document.querySelector(".app_info_close");

  /**
   * Open information dialog window, when the ? button clicked css property changed via adjusting a variable.
   * @param {Function} handler
   */
  addHandlerInfoOpen(handler) {
    console.log(this._infoDiv);
    this._infoEL.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  /**
   * Closes the dialog window via adding back the block property to the SASS variable
   * @param {Function} handler
   */
  addHandlerInfoClose(handler) {
    this._infoClose.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new GetInformationView();
