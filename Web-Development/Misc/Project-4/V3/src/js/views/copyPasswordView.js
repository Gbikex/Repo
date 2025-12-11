class CopyPassword {
  _copyBtn = document.querySelector(".copy_pw_btn");
  _returnInput = document.querySelector(".return_pw");

  /**
   * Handles the click event on the copy pw button
   * @param {*} handler function to be called
   */
  addHandlerPwCopy(handler) {
    this._copyBtn.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  /**
   * Copy the generated password to clipboard
   */
  copyPassword() {
    navigator.clipboard.writeText(this._returnInput.innerHTML);
  }
}

export default new CopyPassword();
