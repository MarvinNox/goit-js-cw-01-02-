// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*

// let number = prompt("Введіть число");
// Number(number) == 10 ? alert("Вірно") : alert('Не вірно');

// *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// // if (min <= 14) {
// //     alert(`${min} входить у першу чверть!`)
// // } else if (min <= 29) {
// //     alert(`${min} входить у другу чверть!`)
// // } else if (min <= 44) {
// //     alert(`${min} входить у третю чверть!`)
// // } else {
// //     alert(`${min} входить у четверту чверть!`)
// // }

// min <= 14
//     ? alert(`${min} входить у 1 чверть!`)
//     : min <= 29
//         ? alert(`${min} входить у 2 чверть!`)
//         : min <= 44
//             ? alert(`${min} входить у 3 чверть!`)
//             : alert(`${min} входить у 4 чверть!`)

// *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
// let num = Number(prompt("Давай цифру"));
// let result = '';

// switch (num) {
//     case 1:
//         result = 'зима';
//         break;
//     case 2:
//         result = 'весна';
//         break;
//     case 3:
//         result = 'літо';
//         break;
//     case 4:
//         result = 'осінь';
//         break;
//     default:
//         result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
//         break;
// }
// alert(result);
// console.log(result);

// *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples>


// *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*

// let time = Number(prompt("Дай хвилинки!"));

// function getTime(time) {
//     return `${String(Math.floor(time / 60)).padStart(2, "0")}:${String(time % 60).padStart(2, "0")}`;
// }

// console.log(getTime(time));

// *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*

// const login = prompt("Давай логін").toLowerCase();
// const password = "Я головний";
// let userPassword = '';

// if (login == "Адмін".toLowerCase()) {
//     userPassword = prompt("Давай пароль!");
//     if (userPassword == password) {
//         alert("Вєлкам!")
//     } else if (userPassword == '' || userPassword == null){
//         alert("Закенсилили!");
//     } else {
//         alert("Невірно набраний номер!")
//     }
// } else {
//     alert("Іди собі, тебе не знаю.")
// }


// *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*


// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*

// let count = 0;
// while (count <=20) {
//     console.log(count);
//     count++;
// }

// *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*

// function getNumbers(min, max) {
//     let total = 0;
//     for (let index = min; index <= max; index++) {
//         console.log(index);
//         if (!(index % 2)) {
//             total += index;
//         }
//     }
//     return total;
// }

// *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.


// *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*

// const min = (a, b) => isNaN(a) || isNaN(b) ? "Not a Number!" : a > b ? a : b;

// *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*


// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).


// *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*

// const isAdult = age => age < 18 ? confirm("Тобі що нєма 18?") : true;
// isAdult(prompt("Вік?"));

// const isAdult = age => {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm("Тобі що нєма 18?");
//     }
// }
// isAdult(prompt("Вік?"));

// *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*


// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*

// const fizzBuzz = num => {
//     for (let i = 1; i <= num; i++) {
//          if (!(i % 3) && !(i % 5)) {
//             console.log('fizzbuzz');
//         } else if (!(i % 3)) {
//             console.log('fizz');
//         } else  if (!(i % 5)) {
//             console.log('buzz');
//         }
//     }
// }
// fizzBuzz(15);

// *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
