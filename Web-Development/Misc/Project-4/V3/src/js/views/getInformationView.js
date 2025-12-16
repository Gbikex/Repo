class GetInformationView {
  _infoEL = document.querySelector(".btn_info");
  _infoDiv = document.querySelector(".app_info_modal");

  test() {
    console.log("clicked");
  }

  addHandlerInfo(handler) {
    console.log(this._infoDiv);
    this._infoEL.addEventListener("click", function (e) {
      e.preventDefault();
      //Change the property of SASS variable
      document.documentElement.style.setProperty("--displayType", "block");
      handler();
    });
  }
}

export default new GetInformationView();
