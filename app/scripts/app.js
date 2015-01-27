'use strict';

/**
 * @ngdoc overview
 * @name myappApp
 * @description
 * # myappApp
 *
 * Main module of the application.
 */
var APP = angular
  .module('myappApp', [
    'ngMaterial',
    'ngAnimate',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl'
      })
      .when('/mainQuiz', {
        templateUrl: 'views/mainQuiz.html',
        controller: 'MainQuizCtrl'
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
      .when('/menuV2', {
        templateUrl: 'views/menuV2.html',
        controller: 'MenuV2Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  //keep some variables in the APP namespace

  APP.results = [];

  APP.questions = [];
  APP.answers = [];

