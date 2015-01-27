'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MenuV2Ctrl
 * @description
 * # MenuV2Ctrl
 * Controller of the myappApp
 */

// angular.module('myappApp')
//   .controller('MenuV2Ctrl', function ($scope) {
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   });


APP.controller('MenuV2Ctrl', function($scope) {
  $scope.title1 = 'Button';
  $scope.isDisabled = true;
  $scope.googleUrl = 'http://google.com';

  console.log(APP.results);
});