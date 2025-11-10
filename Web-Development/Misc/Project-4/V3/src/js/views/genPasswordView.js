import { CHARACTERS, NUMBERS, SYMBOLS } from "../config";

/**
 * Class that holds all the functions that are necessary to generate a new password upon the selected user options
 */
class GeneratePassword {
  #characters = CHARACTERS;
  #numbers = NUMBERS;
  #symbols = SYMBOLS;

  newPassword = "";

  gpTest() {
    console.log("genPasswordView");
  }
  /**
   *  Function returns the newly generated password according the user inputs
   * @param {number} pLength length of the new generated password
   */
  generateNewPassword(pLength) {
    console.log(pLength);
    console.log(this.#characters, this.#characters.length);

    /*
    const randomIndex = Math.floor(Math.random() * this.characters.length) + 1;
    console.log(randomIndex);
    */

    for (let i = 0; i <= pLength - 1; i++)
      this.newPassword +=
        this.#characters[this.generateRandomIndex(this.#characters)];
    console.log(this.newPassword);
  }

  /**
   * Returns random index from the three arrays (character,numbers,symbols) to create the random new set of characters for the password
   * @param {*} pInput can be character,number or symbol
   */
  generateRandomIndex(pInput) {
    return Math.floor(Math.random() * pInput.length) + 1;
  }

  generateChunk() {}
}

export default new GeneratePassword();
