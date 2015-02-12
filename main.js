angular
.module('appname', ['ngRoute'])
.config(function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.when('/', {
    templateUrl:'main.html',
  });
})
