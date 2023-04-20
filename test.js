
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

//  const logins = ['hklhh', 'vvvvvvvvvv', 'jh;akda', 'pppppppp'];
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
// ще проще зразу return замість message
  // return message = allLogins.includes(loginToFind) ? 'Find' : 'Sorry'; 
  
// console.log(findLogin(logins, 'qqqqqqqqqqqqq'))

// ФУНКЦІЯ ЯКА ШУКАЄ НАЙМЕНЬШЕ ЧИСЛО В МАСИВІ

// const numbers = [3, 5, 45, 0, 15];
// розпаковка масива в числа методом ...spred
// const x = Math.min(...numbers);
// console.log(numbers)
// console.log(x)

// СПОСІБ 2, ДОВШИЙ
// припустимо що перший елемент в масиві є найменше число
// let smallNumber = numbers[0];
// перебираємо масив
// for (const number of numbers) {
//   if (number < smallNumber) {
//     smallNumber = number;
//   }
// }

// console.log(smallNumber)

// .................ФУНКЦІЯ ЯКА  ЗМІНЮЄ РЕГІСТР ЛІТКРИ НА ПРОТИЛЕЖНИЙ
// function change(string) {

  
  // створюємо зміну де розбиваємо рядок по символом 
  // const letters = string.split('');
  // створюємо змінну куди буде повертатися новий змінений рядок
  // let updateString = '';
  // перебираємо масив

  // for (const letter of letters) {
  //   const isInLowerCase = letter === letter.toLowerCase();
  //   updateString += isInLowerCase
  //     ? letter.toUpperCase()
  //     : letter.toLowerCase();
  // }

  // return updateString
  // }
  // console.log(change('SSSSBBBBBmmmmmmTTTTT'))

  //  ЯК РАЗПАКУВАТИ ПСЕВДО МАСИВ В МАСИВ
  //  ставимо ...перед псевдо масивом/ в ...args запише всі елементи після a,b,c
// const fn = function (a, b, c, ...args){
    
//   }


//  .........НАПИШИ ФУНКЦІЮ ДЛЯ ДОДАВАННЯ БУДЬЯКОЇ КІЛЬКОСТІ ЧИСЕЛ

// const add = function(...args) {

//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }
// console.log(add(1, 10, 5, 7, 0, 3, 77));

// ..................НАПИШИ ФУНКЦІЮ filterNumber(array,[number1, ...]) ЯКА
// ПЕРШИЙ АРГУМЕНТ ПРИЙМАЄ МАСИВ ЧИСЕЛ
// ПІСЛЯ ПЕРШОГО АРГУМЕНТА БУДЕ БУДЬЯКА КІЛЬКІСТЬ АГРУМЕТІВ - ЧИСЕЛ
// ФУНКЦІЯ ПОВЕРТАЄ МАСИВ З АРГУМЕНТАМИ ПОЧИНАЮЧИ З ДРУГОГО
// 

// 

  // створюємо змінну де буде повертатися масив
  // const uniqueElement = [];
// потрібно перевірити чи включає масив array в args, або навпаки немає різниці
  // for (const element of array) {
  // перевіряємо чи є в args елементи масива array
    // if (args.includes(element)) {
      // цей елемент який збігається записуємо у новий масив
//       uniqueElement.push(element);

//     }
//   }
//   return uniqueElement;
//  }


// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));


//  .............ОБЕКТИ.........................

// const inputName = 'color';
// const inputValue = 'tomato';
// обект з значень змінних
// const colorPicker = {
//   [inputName]:inputValue,
// }
// color:'tomato'
// console.log(colorPicker)

// ......................................ПРИКЛАДИ МЕТОДІВ ОБЬЕКТА

// const playList = {
  // name: 'Супер плейліст',
  // rating: 5,
  // tracks: ['трек1', 'трек2', 'трек3'],
  // trackCount: 3,


  // ..............ЗМІНИТИ ІМЯ
  // changeName(newName) {
  //   this.name = newName;
  // },

  // ............ДОДАТИ НОВИЙ ТРЕК 
  // addTrack(track) {
  //   this.tracks.push(track);
   
    // tracks ['трек1', 'трек2', 'трек3', 'трек30']
  // },
    
 // .....................ОНОВИТИ  рейтинг
 
