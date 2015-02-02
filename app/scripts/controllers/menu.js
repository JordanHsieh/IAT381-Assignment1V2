'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the myappApp
 */

var APP = angular.module('myappApp');

APP.controller('MenuCtrl', function ($scope) {
    $scope.buttons = [
      {
        name:'Make Quiz', 
        loc:'#/createQuiz'
      },
      {
        name:'View Quiz', 
        loc:'#/viewQuiz'
      },
      {
        name:'Do Quiz', 
        loc:'#/doQuiz'
      }
    ];


    $scope.buttonClicked = function() {
    	// console.log(this);
      console.log('Menu Quiz Button Clicked');

    	//this is the button element that was clicked, this.item will be the item in scope.buttons
    	var button = this.button; //setTimeout will make it's own this variable so we need to store the button that was clicked
    	
		  // APP.results.push(button);

    	setTimeout(function() {
    		window.location = button.loc;
    	}, 400);
    };

    $scope.buttonClick = function() {
      console.log('TEST TEST Button Clicked');
    };

  });