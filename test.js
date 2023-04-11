
// const subscribers = [
//   { name: 'user1',  isCloseFriend: true},
//   { name:'user2',  isCloseFriend: false},
//   { name:'user3',  isCloseFriend: false},
//   { name:'user4',  isCloseFriend: true},
//   { name: 'user5',  isCloseFriend: true},
// ]
// // перебираємо масив обьектів  FOR

// for (let i = 0; i < subscribers.length; i++) {
//   console.log(subscribers[i]);
// }


// перебираємо масив обьектів FOR OF

// for (const item of subscribers) {
//   console.log(item);
// }
//
// const icon = '5';
// console.log(typeof icon);  тип обекту
// Number(icon);              перевести рядок у число
// console.log(typeof Number(icon));



// const obj = {
//   name: 'Vitaly',
//   age: 18,
//   sex: 'male',
// }
// for (const key in obj) {
//   console.log(key);
//   console.log(obj[key]);
// }


// приведення до квадрата елементів масиву

// const arrNumber = [
//   1, 2, 3, 4, 5];

// function squareArr(arr) {
//   for (let i = 0; i < arr.length; i++){
//     arr[i] = arr[i] * arr[i];
  
//   }
//   return arr;
// }
// console.log(squareArr(arrNumber))


// const friends = ['Mango', 'Orange', 'Kiwi', 'Poly'];

// // довжина масиву
// console.table(friends);
// console.log(friends.length);

// //знайти значення останнього індексу
// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// //перезапише елумент масиву МаНГО

// friends[0] = 'jkljlkjkj';
// console.log(friends);

const friends = ['Mango', 'Orange', 'Kiwi', 'Poly'];

// перебор массиву по індексу
// for (let i = 0; i < friends.length; i++){
  // додасть 25 до манго орандж...
  // friends[i] += '25';
// виводить індекс
  // console.log(i); 
  // виводить елемент
  // console.log(friends[i]);
// }

// використовуємо коли не треба робити математичні дії і не треба перезаписувати (змунювати) індекс
// for (const friend of friends) {
//   console.log(friend)

// }
// console.log(friends)


//  порахувати загальну сумму в корзині

// const cart = [54, 36, 95, 15, 7, 34,55,79,125];
 
// let totalCart = 0;

// for (let i = 0; i <= cart.length - 1; i++ ) {
//  totalCart += cart[i];
// }
// консоль лог виводимо після циклу
// console.log(totalCart);
 // інший спосіб через FOR OF

// for (const item of cart) {
//   totalCart += item;
// }
//  console.log(totalCart);

// порахувати сумму усіх парних чисел

// const numbers = [54, 36, 95, 15, 7, 34, 55, 79, 125, 2];

// let totalNumberTwo = 0;

// for (let i = 0; i < numbers.length; i++){
//   console.log(numbers[i]);
  // запис число ділеться на 2 без остачі.тобто воно четне !==0 якщо не четное
  // if (numbers[i] % 2 === 0) {
  //   console.log('четное');
// сумма всіх парних чиесл в масиві
//     totalNumberTwo += numbers[i];
//   }

// }

// ІШШИЙ СПОСІБ КРАЩИЙ

// for (const number of numbers) {
//   console.log(number);

//   if (number % 2 === 0) {
//     console.log('четное');
//     totalNumberTwo += number;
//   }
// }


// console.log(totalNumberTwo)

// Скрипт пошуку логіна loginToFind

// const logins = ['hklhh', 'vvvvvvvvvv', 'jh;akda', 'pppppppp'];
// const loginToFind = 'vvvvvvvvvv';
// let message = '';

// console.log(logins)

// СПОСІБ 1 якщо loginToFind === тобто згайдений,цикл завершуеться break

// for (let i = 0; i < logins.length; i++){
  // змінна login для індексу масиву
//   const login = logins[i];
//   if (login === loginToFind) {
//     message = "Find";
//     break;
//   } 
//       message = 'Sorry'; 
// }
// console.log(message)

// СПОСІБ 2 спочатку призначаемо що login не знайдений (message =' Sorry').далі перезаписуемо якщо знайдений тоді message = 'Find;

// const logins = ['hklhh', 'vvvvvvvvvv', 'jh;akda', 'pppppppp'];
// const loginToFind = 'vvvvvvvvvv';
// let message = 'Sorry';

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = 'Find';
//     break;
//   }
// }
// console.log(message)

// СПОСІБ 3 тернарний оператор
// const logins = ['hklhh', 'vvvvvvvvvv', 'jh;akda', 'pppppppp'];
// const loginToFind = 'vvvvvvvvvv';

// const message = logins.includes(loginToFind) ? 'Find' : 'Sorry';

//  console.log(message)

// НАПИСАТИ СКРИПТ САМОГО МАЛЕНЬКОГО ЧИСЛА В МАСИВІ. Припускаемо що є найменше число це перший елемент. і порівнюємо його з усіма елементами.якщо
// елемент буде менший,тоді він стає найменшим. і так до кінця цилу перебирання. number це наступне число з яким порівнюімо перший елемент

const numbers = [12, 8, 3, 99, 7, 2];
//  змінна для наменшого числа
let min = numbers[0];

for (const number of numbers) {
  if (number < min) {
    min = number;
  }
}
console.log(min)