//   updateRatting(newRatting) {
//     this.rating = newRatting;

//  },
// .............ПОВЕРНУТИ ДОВЖИНУ ПЛЕЙЛІСТА З 4 ТРЕКІВ
  
// getTrackCount(){
  // довжина плейліста дорівнює кількості треків
  // return this.tracks.length;
  
// }
//  }
// playList.changeName('нове імя')
// playList.addTrack('трек30')
// console.log(playList)
// playList.updateRatting(4)
// console.log(playList)




// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };
// let totalFeedback = 0;
// const keys = Object.keys(feedback);
// for (const key of keys) {
//   console.log(key)
//   console.log(feedback[key])

// totalFeedback += feedback[key]
  
// }
// console.log(totalFeedback)


// let totalValues = 0;

// const values = Object.values(feedback);
// for (const value of values) {
//   totalValues += value;
// }
// console.log(totalValues)



// .....................................................МАСИВ ОБЕКТІВ


// const friends = [
//   { name: 'Mango', online: false},
//   { name: 'Lemon', online: true},
//   { name: 'Orange', online: false},
//   { name: 'Melon', online: false},
//   { name: 'Poly', online: true},
//   { name: 'Apple', online: false},
// ]
// console.table(friends)
// Перебирамо

// for ( const friend of friends){
//   console.log(friend.name)

//   friends[2].bass = 666;
//   friend.ccc = 555;
  
// }
// console.table(friends)

// ................ШУКАЄМО ДРУГА ПО ІМЕНІ

// function findFriendByName (allFriendrs, friendName){
// for (const friend of allFriendrs){
//   console.log(friend.name)
//   if ( friend.name === friendName)
//   return 'yes';
// }
// return 'No'
  
// }

// console.log(findFriendByName(friends, 'Poly'));

// ...................ОТРИМАТИ ІМЕНА ВСІХ ДРУЗІВ, повернути в нвому масиві


// function getAllName(allFriendrs) {
//   const names = [];
  
//   for (const friend of allFriendrs){
//   names.push(friend.name);
//   }
//   return names;
// }
// console.log(getAllName(friends))

// .............................. ОТРИМАТИ  ІМЕНА ТИХ ДРУЗІВ ЯКІ ОНЛАЙН

// function getOnlineFriends (allFriendrs){
//   const friendOnline = [];

//   for (const friend of allFriendrs){
    
//     // якщо друг онлайн додаємо його у створений масив
//      if( friend.online){
//       friendOnline.push(friend);
//      }
//   }
  
  // повертаємо масив друзів онлайн
// return friendOnline;
// }
// console.log(getOnlineFriends(friends))

// ...................................ОТРИМАТИ МАСИВ ВСІХ ДРУЗІВ ЯКІ ОФЛАЙН

// function getOfflineFriends (allFriendrs) {

//   const friendOffline = [];

//   for (const friend of allFriendrs){
//     if ( !friend.online) {
//       friendOffline.push(friend);
//     }
//   }

// return friendOffline;
// }
// console.log(getOfflineFriends(friends))

//.................................ФУНКЦІЯ ПОВЕРТАЄ ОБЬЄКТ З 2 МАСИВАМИ З ОНЛАЙН І ОФЛАЙН ДРУЗЯМИ 

// function getFriendsByOnlineStatus(allFriends) {
// створюємо обьект з масивами де будуть збкрігатися списки друзів за статусом
// const friendsByStatus = { 
// online: [],
// offline: [],
// };

// for (const friend of allFriends){
// console.log(friend)
// if( friend.online){
//   friendsByStatus.online.push(friend);
// }
// friendsByStatus.offline.push(friend);
// }
// return friendsByStatus;
// }
// console.log(getFriendsByOnlineStatus(friends));


// ..........................SPRED зазпакока робиться копія або ссилка на масив

