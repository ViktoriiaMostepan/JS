// Variant 1
// console.log(Math.pow(2, 6));

// Variant 2
// do {
//   let i = prompt("Enter first value", "");
//   let k = prompt("Enter second value", "");
//   alert(`Right:${i ** k}`);
// } while (i < Infinity);

// Variant3
function pow(base, exponent) {
  let pow = 1;
  for (let i = 1; i <= exponent; i++) {
    pow = pow * base;
  }
  return pow;
}
console.log(pow(20, 4));
