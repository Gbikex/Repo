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

    //Generating chunks for the password
    this.generateChunk(pLength, this.#characters);
    this.generateChunk(pLength, this.#numbers);
    this.generateChunk(pLength, this.#symbols);
  }

  /**
   * Returns random index from the three arrays (character,numbers,symbols) to create the random new set of characters for the password
   * @param {Private field} pInput can be character,number or symbol private elements of the class
   */
  generateRandomIndex(pInput) {
    console.log(Math.floor(Math.random() * pInput.length));
    return Math.floor(Math.random() * pInput.length);
  }

  /**
   * Returns the newly generated chunk for the build of the password
   * @param {Number} pLength Length of the element
   * @param {Private field} pElement The chunk that has to be processed
   */
  generateChunk(pLength, pElement) {
    for (let i = 0; i <= pLength - 1; i++)
      console.log(
        (this.newPassword += pElement[this.generateRandomIndex(pElement)])
      );
    this.newPassword += pElement[this.generateRandomIndex(pElement)];
    return this.newPassword;
  }

  /**
   * Returns a the number of the distribution of all characters. General logic if the number cannot be divide by 3 then the logic is 30% Character 30% Numbers 40% Symbols is the distribution of the chunks
   * @param {Number} pLength user input of the length of the generated password
   */
  generateCharacterDistribution(pLength) {
    console.log(pLength % 3 === 0 ? pLength / 3 : Math.ceil(pLength / 3 - 1));
  }

  printVariables() {
    console.log("-- Variable print --");
    console.log(this.newPassword);
    console.log("-- Variable print --");
  }
}

export default new GeneratePassword();
