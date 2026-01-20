import { MOVES } from "../config";

class PickUser {
  _rock = document.querySelector(".pick-rock");
  _paper = document.querySelector(".pick-paper");
  _scissor = document.querySelector(".pick-scissor");

  _container = document.querySelector(".container");

  userMove = null;

  handlerUserPick() {
    this._container.addEventListener("click", function (e) {
      let userPick = "";

      const btn = e.target.closest(".btn");

      // Click was outside a button
      if (!btn) return;

      // Determine which button was clicked
      if (btn.classList.contains("pick-rock")) {
        //console.log(MOVES[0]);
        handler((this.userMove = MOVES[0]));
      }

      if (btn.classList.contains("pick-paper")) {
        //console.log(MOVES[1]);
        handler(MOVES[1]);
      }

      if (btn.classList.contains("pick-scissor")) {
        //console.log(MOVES[2]);
        handler(MOVES[2]);
      }
      //console.log(userPick);
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
