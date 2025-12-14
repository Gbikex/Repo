let GlobalTimeOutID = "";
/**
 * Standard function to create random indexes for further processes
 * @param {Array} pInput
 * @returns Generated random index
 */
export const generateRandomIndex = function (pInput) {
  return Math.floor(Math.random() * pInput.length);
};

/**
 * Delays events after a certain seconds on the selected HTML element
 * @param {String} pElement - Selected element to manipulate
 * @param {Number} pDelay - Seconds for the delay
 */
export const resetElement = function (pElement, pDelay) {
  resetTimeoutID();

  const timeOutID = setTimeout(() => {
    pElement.innerHTML = "";
  }, pDelay);

  console.log("resEl log");
  GlobalTimeOutID = timeOutID;
  console.log(GlobalTimeOutID);
};
/**
 * Clears previously started timeouts
 */
const resetTimeoutID = function () {
  clearTimeout(GlobalTimeOutID);
};