// const number = [1,2,6,40].concat([23,8,45,9], [66,1,0,7]);

// console.log(number)

// const numbers = [ ...[1,2,3],4,5];
// console.log(numbers)


// const temps = [1, 15, 20, 0, 16, 8];


// ............................МАСИВИ


//  пошук свмого маленького і селикого числа(температури)

// console.log(Math.max(temps))
// NaN
// console.log(Math.max(...temps))
//  20
// console.log(Math.min(...temps))
// 0

//  зєднуємо декілька масивів spred 

// const lastWeekTemps = [1, 2, 3];
// const currentWeekTemps = [1, 10, 3];
// const nextWeekTemps = [19, 2, 3]

// const allTemps = [...lastWeekTemps, ...currentWeekTemps, ...nextWeekTemps];
// console.log(allTemps)

// ...........РАСПИЛЯЄМО ОБЄКТИ

// const defaultSettings = {
//   theme: 'light',
//   showNotification: true,
//   hideSidebar: false,
// }

// console.table(defaultSettings)

// const userSettings = {
//   showNotification: false,
//   hideSidebar: true,
// }

// зєднуємо розпаковкою настройки подефолду з новими настойками

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings
// }
// console.table(finalSettings)

// ..................ДЕСТРУКТУРИЗАЦІЯ ОБЄКТА

// const playlist = {
//   names: 'Супер плейліст',
//   rating: 5,
//   tracks: ['трек1', 'трек2', 'трек3'],
//   trackCount: 3,
// }

// const {
//   names,
//   rating,
//   tracks,
//   trackCount: numberOfTrack,
//   autor = 'user',
// } = playlist;

// console.log(numberOfTrack)

// const { names, rating, tracks, trackCount } = playlist;

// console.log(names, rating, tracks, trackCount);

// const { names, rating, tracks, trackCount,  } = playlist;

// ...................ГЛИБОКА ДИСТРУКТУРИЗАЦІЯ


// const profile = {
//   names: 'Hanna Kornytska',
//   tag: 'hhhhhhh',
//   location: 'Oslo',
//   avatar: 'https://gkhgghjb/mlk;jl///nkhhlkj',
//   status: {
//     followers: 5698,
//     views: 4827,
//     likes: 1208,
//   },
// };

// console.table(profile);

// const {
//   names,
//   avatar,
//   status: { followers, views, likes },
// } = profile;

// console.log(names, avatar, followers,views,likes)

// ....................ДЕСТРУКТИРИЗАЦІЯ МАСИВА

// const rgb = [256, 100, 80];

// const [a, b, c] = rgb;
// console.log(rgb)

// const authors = {
//   kiwi: 4,
//   poly: 6,
//   ajax: 5,
//   mango: 6,
// }

// const entries = Object.entries(authors);
// console.table(entries);
// перебираємо масив масивів після Object.entries
// for (const entry of entries) {
  
  // const name = entry[0];
  // const rating = entry[1];

  // або записати деструктивно

  // const [name, rating] = entry;

//   console.log(name, rating);
// }

// ................., REST (сбор)

// const profile = {
//   names: 'Hanna Kornytska',
//   tag: 'hhhhhhh',
//   location: 'Oslo',
//   avatar: 'https://gkhgghjb/mlk;jl///nkhhlkj',
//   status: {
//     followers: 5698,
//     views: 4827,
//     likes: 1208,
//   },
// };

//  якщо птрібно розділити обьект на основні парвметри і  всі останні зберегти окремо
// задаемо папаметри які потрібні,всі інші записуемо через ...(імя змінною довільне)
// const { names, tag, location, ...other } = profile;
// console.log(names, tag, location);
// console.log(other);

// ...............ПАТЕРН (ОБЬЕКТ НАСТРОІК) КОЛИ БАГАТО ПАРАМЕТРІВ У ФУНКІЇ
//  userProfile  це profile
// function showProfileInfo(userProfile) {
  // деструктиризація або записати замість (userProfile)
