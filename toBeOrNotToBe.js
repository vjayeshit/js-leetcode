/**
 * @param {string} val
 * @returns {Object}
 */

var expect = (val) => {
  return {
    toBe: (x) => {
      if (x === val) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (x) => {
      if (x !== val) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

console.log(expect(2).toBe(2));
console.log(expect(2).toBe(3));
console.log(expect(2).notToBe(3));
console.log(expect(2).notToBe(1));
