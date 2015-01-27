'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('MenuCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });