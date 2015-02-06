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

  $scope.pageClass = 'page-viewQuiz';

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
  }

  $scope.backToMenu = function() {
      // console.log(this);
      //this is the button element that was clicked, this.item will be the item in scope.buttons

      setTimeout(function() {
        window.location = '#/menu';
      }, 400);
  };


});