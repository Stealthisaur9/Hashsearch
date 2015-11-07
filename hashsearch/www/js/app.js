var app = angular.module('mainCtrl', ['ionic'])

app.run(function($ionicPlatform,$state) {
  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    $state.go('home');
  });
})

app.config(['$stateProvider',function($stateProvider){
        $stateProvider.state('home',{
            url:'/home',
            controller:'mainCtrl',
            templateUrl:'views/home.html'
        });
}]);