//   const { names, tag, location, avatar, status: { followers, views, likes } } = userProfile;
//   console.log(names, tag, location, avatar, followers, views, likes);
// }

// const profile = {
//   names: 'Hanna Kornytska',
//   tag: 'hhhhhhh',
//   location: 'Oslo',
//   avatar: 'https://gkhgghjb/mlk;jl///nkhhlkj',
//   status: {
//     followers: 5698,
//     views: 4827,
//     likes: 1208,
//   },
// };

// showProfileInfo(profile);

// ....................КОРЗИНА ТОВАРІВ

// const cart = {
//   items: [],

//   getItems() {
//     return this.items;
//    },
//   add(product) {
//     // щоб додати новий ключ з властивістю в обьект створюємо змінну і в неї
//     //  додаємо всі продукти по дефолту ...product і пишемо новий quantity: 1
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     }
//     this.items.push(newProduct);
//    },
//   remove(productName) {
//     for (let i = 0; i < this.items.length; i++) {
//       const item = this.items[i];
//       if (productName === item.name) {
//         this.items.splice(i, 1);
//       }
//   }
//    },
//   clear() { 
//     this.items = [];
//   },
//   countTotalPrice() { 
//     const { items } = this;
//     let total = 0;

//     for (const { price } of items) {
//       total += price;
//     }
//     return total
//   },
//   increaseQuantity(productName) { },
//   decreaseQuantity(productName) { },
// };


// cart.add({ name: 'orange', price: 50 });
// cart.add({ name: 'kiwi', price: 40 });
// cart.add({ name: 'kiwi', price: 40 });
// cart.add({ name: 'kiwi', price: 40 });

// console.table(cart.getItems())
// console.log('total', cart.countTotalPrice())
// cart.remove('orange');
// console.table(cart.getItems())




// ..... getItems() {} повертає ссилку на обькт
// ......add(product) {} додає обьект продукта в items
// ......remove(productName) {} повністю видалити продукт з обькту
//       перебираемо обьект через і томущо будемо видаляти продукт через splice ,а йому потрібен індекс
// ......CLEAR ОЧИЩАЄ КОРЗИНУ просто примвоюємо пустий масив до items і він очищається
// ......countTotalPrice РАХУЄ ЗАГАЛЬНУ СУМУ В ОБЬЕКТІ


// ....................CALL-BACK ФУНКЦІЇ
// call бек функція

// const filter = function (array,callback1) {

//   const filterArray = [];

//   for (const element of array) {
//     console.log(element);
//     console.log(callback1(element));

//     const passed = callback1(element);
//     if (passed) {
//   filterArray.push(element)
// }

//   }
//   return filterArray;
// }


// написати кол бек функцію яка буде повертати масив чисел по фільтру.
// функція повертає числа які бідьші та дорівнюють 3

// const callback1 = function (value) {
//   return value >= 3;
// }


// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1)


// функція  2 повертає числабульше і дорівнює 4
//  інлайн функція

// const r2 =  filter([1, 2, 3, 4, 5,6,7,8], function (value){
// return value >= 4;
// });
// console.log(r2)


// .....ЗАЧАЧА НАСТУПНА

// call бек функція

// const filter = function (array,callback1) {

//   const filterArray = [];

//   for (const element of array) {
//     console.log(element);
//     console.log(callback1(element));

//     const passed = callback1(element);
//     if (passed) {
//   filterArray.push(element)
// }

//   }
//   return filterArray;
// }


// const fruits = [
//   {name: 'kiwi', quantity: 200, isFresh:true},
//   {name: 'orange', quantity: 100, isFresh:false},
//   {name: 'apple', quantity: 700, isFresh:true},
//   {name: 'bananas', quantity: 250, isFresh:false},
// ];

// .........повернути масив фруктів у яких кідькість більша 150

// функція вищого рангу в якій використана колбек функця

// const getFruitsWithQuantity = function (fruit) {
//   return fruit.quantity >= 150;
// }


// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3)

