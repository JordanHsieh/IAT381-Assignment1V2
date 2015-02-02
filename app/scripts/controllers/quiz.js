'use strict';

var APP = angular.module('myappApp');

APP.controller('QuizCtrl', function($scope, $route) {
  var questions = {
    q1: {
      // question: '',
      // id: 'Question 1',
      // answers: ['', '', '', ''],
      // correct: ''
      question: 'What is your name',
      id: 'Question 1',
      answers: ['Jordan', 'Jackson', 'Jennifer', 'Joanna'],
      correct: '0'
    },
    q2: {
      question: '',
      id: 'Question 2',
      answers: ['', '', '', ''],
      correct: ''
    },
    q3: {
      question: '',
      id: 'Question 3',
      answers: ['', '', '', ''],
      correct: ''
    },
    q4: {
      question: '',
      id: 'Question 4',
      answers: ['', '', '', ''],
      correct: ''
    },
    q5: {
      question: '',
      id: 'Question 5',
      // answerA: '',
      // answerB: '',
      // answerC: '',
      // answerD: '',
      answers: ['', '', '', ''],
      correct: ''
    }
  };

  console.log($route);

  var question = $route.current.params.question;
  $scope.question = questions[question];

  var count = 1;

  $scope.save = function(question) {
      console.log(this);
      //this is the button element that was clicked, this.item will be the item in scope.buttons
      // console.log(question);

      if(count === 1){

        APP.questions.push({id:question.id, question:question.question});
        APP.answers.push({id:question.id, answers:question.answers, correct:question.correct});
        count++;
      }

      console.log(APP.questions);
      console.log(APP.answers);

      $scope.master = angular.copy(question);
  };

  $scope.back = function() {
      // console.log(this);
      //this is the button element that was clicked, this.item will be the item in scope.buttons

      setTimeout(function() {
        window.location = '#/createQuiz';
      }, 400);
  };

});