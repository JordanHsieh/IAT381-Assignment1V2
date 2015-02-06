// question: 'What is your name',
// id: 'Question 1',
// answers: ['Jordan', 'Jackson', 'Jennifer', 'Joanna'],
// correct: '0'

'use strict';

var APP = angular.module('myappApp');

APP.controller('QuizCtrl', function($scope, $route) {
  //local questions? nope

  var questions = {
    q1: {
      question: 'Are we all going to pass this course?',
      id: 'Question 1',
      answers: ['Hopefully', 'NOPE!', 'Of Course!', 'Ehhh'],
      correct: '0'
    },
    q2: {
      question: '',
      id: 'Question 2'
    },
    q3: {
      question: '',
      id: 'Question 3'
    },
    q4: {
      question: '',
      id: 'Question 4'
    },
    q5: {
      question: '',
      id: 'Question 5'
    }
  };

  $scope.pageClass = 'quiz';

  console.log($route.current);

  
  //change this
  var question = $route.current.params.question;

  if(APP.questions.length === 0)
  {
    $scope.question = APP.questions[question];
  }
  $scope.question = questions[question];
  

  var questionCount = 0;

  //to this
  // var id = $route.current.params.id;
  // $scope.question = APP.questions[id];

  var count = 1;

  $scope.progressValue = APP.progressValue;

  $scope.save = function(question) {

      // console.log($scope.question);

      if(question.question.length === 0)
      {
        console.log('empty question');
      }
      else
      {
        if(count === 1){

          APP.questions.push({id:question.id, question:question.question, answers:question.answers, correct:question.correct});
          $scope.progressValue = $scope.progressValue + 1;
          APP.progressValue = $scope.progressValue;
          count++;
          questionCount++;
          $scope.questionCount = questionCount;
          APP.questionCount = $scope.questionCount;
          console.log(APP.questionCount);
        }
      }

      // console.log(APP.questions);
      // console.log(APP.answers);

      $scope.master = angular.copy(question);

      setTimeout(function() {
        window.location = '#/createQuiz';
      }, 400);

  };

  $scope.back = function() {
      // console.log(this);
      //this is the button element that was clicked, this.item will be the item in scope.buttons

      setTimeout(function() {
        window.location = '#/createQuiz';
      }, 400);
  };

});