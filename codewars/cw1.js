// 1) Two to One

// const a = "xyaabbbccccdefww";
// const b = "xxxxyyyyabklmopq";

// // 1) Вариант

// function longest(s1, s2) {
//   const allString = s1 + s2;
//   const str = allString
//     .split("")
//     .filter((str, ind, arr) => arr.indexOf(str) === ind)
//     .sort()
//     .join("");

//   return str;
// }

// //   2) Вариант

// const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

// console.log(longest(a, b));

// ***************************************************************

// 2) Keep Hydrated!

// 1) Вариант(мой):

// function litres(time) {
//     if(time >= 2) {
//         return Math.floor(time / 2);
//     }
//     return 0;
//   }

// 2) Вариант:

// function litres(time) {
//     return Math.floor(time * 0.5);
//   }

// 3) Вариант:

// function litres(time) {
//     return Math.floor(time/2);
//   }

// 4) Вариант
// const litres = t => ~~(t / 2);
// ~~ - аналог Math.floor (округление в меньшую сторону)
//   console.log(litres(11.8))

// ************************************************

// 3) Square Every Digit

// 1) Вариант(свой):

// function squareDigits(num) {
//   num = String(num);
//   const result = [...num].map((number) => number * number).join("");
//   return Number(result); // +result - оператор + преобразовует string в number;
// }

// 2) Вариант:

// function squareDigits(num){
//     return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));

//   }

// console.log(squareDigits("3212"));

// *************************************************************************

// 4) Convert number to reversed array of digits

// 1) Вариант(свой):

// function digitize(n) {
//   const str = String(n);

//   return [...str].reverse().map((num) => +num);
// // или return [...String(n)].map(Number).reverse()
// };

// 2) Вариант

// function digitize(n) {
//   return String(n).split("").map(Number).reverse();
// Можно вместо String(n) использовать (n + '') или n.toString()
// }

// console.log(digitize(35231));

// 5) Beginner Series #3 Sum of Numbers

// 1) Вариант(свой):

// function GetSum(a, b) {
//   let sum = 0;
//   if (a < b) {
//     for (let i = a; i <= b; i += 1) {
//       sum += i;
//     }
//   } else if (a > b) {
//     for (let i = a; i >= b; i -= 1) {
//         sum += i;
//       }
//   } else if (a = b) {
//       return a;
//   }
//   return sum;
// }

// 2) Вариант:

// const GetSum = (a, b) => {
//     let min = Math.min(a, b),
//         max = Math.max(a, b);
//     return (max - min + 1) * (min + max) / 2;
//   }

// 3) Вариант:

// function GetSum(a,b)
// {
//   return (Math.abs(a - b) + 1) * ( a+b ) / 2;
// }

// или

// function GetSum(a, b) {
//     return (a + b) * (Math.abs(a - b) + 1) / 2;
//   }

// или стрелочная:

// const GetSum = (a, b) => (a + b) * (Math.abs(a - b) + 1) / 2;

// 4) Вариант:

// function GetSum(a, b) {
//   return a > b ? GetSum(b, a) : ((b - a + 1) * (b + a)) / 2;
// }

// console.log(GetSum(408, 408)); // 75180

// ***********************************************************************

// 5) Replace With Alphabet Position

// Мой вариант
// const alphabet = [
//   'a',
//   'b',
//   'c',
//   'd',
//   'e',
//   'f',
//   'g',
//   'h',
//   'i',
//   'j',
//   'k',
//   'l',
//   'm',
//   'n',
//   'o',
//   'p',
//   'q',
//   'r',
//   's',
//   't',
//   'u',
//   'v',
//   'w',
//   'x',
//   'y',
//   'z',
// ];

// function alphabetPosition(text) {
//   let arr = [];
//   const lowerText = text.toLowerCase();
//   for (let i = 0; i < lowerText.length; i += 1) {
//     if (alphabet.includes(lowerText[i])) {
//       const ind = alphabet.indexOf(lowerText[i]);
//       arr.push(ind + 1);
//     }
//   }

//   return arr.join(' ');
// }

// 2) Вариант: Регулярные выражения и Юникод

// function alphabetPosition(text) {
//     return text.toLowerCase().match(/[a-z]/g).map(letter => letter.charCodeAt() - 96).join(" ")
// }

// 3) Вариант

// function alphabetPosition(text) {
//   return text
//     .toLowerCase()
//     .split('')
//     .map(a => a.charCodeAt(0) - 96)
//     .filter(a => a > 0 && a < 27)
//     .join(' ');
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// *************************************************************************

// 6) Break camelCase

// Мой вариант;

// function solution(string) {
//     const newString = string.split("");
//     let ind;
//     for (let i = 0; i < newString.length; i += 1) {

//         if(newString[i] === newString[i].toUpperCase()) {
//             ind = newString.indexOf(newString[i])
//             console.log(i)
//             newString[ind] = ` ${newString[i]}`
//         }
//     }
//     return newString.join('')
// }

// console.log(solution("badPlacePerson"))

// Вариант 2)

// function solution(string) {
//   return string.replace(/([A-Z])/g, ' $1');
// }

// ********************************************************************

// 7) Find the middle element

