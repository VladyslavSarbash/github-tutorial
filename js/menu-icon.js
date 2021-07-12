// Самое длинное слово
// function findLongestWord(string) {
//     let strings = string.split(" ")
//     let maxNumber = "";
//     console.log(strings)
//     for (let i = 0; i < strings.length; i += 1) {
//         console.log(strings[i])
//         if (strings[i].length > maxNumber.length) {
//             maxNumber = strings[i];
//             console.log("number:", maxNumber)
//         }
//     }
//     return maxNumber
//   }
//   console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

// Самое большое число

// function filterArray(numbers, value) {
//      let bigNumber = [];

//     for (let i = 0; i < numbers.length; i += 1) {
//         console.log(numbers[i])
//         if (numbers[i] > value) {
//             bigNumber.push(numbers[i])
//         }
//     }

//     return bigNumber

//  }

// console.log(filterArray([12, 24, 8, 41, 76], 38))

// Oбщие элементы
// function getCommonElements(array1, array2) {

//       const newArray = [];
//     for (let i = 0; i < array1.length; i += 1) {
//         if (array2.includes(array1[i])) {
//             newArray.push(array1[i])
//         }
//     }
//         // for (let i of array1) {
//         //     if(array2.includes(i)){
//         //         newArray.push(i)
//         //     }
//         // }
//     return newArray;
//   }

//   console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))

// TASK 3
// Напишите функцию pow(x,n), которая возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.

// function pow(x,n) {
//     // return x ** n
//     // const result = Math.pow(x, n)
//     // return result
// }

// console.log(pow(2, 5))

// TASK 2
// Напишите решение, которое вычисляет сумму
// квадратных корней для всех чисел у которых квадратный корень будет целым числом.

// const arr = [4, 3, 5, 16, 16, 33, 4, 9]

// const arr = [4, 3, 5, 16, 16, 33, 4, 9]

// function array(numbers) {
//     let newArray = [];
//     for (let number of numbers) {
//         if(Math.sqrt(number) % 1 === 0) {
//             newArray.push(Math.sqrt(number))
//         //    console.log(newArray)

//     }
// }
// return newArray
// }

// console.log(array(arr))

// TASK 3
// напиши функцию которая будет суммировать соседние числа и пушить их в новый массив

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// const arr = [3, 4, 24, 23, 43, 16, 16, 4, 9];

// function getSqrt(array) {
//   const resArr = [];
//   for (let num of array) {
//     if (num % Math.sqrt(num) === 0) {
//       resArr.push(Math.sqrt(num));
//     }
//   }
//   return resArr;
// }

