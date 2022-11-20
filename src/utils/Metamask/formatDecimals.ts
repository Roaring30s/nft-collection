/**
 * Formats token decimal input to readable numbers
 * @param {string} decimals - number of token decimal places
 * @param {number | undefined} input - number to convert
 * @returns {string} - converted number fixed to two decimal places
 */
 export const formatDecimals = (decimals: number, input: number | undefined) => {
    //truthy
    if(input) {
      const adjustedNum = (input/10**decimals).toFixed(2);
      return String(adjustedNum);
    } else {
      return '...';
    }

};