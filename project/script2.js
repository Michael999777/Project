const minEl = document.querySelector('#min');

const maxEl = document.querySelector('#max');
const amount= document.querySelector('#count');
const button = document.querySelector('#btn');
const res = document.querySelector('#result');

	function getRandom(min, max) {
		if (max > min) {
   	return Math.floor(Math.random() * (max - min)) + min;
   } else { return 'Ошибка'};
}

	button.addEventListener('click', function(event) {

	for (var i = 0; i < amount.value; i++) {
		const liEl = document.createElement("li");
		const a = getRandom(Number(minEl.value), Number(maxEl.value));
		res.append(liEl);
		liEl.append(a);
	}

  document.body.classList.add("active_result");
});

