var minute = document.querySelector('#minute'),
    second = document.querySelector('#second'),
    timePrevent = 60000, // 1m = 60000
    popup = false,
    intervalID;


function PlayTimer() { //таймер запущен
    
    PrintTime(timeWork);

    

    var t = timeWork;
    intervalID = setInterval(function () {
        t -= 1000;
        PrintTime(t);

        //if (t === timePrevent) { //за минуту до конца отсчета - предупреждение 
        //  alert('START!');  ?????????????????????? окно должно появиться в правом нижнем углу экрана поверх всех окон и исчезнуть секунд через 5
        //}

        if (t < 1000) {
            clearInterval(intervalID);
            AddAudio();






            function cancelCommand_Click() {
                // Create the message dialog and set its content
                var msg = new Windows.UI.Popups.MessageDialog(
                    "No internet connection has been found.");

                // Add commands and set their command handlers
                msg.commands.append(new Windows.UI.Popups.UICommand(
                    "Try again",
                    commandInvokedHandler));
                msg.commands.append(
                    new Windows.UI.Popups.UICommand("Close", commandInvokedHandler));

                // Set the command that will be invoked by default
                msg.defaultCommandIndex = 0;

                // Set the command to be invoked when escape is pressed
                msg.cancelCommandIndex = 1;

                // Show the message dialog
                msg.showAsync();
            }

            cancelCommand_Click();

            function commandInvokedHandler(command) {
                // Display message
                WinJS.log && WinJS.log("The '" + command.label + "' command has been selected.",
                "sample", "status");
            }









        };

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