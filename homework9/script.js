// task 1
/*function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}*/



// task 2
/*function multiplyNumeric(obj) {
  for (let i in obj) {
    if (typeof obj[i] == 'number') {
      obj[i] = obj[i] * 2;
    }
  }
}*/


// task 3
/*function readNumber() {
    let num = prompt('Введите число', '');
    if (num == '') {
      return null;
    } else if (isFinite(num) == true) {
      return num;
    }
    
  }
alert(readNumber());*/

// task 4
/*function random(min, max) {
  return min + Math.random() * (max - min);
}*/


// task 5


// task 6
/*function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("вася") );*/


// task 7
/*function checkSpam (str) {
  let a = prompt('');
  let name = 'viagra';
  let c = 'xxx';
  if (a.toLowerCase() === name || a.toLowerCase() === c ) {
    return true;
  } 
  else {
    return false;
  }
}
alert(checkSpam('str')); */


// task 8
/*function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}*/


// task 9
/*function extractCurrencyValue(str) {
  return +str.slice(1);
}
*/

// task 10
/*function sumInput() {

  let num = [];

  while (true) {

    let val = prompt("Введите число", 0);

    if (val === "" || val === null || !isFinite(val)) break;

    number.push(+val);
  }

  let sum = 0;
  for (let a of num) {
    sum += a;
  }
  return sum;
}

alert( sumInput() );*/


// task 11
/*function checkAge (age) {
if (age > 18) {
return true;
} else {
// ...
return confirm( ' Батьки дозволили ?');
 }
}

function checkAge (age) {
if (age > 18) {
return true;
}
// ...
return confirm( ' Батьки дозволили ?');
}*/
/*обе функции будут работать и разницы между ними нет, потому если первый return не выполнится,
то перейдет ко второму return и неважно есть там else или нет*/



// task 12
/*function checkAge(age) {
  return (age > 18) ? true : confirm('Батьки дозволили?');
}

function checkAge(age) {
  return (age > 18) || confirm('Батьки дозволили?');
}*/





// task 13
/*function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}*/


// task 14
/*function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt('x = ', '');
let n = prompt('n = ', '');
if (n > 1) {
  alert( pow(x, n) );
}*/




// task 15
/*function ask(question, yes, no) {
if (confirm(question)) yes( )
else no( );
}
ask (
"Ви згодні?",
  () => { alert ("Ви погодилися."); },
  () => { alert ("Ви скасували виконання."); }
);*/


// task 16
/*function total () {
    const month = 3333;
    const spending = 1750;
    const palm = 8000;
    let income = month - spending;
    let fin = palm/income;

  return Math.round(fin);
}
alert(total() + ' месяцев понадобится времени');*/

// task 17
/*let a = prompt('');
let numberArray = a.split(', ');
let sumNegativ = 0;
for (let i in numberArray) {
  if (+numberArray[i] < 0) {
  sumNegativ = sumNegativ + Number(numberArray[i]);
  } 
}
 alert(sumNegativ);
*/