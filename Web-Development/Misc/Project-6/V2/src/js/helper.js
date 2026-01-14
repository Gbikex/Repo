/**
 * Function returns a randomly generated number according the input value. In the RPS game the base value is 3
 *
 * @param {Number} pRandomNumber
 * @returns -> Random number according the input param
 */
export const genRandomNumber = function (pRandomNumber) {
  const randomNumber = Math.ceil(Math.random() * pRandomNumber);
  return randomNumber;
};
