class PickUser {
  _rock = document.querySelector(".pick-rock");
  _paper = document.querySelector(".pick-paper");
  _scissor = document.querySelector(".pick-scissor");

  handlerUserPick(handler) {
    this._rock.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  test() {
    console.log("Test-Pick-User");
  }

  printVariables() {
    console.log(this._rock.value, this._paper.value, this._scissor.value);
  }
}

export default new PickUser();
