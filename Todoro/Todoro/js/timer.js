var minute = document.querySelector('#minute'),
    second = document.querySelector('#second'),
    background = document.querySelector('#pomodoro-background'),
    timeWork = 1500000, //   25m = 1500000
	timeCoffee = 300000, //  5m = 300000
    timePrevent = 180000, // 3m = 180000
    bgWidth = 0, // width for background
    intervalID;
    i = 0; //счетчик кликов по таймеру



function PlayTimer() { //по первому клику - таймер [пере]запущен
    ++i;

    if (i % 2 !== 0) {
        printTime(timeWork);

        background.style.width = bgWidth + 'px';
        background.classList.add("red");
        background.classList.remove("green");

        startTimer(10000);

        //bgWidth += 1 / (timeWork/1000);
    }

    else { //по второму клику - таймер отключен
        background.classList.remove("red");

        clearInterval(intervalID);
        printTime(timeCoffee);
    }
};

/*
  Functions
*/

//Вывод времени на экран
function printTime(t) {
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

function startTimer(t) { //отсчет времени
    printTime(t);
    t1 = 100 / (t / 1000);

    intervalID = setInterval(function () {

        bgWidth += t1;
        background.style.width = bgWidth + '%';

        t -= 1000;
        printTime(t);

        if (t < 1000) {
            clearInterval(intervalID);
            background.style.width = "0";
            //popup.classList.add('block');
            //addAudio();
        };

    }, 1000);
};

function addAudio() { //звуковой сигнал
    var audio = new Audio();
    audio.preload = 'auto';
    audio.src = 'audio/ring.mp3';
    audio.play();
};

function removePopup() { //убрать всплывающее окно
    popup.classList.remove('block');

    //переключение между рабочим отрезком времени и перерывом
    if (addTime === timeWork) { //пора отдохнуть
        addTime = timeCoffee;
        message.innerHTML = messageWork;
    } else { //надо работать
        addTime = timeWork;
        message.innerHTML = messageCoffee;
    }

    startTimer(addTime);
};

function cancelTimer() { //остановить таймер
    //play.children[0].textContent = 'play_circle_outline';
    clearInterval(intervalID);
    //addTime = timeWork;
    printTime(timeWork);
    //popup.classList.remove('block');
    bgWidth = 0;

    i = 0; //обнуление счетчика кликов
};

