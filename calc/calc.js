$(document).ready(function() { // Ждём загрузки страницы	   
	$("input[name=send]").click( function () { // Событие нажатия на кнопку "Расчёт"
		let action = $("select[name=action]").val(); // Получаем значение действия, которое нужно выполнить
		let first = $("input[name=first]").val() * 1; // Переменная первого числа
		let second = $("input[name=second]").val() * 1; // Переменная второго числа
		let result; // Переменная результата
		if (action == '+') { // Если действие - сложение
			result = first + second; //  складываем
		}
		else if (action == '-'){ // Если действие вычитание
			result = first - second; // вычитаем
		}
		else if (action == '*'){ // Если действие умножение
			result = first * second; // умножаем
		}
		else if (action == '/'){ // Если действие деления
			result = first / second; // делим
		}
		$("input[name=result]").val(result); // записываем результат
	});
});


$(document).ready(function() { // Ждём загрузки страницы	
						   
	$("[data-description]").mouseenter( function () { // Событие наведения на элемент с подсказкой
		var div = document.createElement('div'); // Создаем новый элемент
		$(div).addClass("data-description"); // Добавляем блоку с подсказкой класс, чтобы придать ему необходимый стиль
		$(div).append($(this).attr("data-description")); // Достаем текст подсказки и добавляем его в блок
		$(this).append(div); // Добавляем блок с подсказкой внутрь элемента
	});
	
	$("[data-description]").mouseleave( function () { // Событие снятия наведения на элемент с подсказкой
		$(this).children(".data-description").remove(); // Удаляем блок с подсказкой
	});
});


window.onload = function() // дожидаемся загрузки страницы
{
     initializeTimer(); // вызываем функцию инициализации таймера
}


function initializeTimer() {
	var endDate = new Date(2020,9,31,8,31); // получаем дату истечения таймера
	var currentDate = new Date(); // получаем текущую дату
	var seconds = (endDate-currentDate) / 1000; // определяем количество секунд до истечения таймера
	if (seconds > 0) { // проверка - истекла ли дата обратного отсчета
		var minutes = seconds/60; // определяем количество минут до истечения таймера
		var hours = minutes/60; // определяем количество часов до истечения таймера
		minutes = (hours - Math.floor(hours)) * 60; // подсчитываем кол-во оставшихся минут в текущем часе
		hours = Math.floor(hours); // целое количество часов до истечения таймера
		seconds = Math.floor((minutes - Math.floor(minutes)) * 60); // подсчитываем кол-во оставшихся секунд в текущей минуте
		minutes = Math.floor(minutes); // округляем до целого кол-во оставшихся минут в текущем часе
		
		setTimePage(hours,minutes,seconds); // выставляем начальные значения таймера
		
		function secOut() {
		  if (seconds == 0) { // если секунду закончились то
			  if (minutes == 0) { // если минуты закончились то
				  if (hours == 0) { // если часы закончились то
					  showMessage(timerId); // выводим сообщение об окончании отсчета
				  }
				  else {
					  hours--; // уменьшаем кол-во часов
					  minutes = 59; // обновляем минуты 
					  seconds = 59; // обновляем секунды
				  }
			  }
			  else {
				  minutes--; // уменьшаем кол-во минут
				  seconds = 59; // обновляем секунды
			  }
		  }
		  else {
			  seconds--; // уменьшаем кол-во секунд
		  }
		  setTimePage(hours,minutes,seconds); // обновляем значения таймера на странице
		}
		timerId = setInterval(secOut, 1000) // устанавливаем вызов функции через каждую секунду
	}
	else {
		alert("Установленная дата уже прошла");
	}
}

function setTimePage(h,m,s) { // функция выставления таймера на странице
	var element = document.getElementById("timer"); // находим элемент с id = timer
	element.innerHTML = "Часы:"+h+"<br>Минуты:"+m+"<br>Секунды:"+s; // выставляем новые значения таймеру на странице
}

function showMessage(timerId) { // функция, вызываемая по истечению времени
	alert("Время истекло!");
	clearInterval(timerId); // останавливаем вызов функции через каждую секунду
}