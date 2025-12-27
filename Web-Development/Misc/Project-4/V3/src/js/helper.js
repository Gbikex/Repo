//Timeout ID to store for later manipulation
let GlobalTimeOutID = "";

/**
 * Standard function to create random indexes for further processes
 * @param {Array} pInput -> Length of the array is used to generate the random index
 * @returns -> Generated random index
 */
export const generateRandomIndex = function (pInput) {
  return Math.floor(Math.random() * pInput.length);
};

/**
 * Delays events after a certain seconds on the selected HTML element
 * @param {String} pElement -> Selected element to manipulate
 * @param {Number} pDelay -> Seconds for the delay
 */
export const resetElement = function (pElement, pDelay) {
  resetTimeoutID();

  const timeOutID = setTimeout(() => {
    pElement.innerHTML = "";
  }, pDelay);

  GlobalTimeOutID = timeOutID;
};
/**
 * Clears previously started timeouts
 */
const resetTimeoutID = function () {
  clearTimeout(GlobalTimeOutID);
};

/**
 * Changes the variables in the SASS files used for opening and closing the modal dialog by adding or removing display -> block,none
 * @param {String} pElement -> Effected element
 * @param {String} pProperty -> CSS Property to change style
 */
export const changeElement = function (pVariable, pProperty) {
  document.documentElement.style.setProperty(pVariable, pProperty);
};
