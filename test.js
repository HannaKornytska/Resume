
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


// ............приведення до квадрата елементів масиву

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

// const friends = ['Mango', 'Orange', 'Kiwi', 'Poly'];

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


// ..................... порахувати загальну сумму в корзині

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

// .................порахувати сумму усіх парних чисел

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

// ...............Скрипт пошуку логіна loginToFind

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

// ......НАПИСАТИ СКРИПТ САМОГО МАЛЕНЬКОГО ЧИСЛА В МАСИВІ. Припускаемо що є найменше число це перший елемент. і порівнюємо його з усіма елементами.якщо
// елемент буде менший,тоді він стає найменшим. і так до кінця цилу перебирання. number це наступне число з яким порівнюімо перший елемент

// const numbers = [12, 8, 3, 99, 7, 2];
// //  змінна для наменшого числа
// let min = numbers[0];

// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
// }
// console.log(min)

// ......НАПИСАТИ СКРИПТ ЯКИЙ ОБЄДНУЄ ВСІ ЕЛЕИЕНТИ МАСИВА В РЯДОК ЧЕРЕЗ "," JoIN / FOR

// const friends = ['Mango', 'Orange', 'Kiwi', 'Poly'];

// СПОСІБ 1 FOR

// створюємо string пустий так само як був total
// let string = '';
 
// for (const friend of friends) {
//   string += friend + ',';
// }
  //  метод стринг тому що внас строка. поп не підійде бо він для массиву
//   string = string.slice(0, string.length -1);
// console.log(string);

// СПОСІБ 2 JOIN просто розбиваемо масив через розділювач ","

// const string = friends.join(',');
// console.log(string);


// ...........Напиши скрипт який смінює верхній на нижній регістр і назад

//  СПОСІБ 1

// const string = "JavaScript"
// створюємо нову змінні де будемо записувати новий=створений=перевернутий рядок
// let invertedString = '';

// потрібно перебрати масив,розбити по символьно .SPLIT метод строки
// const letters = string.split('');
// // перебираємо розбиту строку і порівнюємо регістри
// for (const letter of letters) {
//   if (letter === letter.toLowerCase()) {
//     // console.log(letter);
//     invertedString += letter.toUpperCase();
//   } else {
//     invertedString += letter.toLowerCase();
// }

 
// }

// console.log(invertedString);

// СПОСІБ  2 КРАЩИЙ тернарний оператор
// let invertedString = '';
// const letters = string.split('');

// for (const letter of letters) {

//   invertedString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }
// console.log(invertedString)

// ............................CУММА ЕЛЕМЕНТІВ 2 МАСИВІВ

// const array1 = [5, 10, 16, 7, 33];
// const array2 = [15, 9, 7, 4];

// let total = 0;
// // зєднуємо 2 масива в один
// const numbers = array1.concat(array2);
// // перебираємо створений масив і плюсуємо тотал з елементом number масива
// for (const number of numbers) {
//   total += number;
// }

// console.log(total);


// ..........................КОЛЕКЦІЯ КАРТОЧОК В ТРЕЛО

// const cards = ['card1', 'card2', 'card3', 'card4', 'card5'];

// ..........видалення елементів по індексу. спочатку треба знайти індекс карти якої треба
// видалити
// const cardToRemove = 'card3';
// const indexCard = cards.indexOf(cardToRemove);
// // видаляємо елемент метод splice
// cards.splice(indexCard, 1);

// console.log(cards)

// ............додаємо карточку по індексу в кінець метод push/ в середину метод splice

// const cardToInsert = 'card6';

// методом splise додали в середину card6
// cards.splice(3, 0, cardToInsert);

// методом push додали card6 в кфнець масиву
// cards.push(cardToInsert);
// console.log(cards);
 
//  .................ЗАМІНИТИ,ОБНОВИТИ КАРТОЧКУ В МАСИВУ

// const cardToUpdate = 'card70';
// //  замінюємо карточку з індексом 1 на карту card70
// cards.splice(1, 1, cardToUpdate)
// console.log(cards)

// .......замінити карточку сard 3
// const cardToUpdate = 'card3';
// // знайдемо її індекс в масиві
// const index = cards.indexOf(cardToUpdate);
// console.log(index);

// // далі замінюємо методом splice
// cards.splice(index, 1, 'new card');
// console.log(cards)


// / . ФУНКЦІЇ ........................................

// ...............ФУНКЦІЯ МАЄ МАСИВ ЦІН (items) (ЧИСЕЛ) І ПОВЕРТАЄ ЇХ СУМУ

// const cart = [20, 90, 7, 63, 40, 15, 3, 27];
// let total = 0;

// const calculateTotalPrice = function (items) {
//   console.log(items);
//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }
//   // total обовязкого всередені функції
//   return total;
// }
// console.log(calculateTotalPrice([5, 10, 15, 20]));

// ...............ФУНКЦІЯ ЩО ПЕРЕБИРАЄ І ЛОГУЄ МАСИВ. RETURN не потрібно. така умова задачі

// const logItems = function (items) {

//   for (const item of items) {
//     console.log(item);
//   }

// }

// logItems (['Mango', 'Orange', 'Kiwi', 'Poly']);
// logItems([1, 2, 3, 4]);


// ...............функція для  пошуку логіна loginToFind

 const logins = ['hklhh', 'vvvvvvvvvv', 'jh;akda', 'pppppppp'];
// const loginToFind = 'vvvvvvvvvv';

// const message = logins.includes(loginToFind) ? 'Find' : 'Sorry';

//  console.log(message)

// const findLogin = function (allLogins, loginToFind) {
  
//   console.log(allLogins);
//   console.log(loginToFind);

//   let message = 'Sorry';
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       message = 'Find'
//     }
//   }
//   return message;
// }


// console.log(findLogin(logins, 'qqqqqqqqqqqqq'))

// СПОСІБ 2 ЧЕРЕЗ ТЕРНАРНИЙ ОПЕРАТОР

// const findLogin = function (allLogins, loginToFind) {

//   const message = allLogins.includes(loginToFind) ? 'Find' : 'Sorry';
//   return message;
// }
  // return message = allLogins.includes(loginToFind) ? 'Find' : 'Sorry'; ще проще зразу return замість message
  
// console.log(findLogin(logins, 'qqqqqqqqqqqqq'))