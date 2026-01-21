import { MOVES } from "../config";

class PickUser {
  _rock = document.querySelector(".pick-rock");
  _paper = document.querySelector(".pick-paper");
  _scissor = document.querySelector(".pick-scissor");

  _container = document.querySelector(".container");

  /**
   * Via delegation the method checks on the clicked button and the handler returns the value which later has to be stored to be compared against generated computer move.
   * @param {*} handler
   */
  userPick(handler) {
    this._container.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn");
      //If not a button return
      if (!btn) return;

      //Determines which button was clicked
      if (btn.classList.contains("pick-rock")) {
        handler(MOVES[0]);
      }

      if (btn.classList.contains("pick-paper")) {
        handler(MOVES[1]);
      }

      if (btn.classList.contains("pick-scissor")) {
        handler(MOVES[2]);
      }
    });
  }
}

export default new PickUser();
