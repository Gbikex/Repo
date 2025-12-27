// prettier-ignore
import { CHARACTERS, NUMBERS, SYMBOLS, GENERAL_PW_LENGTH,BASE_SYMBOL_LENGTH } from "../config";
import { generateRandomIndex } from "../helper.js";
import { state } from "../model.js";
import logView from "./logView.js";

class GeneratePassword {
  #characters = CHARACTERS;
  #numbers = NUMBERS;
  #symbols = SYMBOLS;

  _btnElement = document.querySelector(".gen_pw_btn");
  _errorMessage = document.querySelector(".return_error_msg");
  _btnReset = document.querySelector(".res_pw_btn");
  _returnElement = document.querySelector(".return_msg__log");

  inputElement = document.querySelector(".input_pw");
  newPassword = state.password;
  returnInput = document.querySelector(".return_pw");
  returnMessage = document.querySelector(".return_msg");

  /**
   * Handles the call action
   * @param {Function} handler -> Handler to generate password event
   */
  addHandlerPwGen(handler) {
    this._btnElement.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  /**
   * Handles the reset action
   * @param {Function} handler -> Handler to reset PW
   */
  addHandlerPwReset(handler) {
    this._btnReset.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  /**
   * Clears the DOM elements before generating new password
   */
  clear() {
    this.returnInput.innerHTML = "";
    this.newPassword = "";
    this._errorMessage.innerHTML = "";
    this.returnMessage.innerHTML = "";
    this._returnElement.innerHTML = "";
  }

  /**
   * Wraps and renders the newly generated password
   */
  renderPassword() {
    // 1) Clears DOM elements for the new run
    this.clear();

    // 2) Starts the password generation
    this.generateNewPassword(
      // prettier-ignore
      !this.inputElement.value  
        ? GENERAL_PW_LENGTH 
        : this.inputElement.value
    );

    // 3) Log to the UI
    logView.clearLog();
  }

  /**
   * Renders the generated password to the UI
   */
  renderSuccessfullyGenPW() {
    this.returnInput.innerHTML = this.newPassword;
    this.returnMessage.innerHTML = state.responses.pwGeneration;
  }
  /**
   * Clears UI after failed pw generation
   */
  clearUiFailedGen() {
    this.returnInput.innerHTML = "";
    this.returnMessage.innerHTML = "";
  }

  /**
   *  Function returns the newly generated password according the user inputs
   * @param {number} pLength -> length of the new generated password
   * @return -> The generated password
   */
  generateNewPassword(pLength) {
    console.log("GENPW");
    console.log(pLength);
    console.log(
      pLength === undefined || !pLength ? GENERAL_PW_LENGTH : pLength
    );
    console.log(this.#characters, this.#characters.length);

    const pwLength =
      pLength === undefined || !pLength ? GENERAL_PW_LENGTH : pLength;

    // Characters plus capitalization
    this.generateRandomCapitals(
      this.generateChunk(
        this.generateCharacterDistribution(pwLength),
        this.#characters,
        "C"
      )
    );
    // Numbers
    this.generateChunk(
      this.generateCharacterDistribution(pwLength),
      this.#numbers,
      "N"
    );
    // Symbols
    this.generateChunk(
      this.generateCharacterDistribution(pwLength),
      this.#symbols,
      "S"
    );
    // Shuffle
    this.shuffleChunks();

    return this.newPassword;
  }

  /**
   * Wraps and returns the chunk creations based on the main logic
   * @param {Number} pLength -> Length of the element
   * @param {Array} pElement -> The chunk that has to be processed
   * @param {String} pType -> In the current logic used for only Symbols
   * @returns -> Chunks of the password
   */
  generateChunk(pLength, pElement, pType) {
    // Symbol only
    if (pType === "S")
      this.generateChunkLoop(
        !this.inputElement.value
          ? BASE_SYMBOL_LENGTH
          : this.inputElement.value - 2 * pLength,
        pElement
      );

    // All other (Character, Numbers)
    if (pType === "C" || pType === "N")
      this.generateChunkLoop(pLength, pElement);
    return this.newPassword;
  }

  /**
   * Simple loop function for the chunks to avoid code repetition
   * @param {Number} pLength -> Length of the element
   * @param {Array} pElement -> The chunk that has to be processed
   * @returns -> Generated password chunk
   */
  generateChunkLoop(pLength, pElement) {
    for (let i = 0; i < pLength; i++)
      this.newPassword += pElement[generateRandomIndex(pElement)];
    return this.newPassword;
  }

  /**
   * Creates an array from the random generated chunk, checks for array index number if it cannot be divided by two the character is capitalized.
   * @param {String} pChunk -> Chunk of the generated characters
   * @returns -> Randomly capitalized characters in the password
   */
  generateRandomCapitals(pChunk) {
    this.newPassword = [...pChunk]
      .map((w, i) => (i % 2 === 0 ? w.toUpperCase() : w))
      .join("");

    return this.newPassword;
  }

  /**
   * Returns a the number of the distribution of all characters. General logic is if the number cannot be divide by 3 then the logic is 30% Character 30% Numbers, the remaining is put on Symbols -> this is handled in generateChunk method
   * @param {Number} pLength -> User input of the length of the generated password
   * @returns -> Length of the chunk that will be created
   */
  generateCharacterDistribution(pLength) {
    console.log(
      "SHOW",
      pLength % 3 === 0 ? pLength / 3 : Math.floor(pLength / 3, pLength)
    );
    return pLength % 3 === 0 ? pLength / 3 : Math.floor(pLength / 3);
  }
  /**
   * Shuffles the chunks to generate the random chars for the password
   * @returns -> Newly generated and shuffled password
   */
  shuffleChunks() {
    const carsToShuffle = this.newPassword.split("");
    console.log("test", this.newPassword.split(""));
    return (this.newPassword = carsToShuffle
      .sort(() => 0.5 - Math.random())
      .join(""));
  }
}

export default new GeneratePassword();
