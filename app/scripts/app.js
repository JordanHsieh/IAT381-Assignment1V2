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
    'ui.bootstrap',
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
      .when('/quiz/:question', {
        templateUrl : 'views/quiz.html',
        controller  : 'QuizCtrl'
      })
      .when('/viewQuiz', {
        templateUrl : 'views/viewQuiz.html',
        controller  : 'ViewQuizCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  //keep some variables in the APP namespace

  APP.questions = []; //empty until we go to make quiz and save first question
  APP.answers = [];
  APP.progressValue = 0;