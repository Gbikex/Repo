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

    // Generating chunks for the password
    // Characters
    this.generateChunk(
      this.generateCharacterDistribution(pLength),
      this.#characters
    );

    //Test upper case

    console.log(this.newPassword.toLocaleUpperCase());

    // Numbers
    this.generateChunk(
      this.generateCharacterDistribution(pLength),
      this.#numbers
    );
    // Symbols
    this.generateChunk(
      this.generateCharacterDistribution(pLength),
      this.#symbols
    );
    // Shuffle
    this.shuffleChunks();
  }

  /**
   * Returns random index from the three arrays (character,numbers,symbols) to create the random new set of characters for the password
   * @param {Array} pInput can be character,number or symbol private elements of the class
   */
  generateRandomIndex(pInput) {
    console.log(Math.floor(Math.random() * pInput.length));
    return Math.floor(Math.random() * pInput.length);
  }

  /**
   * Returns the newly generated chunk for the build of the password
   * @param {Number} pLength Length of the element
   * @param {Array} pElement The chunk that has to be processed
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
   * According the selected number of characters the function randomly generates capital letters. Based on the following logic => floor(characters.length / (characters.length / 2))
   * @param {Number} pLength length of the string for the loop
   */
  generateRandomCapitals(pLength) {
    let test = "abcd";
    let test1 = "";
    const perCapitalLetters = Math.ceil(test.length / 2);

    console.log(
      "aa",
      test.split("").map((el) => el)
    );
    console.log("random capital", pLength, test, perCapitalLetters, test.at(1));
    console.log(this.generateRandomIndex("test"));
  }

  /**
   * Returns a the number of the distribution of all characters. General logic if the number cannot be divide by 3 then the logic is 30% Character 30% Numbers 40% Symbols is the distribution of the chunks
   * @param {Number} pLength user input of the length of the generated password
   */
  generateCharacterDistribution(pLength) {
    return pLength % 3 === 0 ? pLength / 3 : Math.ceil(pLength / 3 - 1);
  }
  /**
   *Shuffle the chunks to generate the random chars for the password
   * @returns newly generated and shuffled password
   */
  shuffleChunks() {
    const carsToShuffle = this.newPassword.split("");
    console.log("test", this.newPassword.split(""));
    return (this.newPassword = carsToShuffle
      .sort(() => 0.5 - Math.random())
      .join(""));
  }

  printVariables() {
    console.log("-- Variable print --");
    console.log(this.newPassword);
    console.log("-- Variable print --");
  }
}

export default new GeneratePassword();
