// task 1
/*let i = 3;
while (i) {
 alert(i--);
}
Когда i доходит до 0,то условие становится ложным и цикл останавливается
Поэтому выведет сначала 3 потом 2,потом 1 и цикл завершитсяю
*/


// task 2
/*let a = +prompt('Введите число', '');
let b = +prompt('Введите число', '');
let c = +prompt('Введите число', '');
if (a>b && b>c ){
	a = a * 2;
	b = b * 2;
	c = c * 2;
} else {
	a = -a;
	b = -b;
	c = -c;
}
alert(`A= ${a}`);
alert(`B= ${b}`);
alert(`C= ${c}`);*/


// task 3
/*let a = +prompt('Введите число', '');
let b = +prompt('Введите число', '');
let c = +prompt('Введите число', '');
if (a>b && b>c || a<b && b<c ){
	a = a * 2;
	b = b * 2;
	c = c * 2;
} else {
	a = -a;
	b = -b;
	c = -c;
}
alert(`A= ${a}`);
alert(`B= ${b}`);
alert(`C= ${c}`);*/


// task 4
/*let a = +prompt('Точка A', '');
let b = +prompt('Точка B', '');
let c = +prompt('Точка C', '');
if (c - a < b - a) {
	alert('Точка С ближе к A');
} else if (b - a < c - a) {
	alert('Точка B ближе к A');
}*/



// task 9
/*let a = +prompt('Введите число', '');
if (a < 0 && a % 2 == 0) {
	alert('негативне парне число');
} else if (a > 0 && a % 2 == 1) {
	alert('Позитивне непарне число');
} else if (a == 0) {
	alert('Нульове число');
}*/


// task 10
/*let a = +prompt('Введите число', '');
if ( 99 >= a && a >=10) {
	if (a % 2 == 0) {
	alert('Парне двозначне число');
}
} else if (999 >= a && a >= 100) {
	if (a % 2 == 1) {
	alert('Непарне тризначне число');
}
}*/


// task 11

// Префіксний варіант ++i:
// let i = 0;
// while (++i < 5) alert(i); ++i сначала происходит увеличение,потом  сравнение 1,2,3,4 5<5-это ложно,поэтому цикл завершится

// Постфіксний варіант i++
/*let i = 0;
while (i++ < 5) alert(i); 1,2,3,4,5 i++ увеличивает возвращая старое значение,поэтому i++ увеличит до 5 и 5 будет выведено,
									а на следующем шагу while(5<5) уже ложно и цикл завершится*/


// task 12

// Постфіксна форма :
// for (let i = 0; i < 5; i++) alert(i); 0,1,2,3,4

// Префіксна форма :
// for (let i = 0; i < 5; ++i) alert(i); 0,1,2,3,4 
	/*увеличение i++ выполняется отдельно от условия i<5 и значение i при этом не используется,поэтому
	разницы между ++i i++ нету*/

// task 13
/*let i = +prompt('Введите число', '');
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}*/


// task 14
/*let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}*/


// task 15
/*let a;
do {
  a = +prompt("Введите число больше 100?", '');
} while (a <= 100 && a);*/


// task 16
/*let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i

  for (let j = 2; j < i; j++) { //  делится ли число
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert( i ); // простое число
}*/


// task 17
/*let a = +prompt('Введите число', '');
let b = +prompt('Введите число', '');
let c = a + b;
alert(`${c/2}`);*/


// task 18
/*let a = prompt('Введите число', '');
let b = Math.pow(a,2);
alert(b);*/



// task 19
/*let a = +prompt('Введите число', '');
let b = +prompt('Введите число', '');
let c = +prompt('Введите число', '');
const bigValue = Math.max(a, b);
const smallValue = Math.min(a,b,c);
const final = bigValue - smallValue;
alert(`${final}`);*/


// task 20
/*let a = +prompt('Введите число', '');
if (a % 2 == 0) {
alert(`${a}: Четное число`);
} else {
	alert(`${a}: Нечетное число`);
}*/


// task 21

/*let a = +prompt('Введите число' ,'');
a < 100;
const numberArray = String(a).split('');
console.log(numberArray)
let sum = 0;
for (const i in numberArray) {
	sum = sum + Number(numberArray[i]);
}
alert(`Количество цифр:${ String(a).length}. Сумма цифр: ${sum}`);*/


// task 22
/*let a = +prompt('Введите сантиметры' ,'');
let conversion = a * 2.54;
alert(`${a} сантиметров = ${conversion} дюймов`);
let b = +prompt('Введите дюймы' ,'');
let conv = b / 2.54;
alert(`${b} дюймов = ${conv} сантиметров`);*/


// task 24
/*let a = +prompt('Введите трехзначное число' ,'');
a <= 100;
const numberArray = String(a).split('');
let sum = 0;
let mul = 1;
if (a % 2 == 0) {
	for (const i in numberArray) {
	sum = sum + Number(numberArray[i]);	
} alert(`Число четное, сумма его цифр ${sum}`);
} else {
	for (const i in numberArray) {
	mul = mul * Number(numberArray[i]);
	
}alert(`Число нечетное, произведение его цифр = ${mul}`);
}*/


// task 27
/*let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;*/


// task 28
/*const user = {
name: "John"
};
user.name = "Pete"; // Це працюватиме? да,потому что const cохраняет переменную user от 
						изменений,а содержимое обьекта user менять можно*/


// task 29
let salaries = {
John: 100,
Ann: 160,
Pete: 130
};
let sum = 0;
for (let i in salaries) {
  sum = sum + salaries[i];
}

alert(sum);