// ...........................ЗАМКНЕННЯ
// ФУНКЦІЯ  КОЛБЕК innerFunction ПРИ ВИЗОВІ БУДЕ МАТИ ДОСТУП ДО ЛОКАЛЬНИХ ЗМІННИХ ТІЄЇ ФУНКЦІЇ
//  ДЕ ЇЇ ВИЗИВАЛИ( БВТЬКІВСЬКА. ФУНКЦІЯ В ЯКІЙ ВОНА ЗНАХОДИТЬСЯ)

// const fnD = function(parametr){
//   const innerVariable = 'значення веутрішньоі функції fnD';

//   const innerFunction = function () {
//     console.log(parametr);
//     console.log(innerVariable);
//     console.log('визов innerFunction');
//   }
//   return innerFunction;
// }
// const fnB = fnD(555);
// fnB();
// console.log(fnB);

// ЗАДАЧА ОКРУГЛЯТОР

// const floattingPoint = 3.658412;
// округляємо число до цілого
// const someInt = Math.round(floattingPoint);
// console.log(someInt)
// округляємо до потрібної кількості цифр після крапки і призводимо до числа
// const withDecimals = Number(floattingPoint.toFixed(2));
// console.log(withDecimals)

// НАПИШЕМО ФУНКЦІЮ ЯКА БУДЕ ОКРУГЛЯТИ ДО 2 КОЖНЕ ЧИСЛО ДЕ ЇЇ БУДУТЬ ВИКОРИСТОВУВАТИ

// const rounder = function(number, places) {
//   return Number(number.toFixed(places));
// }
// number - саме число яке округляють
// places - кількість чисел для округлення
//  визиваємо rounder і функція відпрацювує
// console.log(rounder(6.5666, 2));


//  функція замкнення для округлення 
// const rounder = function(places){
//   return function (number){
//     return  Number(number.toFixed(places));
//   }
// }
// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(6.5666, 2));
// console.log(rounder3(10.5666, 2));

//.........................  СТРІЛОЧНІ ФУНКЦІЇ

// const add = function (a,b,c){
//   return a+b+c;
// }

// const add = (a,b,c) => {
//   return a+b+c;
// }

// const add = (a,b,c) => a+b+c;

// const add = (a,b,c) => ({array: 12})

// console.log(add(2,10,2));


// const numbers = [ 1,2,3,8,42];
//  звичайна функція 

// const greaterThenTwo = numbers.filter(function(num) {
//   return num > 2;
// })

// console.log(greaterThenTwo)
//  стрілка 

// const greaterThenOne= numbers.map(num => {
//   return num * 3;
// });
// console.log(greaterThenOne)
//  aбо ще коротше коли один ретерн

// const greaterThenOneTwo = numbers.map(num => num * 3);
// console.log(greaterThenOneTwo)

//  a - b відменшого до більшого, b - a навпаки від більшого до меншого
// const sorted = numbers.sort((a,b) => b - a);
// console.log(sorted)

//  звичайна запис функції
// const res = numbers.filter(function(num){
//   return num > 2;
// })
// .map(function(num) {
//   return num * 3;
// })
// .sort(function(a,b) {
//   return b - a;
// })
// console.log(res)

//  стрілка переписна функція

// const res = numbers
// .filter(num => num > 2)
// .map(num => num * 3)
// .sort((a,b) => b-a);

// console.log(res)

// const players = [
//   {id: 'id-1', name: 'Mango', timePlayed: 310, isOnline: true, points: 54, rank: 800},
//   {id: 'id-2', name: 'Kiwi', timePlayed: 360, isOnline: true, points: 90, rank: 450},
//   {id: 'id-3', name: 'Orange', timePlayed: 720, isOnline: false, points: 40, rank: 100},
//   {id: 'id-4', name: 'Apple', timePlayed: 560, isOnline: true,  points: 65,rank: 650},
//   {id: 'id-5', name: 'Ananas', timePlayed: 120, isOnline: false,  points: 75,rank: 200},

// ] ;
// звичайна функція
// const onlineAndSorted = players.filter(function(player) {
//   return player.isOnline; 
// })
// .sort(function(prevPlayer, nextPlayer) {
//   return prevPlayer.rank - nextPlayer.rank;
// })
// console.log(onlineAndSorted) 

