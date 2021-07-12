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


// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//   	if(!this.pizzas.includes(pizzaName)) {
//     	return onError(pizzaName);
//     }
    
//     return onSuccess(pizzaName);
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! В ассортименте нет пиццы с названием ${error}`;
// }

// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);
