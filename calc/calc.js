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