// мой вариант

// const gimme = function (arr) {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);
//   let index;
//   arr.map((el, ind) => {
//     if (min < el && max > el) {
//       index = ind;
//     }
//   });

//   return index;
// };

// 2) Вариант

// function gimme(a) {
//   return a.indexOf(
//     a.concat().sort(function (a, b) {
//       return a - b;
//     })[1],
//   );
// }

// console.log(gimme([2, 3, 1]));

// 8) Tribonacci Sequence

// 1) My option

// function tribonacci(signature, n) {
//   const newArray = signature.slice();

//   if (n === 0) {
//     return [];
//   }

//   if(n === 1) {
//     return [newArray[0]]
//   }

//   if (n === 2) {
//     return [newArray[0], newArray[1]]
//   }

//   for (let i = newArray.length; i < n; i += 1) {
//     const number = newArray[i - 3] + newArray[i - 2] + newArray[i - 1];
//     newArray.push(number);
//   }
//   return newArray;
// }

// 2) Other

// function tribonacci(signature,n){
//     for (var i = 0; i < n-3; i++) { // iterate n times
//       signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
//     }
//     return signature.slice(0, n); //return trib - length of n
//   }

// console.log(tribonacci([1, 1, 1], 1));

// 9) Mexican Wave

// 1) My option
// function wave(str) {
//   const splitStr = str.split('');
//   const arr = [];

//   splitStr.map((el, ind) => {
//     const copyStr = splitStr.slice();
//     if (splitStr[ind] !== ' ') {
//       copyStr.splice(ind, 1, el.toUpperCase());
//       arr.push(copyStr.join(''));
//     }
//   });

//   return arr;
// }

// 2) Other

// function wave(str) {
//   let result = [];

//   str.split('').forEach((char, index) => {
//     // Метод test() выполняет поиск сопоставления регулярного выражения указанной строке.
//     if (/[a-z]/.test(char)) {
//       result.push(
//         str.slice(0, index) + char.toUpperCase() + str.slice(index + 1),
//       );
//     }
//   });

//   return result;
// }

// const wave = str =>
//   [...str]
//     .map((s, i) => str.slice(0, i) + s.toUpperCase() + str.slice(i + 1))
//     .filter(x => x != str);

// console.log(wave('two words'));

// 10) Number of People in the Bus

// 1) My option:

// var number = function (busStops) {
//   let leftPassengers = 0;
//   busStops.map(el => {
//     const [entry, exit] = el;
//     leftPassengers += entry;
//     leftPassengers -= exit;
//   });
//   return leftPassengers;
// };

// 2) Other:

// const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// console.log(
//   number([
//     [10, 0],
//     [3, 5],
//     [5, 8],
//   ]),
// );
// **********************************************************************************

// 11)

// const s1 = [
//   'hoqq',
//   'bbllkw',
//   'oox',
//   'ejjuyyy',
//   'plmiis',
//   'xxxzgpsssa',
//   'xxwwkktt',
//   'znnnnfqknaz',
//   'qqquuhii',
//   'dvvvwz',
// ];

// const s2 = ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww'];

// My option:

// function mxdiflg(a1, a2) {
//   const maxNumbersArr = [];

//   if (a1.length === 0 || a2.length === 0) return -1;

//   for (let i = 0; i < a2.length; i++) {
//     const number = a1.map(el => Math.abs(el.length - a2[i].length));
//     const maxNumber = Math.max(...number);
//     maxNumbersArr.push(maxNumber);
//   }
//   return Math.max(...maxNumbersArr);
// }

// Other

// function mxdiflg(a1, a2) {
//   if (a1.length === 0 || a2.length === 0) return -1;
//   let l1 = a1.map(str => str.length);
//   let l2 = a2.map(str => str.length);
//   return Math.max(
//     Math.max(...l1) - Math.min(...l2),
//     Math.max(...l2) - Math.min(...l1),
//   );
// }

// console.log(mxdiflg(s1, s2));
// *******************************************************************

// 12) Consecutive strings
// My option
// function longestConsec(strarr, k) {
//   let lengthStr = 0;
//   let newStr = '';
//   const n = strarr.length;
//   if (n === 0 || k > n || k <= 0) return newStr;

//   strarr.map((str, ind, arr) => {
//     const string = arr.slice(ind, k + ind).join('');
//     if (string.length > lengthStr) {
//       lengthStr = string.length;
//       newStr = string;
//     }
//   });
//   return newStr;
// }

// Other
// 1)
// function longestConsec(strarr, k) {
//   let longest = '';
//   for (let i = 0; k > 0 && i <= strarr.length - k; i++) {
//     const tempArray = strarr.slice(i, i + k);
//     const tempStr = tempArray.join('');
//     if (tempStr.length > longest.length) {
//       longest = tempStr;
//     }
//   }
//   return longest;
// }

// 2)
// function longestConsec(strarr, k) {
//   if (k <= 0 || k > strarr.length) {
//     return '';
//   }

//   return strarr.reduce((long, item, i) => {
//     const currString = strarr.slice(i, i + k).join('');
//     return currString.length > long.length ? currString : long;
//   }, '');
// }

// console.log(
//   longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2),
// );
