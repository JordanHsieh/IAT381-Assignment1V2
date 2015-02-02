'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:ViewQuizCtrl
 * @description
 * # ViewQuizCtrl
 * Controller of the myappApp
 */

var APP = angular.module('myappApp');

APP.controller('ViewQuizCtrl', function ($scope) {

  // console.log($scope);
  var viewQuestions = {
    q1: {
      question: APP.questions[0].question,
      id: APP.questions[0].id,
      answers: [APP.answers[0].answers[0], APP.answers[0].answers[1], APP.answers[0].answers[2], APP.answers[0].answers[3]],
      correct: APP.answers[0].correct
    }
    // q2: {
    //   question: APP.questions[1].question,
    //   id: APP.questions[1].id,
    //   answers: [APP.answers[1].answers[0], APP.answers[1].answers[1], APP.answers[1].answers[2], APP.answers[1].answers[3]],
    //   correct: APP.answers[1].correct
    // },
    // q3: {
    //   question: APP.questions[2].question,
    //   id: APP.questions[2].id,
    //   answers: [APP.answers[2].answers[0], APP.answers[2].answers[1], APP.answers[2].answers[2], APP.answers[2].answers[3]],
    //   correct: APP.answers[2].correct
    // },
    // q4: {
    //   question: APP.questions[3].question,
    //   id: APP.questions[3].id,
    //   answers: [APP.answers[3].answers[0], APP.answers[3].answers[1], APP.answers[3].answers[2], APP.answers[3].answers[3]],
    //   correct: APP.answers[3].correct
    // },
    // q5: {
    //   question: APP.questions[4].question,
    //   id: APP.questions[4].id,
    //   answers: [APP.answers[4].answers[0], APP.answers[4].answers[1], APP.answers[4].answers[2], APP.answers[4].answers[3]],
    //   correct: APP.answers[4].correct
    // }
  };


});