'use strict';

/**
 * @ngdoc function
 * @name WeatherZone.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the WeatherZone
 */
angular.module('WeatherZone')
  .controller('AboutCtrl', function ($scope) {
      			var currentDate = new Date();
      			$scope.timeString = currentDate.toTimeString();
      			$scope.updateTime = function() {
      				var currentDate = new Date();
      				$scope.timeString = currentDate.toTimeString();
      			}
      		});
