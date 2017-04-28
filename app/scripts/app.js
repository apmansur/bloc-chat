 (function () {
     function config($stateProvider, $locationProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
             });
         $stateProvider
             .state('chat', {
                 url: '/',
                 controller: 'ChatCtrl as chat',
                 templateUrl: '/templates/chat.html'
             });
     }

     function BlocChatCookies($cookies, $uibModal) {
         var currentUser = $cookies.get('blocChatCurrentUser');

         if (!currentUser || currentUser === '') {
             var modalInstance = $uibModal.open({
                 templateUrl: '/templates/username.html',
                 controller: 'CookiesInstanceCtrl',
                 controllerAs: 'modalUser'
             });

             modalInstance.result.then(function (username) {
                 this.username = username;
                 $cookies.put('blocChatCurrentUser', this.username);
                 var currentUser = $cookies.get('blocChatCurrentUser');
                 console.log(currentUser);
             });
         }
     }


     angular
         .module('blocChat', ['ngCookies', 'ui.bootstrap', 'ui.router', 'firebase'])
         .config(config)
         .run(['$cookies', '$uibModal', BlocChatCookies]);
 })();
