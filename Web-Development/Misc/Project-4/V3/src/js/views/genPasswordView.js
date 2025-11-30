"use strict";
import { CHARACTERS, NUMBERS, SYMBOLS, MINLENGTH } from "../config";
import { generateRandomIndex } from "../helper.js";

/**
 * Class that holds all the functions that are necessary to generate a new password upon the selected user options
 */
class GeneratePassword {
  #characters = CHARACTERS;
  #numbers = NUMBERS;
  #symbols = SYMBOLS;

  _btnElement = document.querySelector(".gen_pw_btn");
  _returnInput = document.querySelector(".return_pw");
  _inputElement = document.querySelector(".input_pw");

  newPassword = "";

  /**
   * Handles the call action
   * @param {Function} Function is expected to be called
   */
  addHandlerPwGen(handler) {
    this._btnElement.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  /**
   * Wraps and renders the newly generated password
   */
  renderPassword() {
    console.log(typeof this._inputElement.value);
    this._returnInput.innerHTML = "";

    if (this._inputElement.value < MINLENGTH) return;

    this.generateNewPassword(this._inputElement.value);
    this._returnInput.innerHTML = this.newPassword;
    this.newPassword = "";
  }

  /**
   *  Function returns the newly generated password according the user inputs
   * @param {number} pLength length of the new generated password
   */
  generateNewPassword(pLength) {
    console.log(pLength === undefined || !pLength ? 10 : pLength);
    console.log(this.#characters, this.#characters.length);

    const pwLength = pLength === undefined || !pLength ? 10 : pLength;

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

    // Clear
    //this.clear();
    console.log("--- IN GENERATE --");
    console.log(this.newPassword);
    return this.newPassword;
  }

  /**
   * Returns the newly generated chunk for the build of the password
   * @param {Number} pLength Length of the element
   * @param {Array} pElement The chunk that has to be processed
   * @param {String} pType In the current logic used for only Symbols
   */
  generateChunk(pLength, pElement, pType) {
    // Symbol only
    if (pType === "S") this.generateChunkLoop(pLength, pElement);

    // All other
    if (pType === "C" || pType === "N")
      this.generateChunkLoop(pLength, pElement);
    return this.newPassword;
  }
  /**
   * Simple loop function for the chunks to avoid code repetition
   * @param {Number} pLength Length of the element
   * @param {Array} pElement The chunk that has to be processed
   * @returns Generated password chunk
   */
  generateChunkLoop(pLength, pElement) {
    for (let i = 0; i < pLength - 1; i++)
      this.newPassword += pElement[generateRandomIndex(pElement)];
    return this.newPassword;
  }

  /**
   * Creates an array from the random generated chunk, checks for array index number if it cannot be divided by two the character is capitalized.
   * @param {String} pChunk chunk of the generated characters
   */
  generateRandomCapitals(pChunk) {
    this.newPassword = [...pChunk]
      .map((w, i) => (i % 2 === 0 ? w.toUpperCase() : w))
      .join("");

    return this.newPassword;
  }

  /**
   * Returns a the number of the distribution of all characters. General logic is if the number cannot be divide by 3 then the logic is 30% Character 30% Numbers 40% Symbols is the distribution of the chunks
   * @param {Number} pLength user input of the length of the generated password
   */
  generateCharacterDistribution(pLength) {
    console.log(
      "SHOW",
      pLength % 3 === 0 ? pLength / 3 : Math.ceil(pLength / 3)
    );
    return pLength % 3 === 0 ? pLength / 3 : Math.ceil(pLength / 3);
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
