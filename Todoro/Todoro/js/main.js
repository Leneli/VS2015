(function () {
  'use strict';
  var app = WinJS.Application;
  var activation = Windows.ApplicationModel.Activation;
  app.onactivated = function (args) {
    if (args.detail.kind === activation.ActivationKind.launch) {
      if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
        // TODO: это приложение только что запущено. Инициализируйте здесь свое приложение.
      } else {
        // TODO: это приложение было повторно активировано из приостановленного состояния.
        // Место для восстановления состояния приложения.
      }
      args.setPromise(WinJS.UI.processAll().then(function() {
          // TODO: место для кода.

          //AppBar
            var my_AppBar = new WinJS.UI.AppBar(),
                  play = document.querySelector('#play'),
                  stop = document.querySelector('#stop'),
                  settings = document.querySelector('#settings'),
                  settings_ok = document.querySelector('#settings_ok');

            settings_ok.addEventListener('click', UpdateSettings);

            play.addEventListener('click', function () {
                play.disabled = true;
                settings.disabled = true;
                PlayTimer();
            });

            stop.addEventListener('click', function () {
                play.disabled = false;
                settings.disabled = false;
                clearInterval(intervalID);
                PrintTime(timeWork);
            });

      }));
    }
  };
  app.oncheckpoint = function (args) {
    // TODO: действие приложения будет приостановлено. Сохраните здесь все состояния, которые понадобятся после приостановки.
    // Вы можете использовать объект WinJS.Application.sessionState, который автоматически сохраняется и восстанавливается после приостановки.
    // Если вам нужно завершить асинхронную операцию до того, как действие приложения будет приостановлено, вызовите args.setPromise().
  };
  app.start();
}());
