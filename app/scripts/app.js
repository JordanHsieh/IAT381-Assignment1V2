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
      .when('/createQuiz', {
        templateUrl: 'views/createQuiz.html',
        controller: 'CreateQuizCtrl'
      })
      .when('/mainQuiz', {
        templateUrl: 'views/mainQuiz.html',
        controller: 'MainQuizCtrl'
      })
      .when('/menuV2', {
        templateUrl: 'views/menuV2.html',
        controller: 'MenuV2Ctrl'
      })
      .when('/mainQuizV2', {
        templateUrl: 'views/mainQuizV2.html',
        controller: 'MainQuizV2Ctrl'
      })
      .when('/mainQuizV3', {
        templateUrl: 'views/mainQuizV3.html',
        controller: 'MainQuizV3Ctrl'
      })
      .when('/quiz/:question', {
        templateUrl : 'views/quiz.html',
        controller  : 'QuizCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  //keep some variables in the APP namespace

  APP.quiz = []; //empty until we go to make quiz and save first question
