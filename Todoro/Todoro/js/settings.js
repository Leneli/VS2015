'use strict';

var body = document.body,
    flyout_settings = document.querySelector('#flyout_settings'),
    themes = document.querySelector('#themes'),
    work = document.querySelector('#work-time'),
    coffee = document.querySelector('#break-time'),
    text = document.querySelector('#text'),
    timeWork = 1500000,  //25
	timeCoffee = 300000; //5

function UpdateSettings() { //запускается при нажатии на "ОК" во вкладке "Settings"
    body.classList.remove('red');
    body.classList.remove('green');
    body.classList.remove('blue');

    for (var i = 0; i < themes.children.length; i++) { //выбор цветовой темы
        if (themes.children[i].selected === true) {
            body.classList.add(themes.children[i].value);
        }
    }

    for (var i = 0; i < work.children.length; i++) { //устанавливаем время работы
        if (work.children[i].selected === true) {
            timeWork = work.children[i].value;
            minute.innerText = timeWork;

            timeWork *= 60000;
        }
    }

    for (var i = 0; i < coffee.children.length; i++) { //устанавливаем время перерыва
        if (coffee.children[i].selected === true) {
            timeCoffee = coffee.children[i].value * 60000;
        }
    }
};

