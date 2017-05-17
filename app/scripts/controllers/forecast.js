'use strict';

/**
 * @ngdoc function
 * @name WeatherZone.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the WeatherZone
 */
 angular.module('WeatherZone')
   .controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
     $scope.cityID = $routeParams.cityID;

     $scope.forecastData = forecast.query({
         cityID: $routeParams.cityID
     });
   });
