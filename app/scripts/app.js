'use strict';

angular.module('angular2App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/chuck', {
        templateUrl: 'views/chuck.html',
        controller: 'ChuckCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
