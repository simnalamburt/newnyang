angular
.module('appname', ['ngRoute'])
.config(function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/', {
    templateUrl:'main.html',
  })
  .when('/about', {
    templateUrl:'about.html',
  })
  .when('/news', {
    templateUrl:'news.html',
  })
  .when('/contact', {
    templateUrl:'contact.html',
  });
})
