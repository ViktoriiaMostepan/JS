// *****Task 1*****

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

// *****Task 2*****

// const inputValue = Number(prompt("Введите число от 1 до 10"));
// const romeChars = {
//   X: 10,
//   IX: 9,
//   VIII: 8,
//   VII: 7,
//   VI: 6,
//   V: 5,
//   IV: 4,
//   III: 3,
//   II: 2,
//   I: 1
// };
// const convertToRoman = (input, rome) => {
//   for (let key in rome) {
//     if (rome[key] === input) {
//       return key;
//     }
//   }
// };
// console.log(convertToRoman(inputValue, romeChars));

// const convertToRoman = num => {
//   const lookup = { X: 10, IX: 9, V: 5, IV: 4, I: 1 };
//   let roman = "";
//   for (const i in lookup) {
//     console.log("yes");
//     while (num >= lookup[i]) {
//       roman += i;
//       num -= lookup[i];
//     }
//     if (num === 0) break;
//   }
//   return roman;
// };
// // console.log(lookup.X);
// console.log(convertToRoman(35));

// *****Task 3****

// const word = "joavoaScoorooioopt";
// (function symbolsCounter(word) {
//   word = word.toLowerCase();
//   console.log(Number(word.split("o").length - 1));
// })(word);

// function with cycle
// function symbolDelater(word) {
//   word = word.toLowerCase();
//   let splitWord = word.split("");

//   let wordArr = [];
//   for (let i = 0; i <= word.length - 1; i++) {
//     if (splitWord[i] !== "o") {
//       wordArr.push(splitWord[i]);
//     } else {
//       continue;
//     }
//   }
//   return wordArr.join("");
// }

// function with filter
// function symbolDelaterFilter(word) {
//   word = word.toLowerCase();
//   let splitWord = word.split("");

//   const newArr = splitWord.filter(symbol => symbol !== "o");

//   return newArr.join("");
// }

// function with reduce
// function symbolDelaterReduce(word) {
//   word = word.toLowerCase();
//   let splitWord = word.split("");

//   let newWord = splitWord.reduce((acc, symbol) => {
//     if (symbol !== "o") {
//       acc += symbol;
//     }
//     return acc;
//   }, "");

//   return newWord;
// }

// console.log(symbolDelater(word));
// console.log(symbolDelaterFilter(word));
// console.log(symbolDelaterReduce(word));

// *****Task 4*****

const authors = [
  {
    id: 1,
    name: "Айзек",
    surname: "Азимов"
  },
  {
    id: 2,
    name: "Рэй",
    surname: "Брэдбери"
  },
  {
    id: 3,
    name: "Роберт",
    surname: "Хайнлайн"
  },
  {
    id: 4,
    name: "Филип",
    surname: "Дик"
  },
  {
    id: 5,
    name: "Дэн",
    surname: "Симмонс"
  }
];

const word = "симмонс";
(function search(authors, word) {
  const outputObj = authors.filter(
    item =>
      item.name.toLowerCase() === word || item.surname.toLowerCase() === word
  );
  outputObj.length > 0 ? console.log(outputObj) : console.log("совпадений нет");
})(authors, word);
