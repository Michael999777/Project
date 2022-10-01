// task 1
/*function camelize(str) {
  return str
    .split('-')
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); 
}*/


// task 2
/*function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); 
alert( arr );*/


// task 3
/*function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); 
alert( arr ); */


// task 4
/*let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert( arr );*/


// task 5
/*function copySorted(arr) {
  return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted );
alert( arr );*/


// task 7
/*let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
let names = users.map(item => item.name);
alert( names );*/


// task 8
/*function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let arr = [ vasya, petya, masha ];
sortByAge(arr);
alert(arr[0].name); 
alert(arr[1].name); 
alert(arr[2].name);*/


// task 9
/*function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let arr = [ vasya, petya, masha ];
alert( getAverageAge(arr) );*/


// task 10
/*function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "крiшна", ":-O"
];

alert( unique(strings) );*/


// task 11
/*function unique(arr) {
  return Array.from(new Set(arr));
}*/


// task 12
/*function makeCounter() {
let count = 0;
return function() {
return count++; };}
let counter = makeCounter();
let counter2 = makeCounter();
alert (counter ()); // 0
alert (counter ()); // 1
alert (counter2 ()); //?
alert (counter2 ()); //?
Функции counter и counter2 созданы разными вызовами makeCounter.
 у них независимые внешние лексические окружения и  у каждого из которых свой собственный count.*/


 // task 13
/* function Counter() {
let count = 0;
this.up = function() {
return ++count;
};
this.down = function() {
return - count;
};
}
let counter = новий Counter();
alert(counter.up()); //?
alert(counter.up()); //?
alert(counter.down() ); //?
 будет работать,потому что обе вложенные функции были созданы с одним и тем же внешним лексическим окружением,
  так что они имеют доступ к одной и той же переменной count*/


  // task 14
/*  function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}
alert( factorial(5) );*/