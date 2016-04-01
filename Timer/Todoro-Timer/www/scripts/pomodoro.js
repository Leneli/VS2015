var play = document.getElementById('play-timer'),
    minute = document.getElementById('minute'),
	second = document.getElementById('second'),
    popup = document.getElementById('popup'),
    message = document.getElementById('message'),
    addTime,
    timeWork = 5000, //25m = 1500000
	timeCoffee = 3000, //5m = 300000
    messageWork = "<i class='material-icons'>work</i> It's time to work!",
    messageCoffee = "<i class='material-icons'>free_breakfast</i> Coffee break!",
    intervalID,
    i = 0; //счетчик кликов по таймеру


play.addEventListener('click', playPomodoro);

popup.getElementsByTagName('button')[0].addEventListener('click', removePopup);
popup.getElementsByTagName('button')[1].addEventListener('click', cancelTimer);

function playPomodoro() {
    ++i;

    if (i % 2 !== 0) { //по первому клику - таймер [пере]запущен
        addTime = timeWork; //задаем время работы
        message.innerHTML = messageCoffee;

        play.children[0].textContent = 'loop';
        printTime(addTime);
        startTimer(addTime);
    }

    else { //по второму клику - таймер отключен
        play.children[0].textContent = 'play_circle_outline';
        clearInterval(intervalID);
        printTime(timeWork);
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

    intervalID = setInterval(function () {
        t -= 1000;
        printTime(t);

        if (t < 1000) {
            clearInterval(intervalID);
            popup.classList.add('block');
            addAudio();
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
    play.children[0].textContent = 'play_circle_outline';
    clearInterval(intervalID);
    addTime = timeWork;
    printTime(timeWork);
    popup.classList.remove('block');

    i = 0; //обнуление счетчика кликов
};
