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

  $scope.isCollapsed = false;
  $scope.selectedIndex = 2;

  // APP.questions.push({id:question.id, question:question.question, answers:question.answers, correct:question.correct});
  // APP.questions.push({id:'Question 1', question:'What is your name', answers:['Jordan', 'Jimmy', 'Jennifer', 'Joanna'], correct:'0'});
  // APP.questions.push({id:'Question 2', question:'Where are you from', answers:['Canada', 'United States', 'Jamaica', 'Brazil'], correct:'1'});
  // APP.questions.push({id:'Question 3', question:'What is your favorite food', answers:['Pizza', 'Ice Cream', 'Cheese Cake', 'Pie'], correct:'2'});
  // APP.questions.push({id:'Question 4', question:'What is your favorite pokemon', answers:['Pika', 'Squirtle', 'Charmander', 'Mew'], correct:'3'});
  // APP.questions.push({id:'Question 5', question:'What phone do you have', answers:['LG', 'Sony', 'Google', 'BlackBerry'], correct:'1'});
  
  //mark the answers
  if(APP.questionCount > 0)
  {

    $scope.questions = APP.questions;
    // console.log($scope);
    // var viewQuestions = {
    //   q1: {
    //     question: APP.questions[0].question,
    //     id: APP.questions[0].id,
    //     answers: [APP.questions[0].answers[0], APP.questions[0].answers[1], APP.questions[0].answers[2], APP.questions[0].answers[3]],
    //     correct: APP.questions[0].correct
    //   }
    //   // q2: {
    //   //   question: APP.questions[1].question,
    //   //   id: APP.questions[1].id,
    //   //   answers: [APP.questions[1].answers[0], APP.questions[1].answers[1], APP.questions[1].answers[2], APP.questions[1].answers[3]],
    //   //   correct: APP.questions[1].correct
    //   // },
    //   // q3: {
    //   //   question: APP.questions[2].question,
    //   //   id: APP.questions[2].id,
    //   //   answers: [APP.questions[2].answers[0], APP.questions[2].answers[1], APP.questions[2].answers[2], APP.questions[2].answers[3]],
    //   //   correct: APP.questions[2].correct
    //   // },
    //   // q4: {
    //   //   question: APP.questions[3].question,
    //   //   id: APP.questions[3].id,
    //   //   answers: [APP.questions[3].answers[0], APP.questions[3].answers[1], APP.questions[3].answers[2], APP.questions[3].answers[3]],
    //   //   correct: APP.questions[3].correct
    //   // },
    //   // q5: {
    //   //   question: APP.questions[4].question,
    //   //   id: APP.questions[4].id,
    //   //   answers: [APP.questions[4].answers[0], APP.questions[4].answers[1], APP.questions[4].answers[2], APP.questions[4].answers[3]],
    //   //   correct: APP.questions[4].correct
    //   // }
    // };
  }

  $scope.backToMenu = function() {
      // console.log(this);
      //this is the button element that was clicked, this.item will be the item in scope.buttons

      setTimeout(function() {
        window.location = '#/menu';
      }, 400);
  };


});