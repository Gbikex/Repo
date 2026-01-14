import { genRandomNumber } from "../helper";
import { GEN_NUMBER_INDEX } from "../config";

class PickComputer {
  testPrint() {
    console.log("Hello from the Pick Computer view");
    console.log(genRandomNumber(GEN_NUMBER_INDEX));
  }
}

export default new PickComputer();
