angular.module('codebetter.controllers.mainAppController', [])
.controller('mainAppController', function($scope, $window) {

	var historyOfUserNavigation = [];

	var prefix = getPrefixCrossBrowser();
	var views = 0;

	function initializer() {
		checkUserConnection();
		setScopeFunctions();

		setTimeout(function() {
			addHistory();
			performancePage();
			onVisibilityPage();
		}, 100);
	}

	function getPrefixCrossBrowser() {
		var prefixBrowser = null;
        if (document.hidden !== undefined)
          prefixBrowser = '';
        else {
          var browserPrefixes = ['webkit','moz','ms','o'];
          for(var i = 0; i < browserPrefixes.length; i++) {
            if (document[browserPrefixes[i] + 'Hidden'] !== undefined) {
              prefixBrowser = browserPrefixes[i];
            }
          }
        }
        return prefixBrowser;
	}

	function countView() {
		if (document.hidden === false || document[prefix + 'Hidden'] === false)
		  views++;

		console.log('Views count is: ' + views + ' // VisibilityStateAPI is: ' + document[(prefix === '' ? 'v' : prefix + 'V') + 'isibilityState']);
	}

	function onVisibilityPage() {
        if (prefix === null)
          console.warn('Your browser does not support Page Visibility API');
        else {
          document.addEventListener(prefix + 'visibilitychange', countView);
          countView();
        }
	}

	function performancePage() {
		var t = $window.performance.timing;

	    console.log('Latência (t.responseEnd - t.fetchStart): ', t.responseEnd - t.fetchStart);
	    console.log('Carregamento da página (t.loadEventEnd - t.responseEnd): ', t.loadEventEnd - t.responseEnd);
	    console.log('Todo processo de navegação (t.loadEventEnd - t.navigationStart): ', t.loadEventEnd - t.navigationStart);
	}

	function checkUserConnection() {
		if (!navigator.onLine) {
			alert('Sua conexão com a internet falhou. Verifique sua conexão por favor.');
			console.log('usuário offline');
		}
	}

	function addHistory() {
		var linksPageNavigation = document.querySelectorAll('a');
		for (var i = 0; i < linksPageNavigation.length; i++) {
	      linksPageNavigation[i].addEventListener('click', historyNavigationHandler, true);
	    }
	}

	function historyNavigationHandler(event) {
		var data = event.target.getAttribute('href').split('/').pop();

		history.pushState({navigation: [data]}, data, event.target.href);
		var stateHistorty = history.state.navigation[0];

		historyOfUserNavigation.push(stateHistorty);
		localStorage.setItem('navigationHistory', JSON.stringify(historyOfUserNavigation));
	}

	function toggleFullscreen() {
		var changeBtn = document.getElementById('btnFullScreen');

		if (!document.fullscreenElement &&
		  !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
			changeBtn.firstChild.data = 'off full screen';
			changeBtn.classList.remove('btn-info');
			changeBtn.classList.add('btn-danger');
			if (document.documentElement.requestFullscreen) {
			  document.documentElement.requestFullscreen();
			} else if (document.documentElement.msRequestFullscreen) {
			  document.documentElement.msRequestFullscreen();
			} else if (document.documentElement.mozRequestFullScreen) {
			  document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullscreen) {
			  document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
			}
		} else {
			changeBtn.firstChild.data = 'Full screen';
			changeBtn.classList.remove('btn-danger');
			changeBtn.classList.add('btn-info');
			if (document.exitFullscreen) {
			  document.exitFullscreen();
			} else if (document.msExitFullscreen) {
			  document.msExitFullscreen();
			} else if (document.mozCancelFullScreen) {
			  document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
			  document.webkitExitFullscreen();
			}
		}
	}

  function notifyMe() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification('Crie suas tasks!', {
        body : 'Olá Yoseph! Aqui você pode criar suas tarefas mensais e suas tarefas do dia a dia.',
        icon : '../../img/msg.png',
        tag: 'minhaFoto'
      });
    }

    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          var notification = new Notification("Olá! Espero que goste do produto.");
        }
      });
    }
  }

  Notification.requestPermission().then(function(result) {
    console.log(result);
  });

	function setScopeFunctions() {
		$scope.toggleFullscreen = toggleFullscreen;
    $scope.notifyMe = notifyMe;
	}

	return initializer();
});
