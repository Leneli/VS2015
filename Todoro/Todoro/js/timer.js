'use strict';

var minute = document.querySelector('#minute'),
    second = document.querySelector('#second'),
    timePrevent = 60000, //1m = 60000, устанавливает, за сколько минут до конца "помидора" предупредить пользователя, что скоро перерыв
    popup = false,
    i = 1,
    intervalID;


function PlayTimer(t) { //таймер запущен

    PrintTime(t);

    intervalID = setInterval(function () {
        t -= 1000;
        PrintTime(t);

        if (t < 1000) {
            clearInterval(intervalID);
            AddAudio();

            if (i % 2 !== 0) {
                text.innerText = 'It is necessary to take a break :)';
                PlayTimer(timeCoffee);
                i++;
            } else {
                text.innerText = 'Need to work!';
                PlayTimer(timeWork);
                i++;
            }
            
        }

    }, 1000);

};



/*
  Functions
*/

//Вывод времени на экран
function PrintTime(t) {
    var min, sec;

    t /= 1000;

    if (t < 60) {
        min = 0;
        sec = t;
    } else {
        min = Math.floor(t / 60);
        sec = t - (min * 60);
    }

    if (min < 10) {
        minute.innerHTML = '0' + min;
    } else {
        minute.innerHTML = min;
    }

    if (sec < 10) {
        second.innerHTML = '0' + sec;
    } else {
        second.innerHTML = sec;
    }
};

function AddAudio() { //звуковой сигнал ?... иногда не срабатывает при сворачивании окна
    var audio = new Audio();
    audio.preload = 'auto';
    audio.src = 'audio/ring.mp3';
    audio.play();
};