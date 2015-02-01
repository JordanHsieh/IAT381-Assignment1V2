'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:CreateQuizCtrl
 * @description
 * # CreateQuizCtrl
 * Controller of the myappApp
 */

APP.controller('CreateQuizCtrl', function ($scope) {
    $scope.buttons = [
      {
        name:'Question 1', 
        loc:'#/quiz/q1'
      },
      {
        name:'Question 2', 
        loc:'#/quiz/q2'
      },
      {
        name:'Question 3', 
        loc:'#/quiz/q3'
      },
      {
        name:'Question 4', 
        loc:'#/quiz/q4'
      },
      {
        name:'Question 5', 
        loc:'#/quiz/q5'
      }
    ];


    $scope.buttonClicked = function() {
    	console.log(this);
    	//this is the button element that was clicked, this.item will be the item in scope.buttons
    	var button = this.button; //setTimeout will make it's own this variable so we need to store the button that was clicked
    	
		// APP.results.push(button);

    	setTimeout(function() {
    		window.location = button.loc;
    	}, 400);
    };

  });