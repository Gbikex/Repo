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
   * Copy the generated password
   */
  copyPassword() {
    navigator.clipboard.writeText(this._returnInput.innerHTML);
    console.log("Copy");
    console.log(this._copyBtn);
    console.log("!!!!!!!!!!!!!!!!!!!");
    console.log(this._returnInput.innerHTML);
  }

  test() {
    console.log("This is a test");
  }
}

export default new CopyPassword();
