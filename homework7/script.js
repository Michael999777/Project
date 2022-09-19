
// task 1
	/*let name;
	let admin;
	name = 'Michael';
	admin = name;
	alert(admin);*/


// task 2
	// const BIRTHDAY = '18.04.1982' ; // Використовувати великі літери?//Тут можно записывать константу BIRTHDAY большими буквами потому что значение этой константы известно до выполнения скрипт кода
	// const AGE = someCode( BIRTHDAY ); // а тут ?//Эта константа age вычисляется при выполнении скрипт кода-возраст меняется- и тем самым уступает константе BIRTHDAY по значимости и поэтому записывается маленькими буквами


// task 3 
	// let name = "Ilya " ;
 	// alert ( ` hello ${ 1 } ` ); //?// hello 1
	 // alert ( ` hello ${ "name " } );// ничего не выдаст потому что не закрыта кавычка `
    // alert ( ` hello ${ name } ` ); //? hello Ilya


// task 4
	// "" + 1 + 0 = 10
	// "" - 1 + 0 = -1
	// true + false = 1+0 = 1
	// 6 / "3" = 2
	// "2" * "3" = 6
	// 4 + 5 + "px" = 9px
	// "$" + 4 + 5 = $45
	// "4" - 2 = 2 
	// "4px" - 2 = NaN
	// 7 / 0 = Infinity
	// " – 9 " + 5 = -9 5
	// " – 9 " - 5 = -14
	// null + 1 = 1
	// undefined + 1 = NaN


// task 5
	// let a = 1, b = 1;
	// let c = ++a // 1+1=2
	// let d = b++	// 1 потому что возвращает старое значение b


// task 6
	// let a = 2;
	// let x = 1 + (a *= 2 );//a = 4;x = 1 + 4 = 5


// task 7
	// 5 > 4 // true
	// "ананас" > "яблуко" // false сравниваются числа,а не строки
	// "2" > "12" // true потому что первый символ 2 больше первого символа 1
	// undefined == null // true оба ложных возвращают true
	// undefined === null // false потому что относятся к разным типам
	// null == "\n0\n" // false потому что null == только undefined
	// null === +"\n0\n " // false потому что строгое равенство разных типов


// task 8
	/*	let name = prompt("Как тебя зовут?", "");
	alert(name);*/


// task 9
	// if ("0") {
	//  alert( ' Привіт');
	// } // выведется потому что "0" - это строка и она не пустая,поэтому расценивается как true и alert выведется


// task 10
	/*	let name = prompt('Яка «офіційна» назва JavaScript?' , '');
	if(name == "ECMAScript") {
		alert('Правильно!')
	} else {
		alert('Не знаєте? ECMAScript!');
	}*/	


// task 11
	/*let number = prompt( 'Введите число', '');
	if(number>0) {
		alert('1');
	} else if(number<0) {
		alert('-1');
	} else  {
		alert('0');
	}*/


// task 12
	/*let result;
	result = (a + b < 4) ? 'Мало' : 'Много';*/


// task 13
/*	let message = (login == ' Співробітник ') ? ' Привіт ' :
  (login == ' Директор ') ? ' Добрий день! ' :
  (login == '') ? ' Відсутній логін ' :
  '';*/


 // task 14
 		// alert( null || 2 || undefined );// выведет 2 потому что это первое значение которое даст true


// task 15
	// alert(alert (1) || 2 || alert(3));// Выведет 1,затем 2. Первый оператор || выполнит alert(1), получит undefined и пойдёт дальше, ко второму операнду.
	/* Второй операнд 2 является истинным, и вычисления завершатся  результатом undefined || 2будет 2, которое будет выведено внешним alert( .... ).
	Второй оператор || не будет выполнен, выполнение до alert(3) не дойдёт, поэтому 3 выведено не будет.*/


// task 16
	// alert(1 && null && 2);// null выведет так как оператор && вычисляет операнды до первого ложного и возвращает его


// task 17
	// alert(alert(1) && alert(2));// сначала 1, потом undefined. alert не возвращает значения,поэтому вычисления до второго alert не дойдут и завершатся на первом		
	

// task 18
	// alert(null || 2 && 3 || 4 );// ответ 3.Сначала выполнится с &&: 2 && 3 = 3, а затем null || 3 || 4  и 3 будет первым истинным


// task 19
	// if (age >= 14 && age <= 90)


// task 20
/*	1. if (!(age >= 14 && age <= 90))
	2. if (age < 14 || age > 90)	*/


 // task 21
 /*	if (-1 || 0) alert( 'first'); // выполняется. -1 || 0 = -1 то есть правдивый
	if (-1 && 0) alert( 'second' );// не выполняется -1 && 0 = 0 ошибочный
	if (null || -1 && 1) alert('third' );*/ // выполняется. -1 && 1 = 1. null || -1 && 1 = null || 1 = 1 выполняется


// task 22
/*	let name = prompt( 'Кто вы?', '');
	if( name === 'Admin') {
		let password = prompt('Введите пароль' , '');
		if(password === 'я головний') {
			alert('Здрастуйте!');
		} else if(password === '' || password === null) {
			alert('Скасовано');
		} else {
			alert('Невірний пароль');
		
		}

	} else if (name === '' || name === null) {
  alert( 'Скасовано' );
} else {
  alert( 'Я вас не знаю' );
}	*/


