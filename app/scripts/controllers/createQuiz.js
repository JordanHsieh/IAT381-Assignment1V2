'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:CreateQuizCtrl
 * @description
 * # CreateQuizCtrl
 * Controller of the myappApp
 */

var APP = angular.module('myappApp');

APP.controller('CreateQuizCtrl', function ($scope) {
    $scope.questions = [
      {
        name:'Question 1', 
        url:'#/quiz/q1'
      },
      {
        name:'Question 2', 
        url:'#/quiz/q2'
      },
      {
        name:'Question 3', 
        url:'#/quiz/q3'
      },
      {
        name:'Question 4', 
        url:'#/quiz/q4'
      },
      {
        name:'Question 5', 
        url:'#/quiz/q5'
      }
    ];

    $scope.progressValue = APP.progressValue;
    $scope.max = 5;


    $scope.buttonClicked = function() {
      // console.log('Question button clicked');
    	console.log(this);
    	//this is the button e lement that was clicked, this.item will be the item in scope.buttons
    	var question = this.question; //setTimeout will make it's own this variable so we need to store the button that was clicked
    	
		// APP.results.push(button);

    	setTimeout(function() {
    		window.location = question.url;
    	}, 400);
    };

    $scope.goBack = function() {
      console.log(this);
      //this is the button element that was clicked, this.item will be the item in scope.buttons

      setTimeout(function() {
        window.location = '#/menu';
      }, 400);
    };

  });