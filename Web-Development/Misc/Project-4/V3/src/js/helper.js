/**
 * Returns random index from the three arrays (character,numbers,symbols) to create the random new set of characters for the password
 * @param {Array} pInput can be character,number or symbol private elements of the class
 */
export const generateRandomIndex = function (pInput) {
  console.log(Math.floor(Math.random() * pInput.length));
  return Math.floor(Math.random() * pInput.length);
};
