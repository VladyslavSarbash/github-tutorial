import users from './users.js';
import usersArr from './users.js';

// Task 1

// Получить массив имен всех пользователей (поле name).
// console.log(getUserNames(usersData))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// const getUserNames = (users) => users.map( user => user.name);

// console.log(getUserNames(usersArr))

// Task 2

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// const getUserEye = (users, eye) => users.filter( user => user.eyeColor === eye )

// console.log(getUserEye(usersArr, 'blue'))

// Task 3

// Получить массив имен пользователей по полу (поле gender)
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// const getUsersWithGender = (users, gender) => users.reduce( (acc, user) => user.gender === gender ? [...acc, user.name] : acc, [] )

// console.log(getUsersWithGender(usersArr, 'male'))

// Task 4

// Получить массив только неактивных пользователей (поле isActive).
// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// const getInactiveUsers = (users) => users.filter(user => !user.isActive)

// console.log(getInactiveUsers(usersArr))

// Task 5

// Получить пользователя (не массив) по email (поле email, он уникальный).
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// const getUserWithEmail = (users, email) => users.find(user => user.email === email);

// console.log(getUserWithEmail(usersArr, 'elmahead@omatom.com'));
// console.log(getUserWithEmail(usersArr, 'shereeanthony@kog.com'));

// Task 6

// Получить массив пользователей в возрасте от min до max

// console.log( getUsersWithAge( users, 20, 30 ) );
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log( getUsersWithAge( users, 30, 40 ) );
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age >= minAge && user.age <= maxAge);

// console.log( getUsersWithAge(usersArr, 20, 30 ) );
// console.log( getUsersWithAge( usersArr, 30, 40 ) )

// Task 7

// Получить общую сумму баланса (поле balance) всех пользователей.
// console.log(calculateTotalBalance(users)); // 20916

// const calculateTotalBalance = (users) => users.reduce( (acc, user) => acc += user.balance, 0 );

// console.log(calculateTotalBalance(usersArr))

// Task 8

// Дополни функцию getTotalBalanceByGender(users, gender, maxAge) так, чтобы она возвращала
// общий баланс пользователей (свойство balance), пол которых
// (свойство gender) совпадает со значением параметра gender и возраст которых меньше, чем maxAge.
// console.log(getTotalBalanceByGender(users, "male", 35));

// const getTotalBalanceByGender = (users, gender, maxAge) => {
//     return users
// .filter(user => user.gender === gender && user.age < maxAge)
// .reduce( (acc, user) => acc + user.balance, 0)};

// console.log(getTotalBalanceByGender(users, "male", 35))

// Task 10

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть
// повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// const getSortedUniqueSkills = (users) => {
//     return users
//     .flatMap( users => users.skills)
//     .filter((user, index, array) => array.indexOf(user) === index)
//     .sort( (a, b) => a.localeCompare(b)); // или просто sort() или (a,b) => ( a > b ? -1 : 1)
// }

// console.log(getSortedUniqueSkills(usersArr));

// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
// Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов,
// в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.

// То есть:
// для arr = [ 1, 2, 3, 4, 5 ]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// Функция не должна модифицировать входной массив.
// В решении используйте метод arr.reduce.

// const arr = [1, 2, 3, 4, 5];

// const getSums = (arr) => {
//     let result = 0;
//   return arr.reduce((acc, el) => {
//     result += el;
//     acc.push(result)
//     return acc;
//   }, []);
// };

// const getSums = (arr) =>
//   arr.reduce((acc, num, i) => (i > 0 ? [...acc, acc[i - 1] + num] : [num]), []);

// console.log(getSums(arr));

// Task 12

// Возврат: строка, отформатированная как список имен,
// разделенных запятыми, за исключением последних двух имен,
// которые должны быть разделены амперсандом.

// [{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}] Вернет 'Bart, Lisa, Maggie, Homer & Marge',

// [{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}] вернет  'Bart, Lisa & Maggie'

// [{name: 'Bart'},{name: 'Lisa'}] вернет 'Bart & Lisa',

// [{name: 'Bart'}] вернет 'Bart'

// [] вернет ''

// const simpson = [
//   { name: 'Bart' },
//   { name: 'Lisa' },
//   { name: 'Maggie' },
//   { name: 'Homer' },
//   { name: 'Marge' },
// ];
// 1) Вариант
// const getList = users => {
//   const names = users.map(user => user.name);
//   return names.length <= 2
//     ? names.join(' & ')
//     : names.slice(0, names.length - 1).join(', ') + ' & ' + names.pop();
// };
// 2) Вариант
// const getList = (users) =>
//   users.map(({ name }) => name).length <= 2
//     ? users.map(({ name }) => name).join(" & ")
//     : users
//         .map(({ name }) => name)
//         .slice(0, users.map(({ name }) => name).length - 1)
//         .join(", ") +
//       " & " +
//       users.map(({ name }) => name).pop();
// 3) Вариант

// function getList(names){
//     return names.reduce(function(prev, current, index, array){
//       if (index === 0){
//         return current.name;
//       }
//       else if (index === array.length - 1){
//         return prev + ' & ' + current.name;
//       }
//       else {
//         return prev + ', ' + current.name;
//       }
//     }, '');
//    }
// console.log(getList(simpson));

// TASK 13
// сделать обьект, который будет возвращать любые количества букв А и Б в ключи обьекта.
// Пример: {
//     a: 7,
//     b: 3,
// }
// console.log(count("abbbaaaaaa"));

// const count = (string, firstLetter, secondLetter) => {
//     return string
//     .split("")
//     .reduce( (acc, item) => {
//         if(item === firstLetter) {
//             acc.a += 1;
//         }

//         if(item === secondLetter) {
//             acc.b += 1;
//         }
//         return acc;
//     }, {a: 0, b: 0,})
// };

// console.log(count("abbbaaaaaaaabb", 'a', 'b'));

// const ingredients = [
//     'Картошка',
//     'Грибы',
//     'Чеснок',
//     'Помидоры',
//     'Зелень',
//     'Приправы',
//   ];

// const ingredientsList = document.querySelector('#ingredients')
// const makeIngredientsList = options => {
//   return options.map(option => {
//     const ingredientListEl = document.createElement('li');
//   ingredientListEl.textContent = option;
//   return ingredientListEl;
// });
// };
// const elements = makeIngredientsList(ingredients);
// ingredientsList.append(...elements);