// task 23
/*	if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser === 'Chrome'|| browser === 'Firefox'|| browser === 'Safari'|| browser === 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}*/


// task 24
/*	let a = +prompt( 'a?', '');
	switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
  alert(1);
  break;

  case 2:
  alert(2,3);
  break;  
}*/


// task 25
/*	let a = +prompt('');
	if (a>0){
		alert(++a);
	} else {
		alert(a);
	}*/


// task 26
	// let a = +prompt('');
	// if (a>0){
	// 	alert(++a);
	// } else {
	// 	alert(a - 2);
	// }	


// task 27
/*	let a = +prompt('');
	if (a >0){
		alert(++a);
	}  else if(a === 0) {
		alert(10);
	} else {
		alert(a-2);
	}	*/


// task 28
/*let array = [-3, 2, 7];
let count = 0;
for (const i of array) {
	if (i>0) {
		count++;
	} 	
 
} 
 console.log('Количество положительных', count);
*/


// task 29 
/*let a = +prompt('Введите первое число:' , '');
let b = +prompt('Введите второе число:' , '');
let c = +prompt('Введите третье число:' , '');
let array = [a, b, c];
let count = 0;
let negativ = 0	
for (const i of array) {
	if (i > 0) {
		 count++;
	} 
	else if (i < 0) {
		negativ++;
	} 
} 
alert(`Количество положительных ${count} `);
alert(`Количество отрицательных ${negativ} `);*/



// task 30
// 1-й вариант решения
/*let a = +prompt('Введите первое число:' , '');
let b = +prompt('Введите второе число:' , '');
if (a>b) {
	alert(`большее число ${a} `);
} else if(a<b) {
	alert(`большее число ${b} `);
}*/

// 2-й вариант решения
// let a = +prompt('Введите первое число:' , '');
// let b = +prompt('Введите второе число:' , '');
// const bigValue = Math.max(a, b);
// alert(`Большее число: ${bigValue}`)


// task 31
	/*let a = prompt('Введите первое число:' , '');
	let b = prompt('Введите второе число:' , '');
	const smallValue = Math.min(a,b);
	alert(`Меньшее число: ${smallValue}`)*/

// task 32
/*let a = +prompt('Введите первое число:' , '');
let b = +prompt('Введите второе число:' , '');
if (a>b) {
	alert(`большее число ${a} `);
	alert(`меньшее число ${b} `);
} else if(a<b) {
	alert(`большее число ${b} `);
	alert(`меньшее число ${a} `);

}*/


// task 33
/*let a = prompt('Введите первое число:' , '');
let b = prompt('Введите второе число:' , '');
const bigValue = Math.max(a, b);
const minValue = Math.min(a, b);
console.log('Big',bigValue);
console.log('min',minValue);
a = minValue;
b = bigValue;
alert(`a =  ${a}:меньшее число, b = ${b}:большее число `);
*/


// task 34
/*let a = +prompt('Введите первое число', '');
let b = +prompt('Введите второе число', '');
const first = a;
const second = b;
if (a !== b) {
	a = first + second;
	b = first + second;
} else {
	a = 0;
	b = 0;
}
alert(` a = ${a}`);
alert(` b = ${b}`);*/


// task 35
/*let a = +prompt('Введите первое число', '');
let b = +prompt('Введите второе число', '');
const bigValue = Math.max(a,b);
if (a !== b) {
	a = bigValue;
	b = bigValue;
} else {
	a = 0;
	b = 0;
}
alert(`A = ${a}`);
alert(`B = ${b}`);*/


// task 36
/*let a = +prompt('Введите первое число', '');
let b = +prompt('Введите второе число', '');
let c = +prompt('Введите третье число', '');
const minValue = Math.min(a,b,c);
if (a<b && a<c){
	a = minValue;
} else if (a>b && b<c) {
	b = minValue;
} else {
	c = minValue;
}
alert(`Меньшее число: ${minValue}`);*/


// task 37
/*let a = +prompt('Введите первое число', '');
let b = +prompt('Введите второе число', '');
let c = +prompt('Введите третье число', '');
const bigValue = Math.max(a, b, c);
const minValue = Math.min(a, b, c);
if (a !== bigValue && a !== minValue){
	alert(`A ${a} среднее число`);
} else if (b !== bigValue && b !== minValue) {
	alert(`B ${b} среднее число`);
} else {
		alert(`C ${c} среднее число`);
}*/


// task 38
/*let a = +prompt('Введите первое число', '');
let b = +prompt('Введите второе число', '');
let c = +prompt('Введите третье число', '');
const bigValue = Math.max(a, b, c);
const minValue = Math.min(a, b, c);
alert(`Наименьшее число ${minValue}`);
alert(`Наибольшее число ${bigValue}`);*/


// task 39
/*let a = +prompt('Введите первое число', '');
let b = +prompt('Введите второе число', '');
let c = +prompt('Введите третье число', '');
const minValue = Math.min(a, b, c);
let res;
if (a == minValue) {
	res = b + c;
	
} else if (b == minValue) {
	 res = a + c;
	 
} else {
	res = a + b;
}
alert(`Сумма наибольших: ${res}`);*/


// task 40
/*let a = +prompt('Введите первое число', '');
let b = +prompt('Введите второе число', '');
let c = +prompt('Введите третье число', '');
if (a == b){
	alert(`${c}`);
} else if (a == c) {
	alert(`${b}`);
} else {
	alert(`${a}`);
}*/


