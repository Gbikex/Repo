class GetInformationView {
  _infoEL = document.querySelector(".app_info_p");

  test() {
    console.log("clicked");
  }

  addHandlerInfo(handler) {
    this._infoEL.addEventListener("click", function (e) {
      e.preventDefault();

      handler();
    });
  }
}

export default new GetInformationView();