// стрілка

// const onlineAndSorted2 = players
// .filter( player => player.isOnline)
// .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank)
// console.log(onlineAndSorted2)

// звичайна функція треба збільшити кількість point кожного player на 10%

// const updatePlayers = players.map(function(player) {
//   return{
// ...player,
// points: player.points + player.points * 0.1,
//   };
// });
// console.table(updatePlayers)

// // стрілка

// const updatePlayers2 = players.map(player =>
//    ({...player, points: player.points + player.points * 0.1}));

//   console.table(updatePlayers2)

// ЗБІЛЬШИТИ КІЛЬКІСТЬ ГОДИН ПО ID

// const playerIdToUpdate = 'id-3';

// const updatePlayers = players.map(function(player){
//   if( player.id === playerIdToUpdate){
//     return {
  
//       ...player,
//       timePlayed: player.timePlayed + 50,
//     };
//   }
//   return player;
// })

// console.table(updatePlayers)

// стрілка

// const updatePlayers2 = players.map( player => {
//   return player.id === playerIdToUpdate 
//   ?{...player, timePlayed: player.timePlayed + 50}
//   : player;
// })

// console.table(updatePlayers2)
  
// ........................FOREACH МЕТОД ПЕРЕБИРАННЯ МАСИВУ( нічого не повертає)


// const numbers = [1, 5, 9, 42, 10, 6];


// number елемент масива. index індекс елемент масива. array ссилка на масив
// numbers.forEach(function (number, index, array) {
//   console.log(number)

//   // array[index] = 20;
// });
// console.log(numbers)

// .......................MAP...............

// const doubleNumbers = numbers.map(number => number * 2);
// console.log(doubleNumbers)

// const players = [
//   {id: 'id-1', name: 'Mango', timePlayed: 310, isOnline: true, points: 54, rank: 800},
//   {id: 'id-2', name: 'Kiwi', timePlayed: 360, isOnline: true, points: 90, rank: 450},
//   {id: 'id-3', name: 'Orange', timePlayed: 720, isOnline: false, points: 40, rank: 100},
//   {id: 'id-4', name: 'Apple', timePlayed: 560, isOnline: true,  points: 65,rank: 650},
//   {id: 'id-5', name: 'Ananas', timePlayed: 120, isOnline: false,  points: 75,rank: 200},
// ]
// console.log(players)
//  масив з імен
// const playersName = players.map(player => player.name);
// console.log(playersName)
// // масив id
// const playerId = players.map(player => player.id);
//  console.log(playerId)

//  ЗБІЛЬШИТИ КІЛЬКУІСТЬ ПОІНТІВ НА 10% ( 1.1)

// const updatePoints = players.map(player => {
//   return {
//     ...player,
//     points: Math.round(player.points * 1.1),
//   }
// }
// );

// console.table(updatePoints)

//  ЗБІЛЬШИТИ КФЛЬКІСТЬ TIMEPLAYER У ОДНОГО З ГРАВЦІВ 'id-3'

// const playerIdToUpdate = 'id-3';

// const updateTimePlayer = players.map(player => {
//   return player.id === playerIdToUpdate
//     ? { ...player, timePlayed: player.timePlayed + 33 }
//     : player;
  
// })
// console.table(updateTimePlayer)

// .....................FILTER

const players = [
  {id: 'id-1', name: 'Mango', timePlayed: 310, isOnline: true, points: 54, rank: 800},
  {id: 'id-2', name: 'Kiwi', timePlayed: 360, isOnline: true, points: 90, rank: 450},
  {id: 'id-3', name: 'Orange', timePlayed: 720, isOnline: false, points: 40, rank: 100},
  {id: 'id-4', name: 'Apple', timePlayed: 560, isOnline: true,  points: 65,rank: 650},
  {id: 'id-5', name: 'Ananas', timePlayed: 120, isOnline: false,  points: 75,rank: 200},
]
console.log(players)
