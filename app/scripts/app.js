'use strict';

/**
 * @ngdoc overview
 * @name myappApp
 * @description
 * # myappApp
 *
 * Main module of the application.
 */
angular
  .module('myappApp', [
    'ngAnimate',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/questionTwo', {
        templateUrl: 'views/questionTwo.html',
        controller: 'QuestionTwoCtrl'
      })
      .when('/questionThree', {
        templateUrl: 'views/questionThree.html',
        controller: 'QuestionThreeCtrl'
      })
      .when('/questionFour', {
        templateUrl: 'views/questionFour.html',
        controller: 'QuestionFourCtrl'
      })
      .when('/questionFive', {
        templateUrl: 'views/questionFive.html',
        controller: 'QuestionFiveCtrl'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
