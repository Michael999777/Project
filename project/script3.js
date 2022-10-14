

let question = ['1. Кто друг крокодила Гены?', '2. Кто, в конце концов, скушал Колобка?','3. Как зовут богиню шахмат?','4. Год распада Римской империи?','5. Главный герой в романе «Преступление и наказание»?','6. В каком году Тайсон откусил ухо?','7. Кто  здесь лишний?','8. Кто родил колобка?','9. Кто изобрел радио?','10. Сколько всего пальцев у кошки?','11. В каком городе находится штаб-квартира Microsoft?','12. Какого цвета волосы у Николь Кидман?','13. Ричард Львиное Сердце был пленен во время','14. В каком году придумали Java Script?','15. В каком году придумали интернет?'];
let answer = ['Волк','Чебурашка','Заяц','Лиса',  'Дед','Баба','Заяц','Лиса', 'Лакшми','Шакти','Парвати','Каисса', '50 до н.э','50 н.э','476 н.э','476 до н.э', 'Расторгуев','Чикатило','Тумбочкин','Раскольников', '1996','1997','1995','1998', 'Волк','Собака ','Заяц','Червь', 'Внучка','Бабка','Бабка и Дедка','Дедка', 'Попов','Золотов','Преображенский','Ухов', '20','18','16','14', 'Нью-Йорк','Ричмонд','Новый Орлеан','Сан-Франциско', 'Русые','Черные','Блонда','Рыжие', 'крестового похода','столетней войны','войны алой и белой розы','войны за независимость', '1994','1995','1996','1997', '1979','1969','1989','1999'];
let key = [1, 3, 3, 2, 3, 1, 3, 2, 0, 1, 1, 3, 0, 1, 1];

let level = 0;

let name = 'name';	
let username = readCookie(name);

if (username != null) 
{	
	$('.start').css('display', 'none');
	$('.reStart').css('display', 'block');
	$('.hellow').text('С возвращением, ' + username + '!');

	$('#startGame').click(function() {
	
		$('.reStart').css('display', 'none');
		setTimeout(timer,1000);

	});
}

function show(level) {

	$('.question').text( question[level] );
	$('label[for=answer1]').text( answer[level*4+0] );
	$('label[for=answer2]').text( answer[level*4+1] );
	$('label[for=answer3]').text( answer[level*4+2] );
	$('label[for=answer4]').text( answer[level*4+3] );

}

let resultConst = [];		
show(level);
let tr = $('tr'); 
$(tr[tr.length - (level + 1)]).css('background','red');

$('.btn').click(function(){

	$("#timer_inp").text(60);

	if( $('input[name=answer]:checked').val() == key[level] )
	{
		level++;
		show(level);
	}
	else{gameOwer()}
	
	$('input').prop('checked', false);
	$(tr.css('background','#fff'));
	$(tr.removeClass('result'));
	$(tr[tr.length - (level + 1)]).css('background','red');
	$(tr[tr.length - (level)]).css('color','#f0f');
	$(tr[tr.length - (level)]).addClass('result');
	$('label').css('color', '#555');

	if (level == 5 || level == 10 || level == 15) 
	{
		 resultConst.push($(tr[tr.length - (level)]).addClass('resultConst'));
	} else {return;}
})

Math.rand = function(min, max){
	return Math.round(Math.random() * (max-min) + min);
}

let inputLabel = document.getElementsByTagName('label');
$('.round50').click(function(){
let inputAnswer = document.getElementsByName('answer');
let exp = [];	
let count = 0;
	while(count < 2) {
		let index = Math.rand(0,3);
		if (exp.indexOf(index) == -1 && $(inputAnswer[index]).val() != key[level] ) 
		{
			$(inputLabel[index]).css('color', '#69f');
			count++;
			exp.push(index);
		}
	}
		$(this).off('click');
		$(this).css('background', 'red');
})
	 

$('.round').click(function(){
		
		$(inputLabel[Math.rand(0,3)]).css('color', '#F90'),
		$(this).off('click');
		$(this).css('background', 'red');
		
})

let result = $('.result'); 
$('.roundEnd').click(function(){

	end();

})


function end() {

	$('.end').css('display', 'block');

	if (tr.hasClass('result')) 
	{
		let tdResult = $("tr.result").children();
		let tdText = tdResult[1].textContent;	
		$('.showResult').text('ВЫ ВЫИГРАЛИ: ' + tdText + ' гривень');
	}
}

function gameOwer() {

	$('.end').css('display', 'block');

	if (tr.hasClass('resultConst')) 
	{
		let tdResult1 = $(resultConst[resultConst.length - 1]).children();
		let tdText1 = tdResult1[1].textContent;
		$('.showResult').text('ВЫ ВЫИГРАЛИ: ' + tdText1 + ' гривень');
	}
}

function timer(){

	 let objTimer=document.getElementById('timer_inp');
	 objTimer.innerHTML--;
  	
  	 if(objTimer.innerHTML==5)
	 	{
	 	$('#timer_inp').css('background', 'red');
	 	}
	 if(objTimer.innerHTML==0)
		{
	 	setTimeout(function(){},1000);
	 	gameOwer();
		}
	 else{setTimeout(timer,1000)}

}

$('form').submit(function(e){ 

		e.preventDefault()
	
});

$('#start').click(function(){

	if ($('#user').val() != '') 
	{
		$('.start').css('display', 'none');
		setTimeout(timer,1000);
	}
	else
	{
		$('#user').css('background', '#f30')
	}	

	let value = $('#user').val();

	createCookie(name, value, 1);

});

function createCookie(name, value, days) {
    if (days) 
    {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 *1000));
        let expires = "; expires=" + date.toGMTString();
    }
    else 
    {
        let expires = "";
    }
   
}

function readCookie(name) {

    let nameEQ = name + "=";
    let ca = document.cookie.split(';');

    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
        	let value = c.substring(nameEQ.length,c.length);
            return value.split(",");
        }
    }
    return null;
}
