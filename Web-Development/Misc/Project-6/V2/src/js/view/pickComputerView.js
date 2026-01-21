import { genRandomNumber } from "../helper";
import { GEN_NUMBER_INDEX, MOVES } from "../config";

class PickComputer {
  /**
   * Randomly generates a computer move using a helper function witch generates a random number between 1 and 3.
   * @returns -> Computer move
   */
  computerPick() {
    const index = genRandomNumber(GEN_NUMBER_INDEX);

    switch (index) {
      case 1:
        return MOVES[0];
      case 2:
        return MOVES[1];
      case 3:
        return MOVES[2];
      default:
        return "Invalid move, please try again!";
    }
  }
}

export default new PickComputer();
