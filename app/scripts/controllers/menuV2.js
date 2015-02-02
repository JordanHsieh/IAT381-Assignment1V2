'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MenuV2Ctrl
 * @description
 * # MenuV2Ctrl
 * Controller of the myappApp
 */

var APP = angular.module('myappApp');

APP.controller('MenuV2Ctrl', function($scope) {
  $scope.title1 = 'Button';
  $scope.isDisabled = true;
  $scope.googleUrl = 'http://google.com';

  // console.log(APP.results);
});