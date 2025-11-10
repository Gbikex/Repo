import { CHARACTERS, NUMBERS, SYMBOLS } from "../config";

/**
 * Generates password upon the user selected attributes
 */
class GeneratePassword {
  gpTest() {
    console.log("Working", CHARACTERS[0], NUMBERS[1], SYMBOLS[2]);
  }
}

export default new GeneratePassword();
