'use strict';

var APP = angular.module('myappApp');

APP.controller('MainQuizV2Ctrl', function($scope) {
  $scope.quiz = {
    answer: ''
  };

  $scope.radioData = [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
    { label: 'D', value: 'D' }
  ];

});