// console.log(getSqrt(arr));

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function arraySum(numbers) {
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 2) {
//     newArray.push(numbers[i] + numbers[i + 1]);

//   }
//   return newArray;
// }
// console.log(arraySum(someArr));

// TASK 5

// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.

// const styles = ["Jaz", "Bluez"];
// styles.push("Rock-n-roll")
// console.log(styles)
// const indexOfFlem = styles.length / 2;
// styles.splice(indexOfFlem, 1, "Classic")
// console.log(styles)
// const firstElem = styles.shift()
// console.log(firstElem)
// styles.unshift("Rep", "Regbi")
// console.log(styles)

// TASK 6

// даны 2 массива
// const nums = [1, 2, 3, 4, 5];
// const strs = ["a", "b", "c", "d", "e"];

// Напишите функцию которая будет принимать 2 массива в качестве аргументов
// и вернет новый массив ['1a', '2b', '3c', '4d', '5e']

// function arr(x, y) {
//     const newArray = [];
//     for (let i = 0; i < x.length; i += 1) {
//         newArray.push(x[i] + y[i])
//     }
//     return newArray
// }

// console.log(arr(nums, strs))

// TASK 6

// даны 2 массива
// const nums = [1, "b", 3, "d", 5];
// const strs = ["a", 2, "c", 4, "e"];

// Напишите функцию которая будет принимать 2 массива в качестве аргументов
// и вернет новый массив ['1a', '2b', '3c', '4d', '5e']

// function arr(x, y) {
//     const newArray = [];
//     for (let i = 0; i < x.length; i += 1) {
//         typeof x[i] === "number" ? newArray.push(x[i] + y[i]) :
//         newArray.push(y[i] + x[i]);
//     }
//     return newArray
// }

// console.log(arr(nums, strs))

// function checkForSpam(message) {
//     return message.toLowerCase().includes("sale") || message.toLowerCase().includes("spam");
//   }

// console.log(checkForSpam('Latest technology news') )//false.
// console.log(checkForSpam('JavaScript weekly newsletter'))// false.
// console.log(checkForSpam('Get best sale offers now!') )// true.
// console.log(checkForSpam('Amazing SalE, only tonight!')) // true.
// console.log(checkForSpam('Trust me, this is not a spam message')) // true.
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')) // true.
// console.log(checkForSpam('[SPAM] How to earn fast money?')) // true.

// TASK 9
// привести массив к одному уровню

// const tryThis = [
//     [23, 11, ["hello", "world", "Vasya"]],
//     "some str",
//     [777, "word", ["Привет", ["как сюда добраться"]]],
//   ];

//   console.log(tryThis.join(" ").split(","))
//   console.log(tryThis.flat(Infinity))

// const key = 'person';
// const getKey = function () {
//   return 'age';
// };

// // Для чего нужны квадратные скобки в ключе вызова функции.

// // Computed properties
// const object = {
//   [key]: 'Mango',
//   [getKey()]: 2,
// };

// console.log(object); // {person: 'Mango', age: 2}

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   console.log(apartment[key])
// 	values.push(key);
// }

// console.log(values)

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//     for (product of products){
//         console.log(product)
//         if (productName === product.name) {
//             return product.price
//         }
//         return null
//     }
//   // Change code above this line
// }

// console.log(getProductPrice('Radar'))

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   function getAllPropValues(propName) {
//     const array = [];

//     for(let product of products) {
//
//         if(product[propName]) {
//             array.push(product[propName]);
//         }
//     }

//     return array;
//   }

//   console.log(getAllPropValues("name"))

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//       let totalPrice = 0;
//   function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//       for(let product of products){
//       if(productName === product.name){

//         //   console.log(total)
//         totalPrice += product.price * product.quantity;
//       }
//       }

//       return totalPrice;
//     // Пиши код выше этой строки
//   }
//   console.log(calculateTotalPrice("Droid"))

// function makeTask(data) {
//     const completed = false;
//     const category = 'General';
//     const priority = 'Normal';
//     const obj = {
//         completed,
//         category,
//         priority,
//     }
//     const x = {...obj, ...data}
//     return x
//   }

//   console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }))

// function addOverNum(number, ...args) {
//     let total = 0;

//     for (const arg of args) {

//         if(arg > number){
//             total += arg;
//         }
//     }

//     return total;
//   }

//   console.log(addOverNum(10, 12, 4, 11, 48, 10, 8))

// function findMatches(numbers, ...args) {
//     const matches = [];
//     // console.log(args[0])
//       for (let arg of args) {
//           for (let number of numbers) {
//               if (arg === number) {
//                 matches.push(number)
//                 break
//               }
//           }
//         }

//     return matches;
//   }

//   console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2))

// const bookShelf = {
//     books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//     updateBook(oldName, newName) {
//       const oldNameIndex = this.books.indexOf(oldName);
//       this.books.splice(oldNameIndex, 1, newName)
//     },
//   };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"))

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//       // Change code below this line
//       console.log(potionName)
//       const oldNameIndex = this.potions.indexOf(potionName);
//       this.potions.splice(oldNameIndex, 1)
//       // Change code above this line
//     }

//   };

//   console.log(atTheOldToad.removePotion("Dragon breath"))
//   console.log(atTheOldToad.potions)

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Potion ${potionName} is already equipped!`;
//     }

//     this.potions.push(potionName);
//   },

//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     for (let potion in this.potions) {
//       // console.log(potion)
//       const {name, price} = this.potions[potion];
//       if (name === potionName) {
//         return this.potions.splice(potion, 1);
//       }
//     }

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }
//     //   console.log(this.potions)
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     for (let potion in this.potions) {
//       // console.log(this.potions)
//       const {name, price} = this.potions[potion];
//       // console.log(name)
//       if (name === oldName) {
//         // console.log(this.potions)
//        return this.potions.splice(potion, 1, {name: newName, price: price});
//         // return newName;
//       }
//     }

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }
//   },
// };

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   removePotion(potionName) {
//     for (let potion of this.potions) {
//       if (potion.name === potionName) {
//         const indexName = this.potions.indexOf(potion);
//         return this.potions.splice(indexName, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (let potion of this.potions) {
//       if (potion.name === oldName) {
//         return (potion.name = newName);
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// // console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// // console.log(atTheOldToad.removePotion("Polymorth"));

// function showThis() {
//   console.log('this in showThis: ', this);
// }

// // Вызываем в глобальном контексте
// showThis();
// // this in showThis: Window

// const user = { name: 'Mango' };

// /*
//  * Записываем ссылку на функцию в свойство объекта
//  * Обратите внимание, что это не вызов - нет ()
//  */
// user.showContext = showThis;
// /*
//  * Вызываем функцию в контексте объекта
//  * this будет указывать на текущий объект, в контексте
//  * которого осуществляется вызов, а не на глобальный объект.
//  */

// user.showContext();
// // this in showThis: {name: "Mango", showContext: ƒ}

// **************************************

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action.call(inventory, itemName);
// };

// invokeInventoryAction('Medkit', inventory.add);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction('Gas mask', inventory.remove);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

// **************************************
// 7 задача. 4 модуль
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
// };

// const messages = [];

// for (let i = 0; i < orders.length; i += 1) {
//   const result = composeMessage.call(orders[i], i + 1);
//   messages.push(result);
// }

// console.log(messages)

// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function(allProdcuts, productName) {
//   // твой код
//   for (let obj of allProdcuts) {
//     if (obj.name === productName) {
//       return obj.price * obj.quantity;
//     }
//   }
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

// Добавить метод getinfo в объект user, который будет возвращать инфу о пользователе в формате
// Name: Peter. Surname: Parker. Age: 22. Position: spider-man.

// const user = {
//     name: 'Peter',
//     surname: 'Parker',
//     age: 22,
//     position: 'spider-man'
// };

// function getInfo(name) {
//   return `Name: ${this.name}, Surname: ${this.surname}, Age: ${this.age}, Position: ${this.position}`
// };

// console.log(getInfo.call(user))

// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//   	const newArray = [];

//   	numbers.forEach( number => {
//      if (number % 2 === 0) {
//        	let plus = number + value;
//         newArray.push(plus);
//       } else {
//         newArray.push(number)
//       }
//     });
//   return newArray;
//     // Пиши код выше этой строки
//   }

//   console.log(changeEven([1, 2, 3, 4, 5], 10))

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
];

// const getTotalBalanceByGender = (users, gender) => users.filter( user => user.gender === gender).reduce( (total, current) => {
//   return total += current.balance}, 0 ) ;;
// console.log(getTotalBalanceByGender(users, 'male'))
