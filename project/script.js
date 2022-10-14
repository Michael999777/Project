
const calc = document.querySelector('.calc');
const result = document.querySelector('#result');

calc.addEventListener('click', function(event) {

	if (!event.target.classList.contains('calc_btn'))
	 return;
	const value = event.target.innerText;


switch(value) {
	case 'c':
	result.innerText = '';
	break;

	case '=':
	result.innerText = eval(result.innerText);
	break;

	case '%':

	let resultArr = [];
	let action = '';
	if (result.innerText.includes('+')) {
		action = '+';
		resultArr = result.innerText.split('+');
	} else if (result.innerText.includes('-')) {
		action = '-';
		resultArr = result.innerText.split('-');
	}

	else if (result.innerText.includes('*')) {
		action = '*';
		resultArr = result.innerText.split('*');
	} else if (result.innerText.includes('/')) {
		action = '/';
		resultArr = result.innerText.split('/');
	} 
	const lastEl = resultArr.length !== 0 ? resultArr.pop() : result.innerText;
	const a = lastEl * 0.01;
	if (action === '*' || action === '/') {
		result.innerText = `${resultArr[0]}${action}${a}`;
	} else if (action === '+' || action === '-') {
		const percentage = resultArr[0] * a; 
		result.innerText = `${resultArr[0]}${action}${percentage}`;
	} else {
		result.innerText = `${a}`;
	}
	break;


	default:
		result.innerText = result.innerText + value;



}
	


});