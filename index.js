// Variant 1
// console.log(Math.pow(2, 6));

// Variant 2
// do {
//   let i = prompt("Enter first value", "");
//   let k = prompt("Enter second value", "");
//   alert(`Right:${i ** k}`);
// } while (i < Infinity);

// Variant3
// function pow(base, exponent) {
//   let pow = 1;
//   for (let i = 1; i <= exponent; i++) {
//     pow = pow * base;
//   }
//   return pow;
// }
// console.log(pow(20, 4));

const inputValue = Number(prompt("Введите число от 1 до 10"));
const romeChars = {
  X: 10,
  IX: 9,
  VIII: 8,
  VII: 7,
  VI: 6,
  V: 5,
  IV: 4,
  III: 3,
  II: 2,
  I: 1
};
const convertToRoman = (input, rome) => {
  for (let key in rome) {
    if (rome[key] === input) {
      return key;
    }
  }
};
console.log(convertToRoman(inputValue, romeChars));

// const numbersArr = [
//   "I",
//   "II",
//   "III",
//   "IV",
//   "V",
//   "VI",
//   "VII",
//   "VIII",
//   "IX",
//   "X"
// ];

// console.log(numbersArr[inputValue - 1]);
