'use strict';

/**
 * @ngdoc service
 * @name WeatherZone.citysearch
 * @description
 * # citysearch
 * Factory in the WeatherZone.
 */
angular.module('WeatherZone')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...



    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=c6652cd966bc34851add11456f4da83d', {}, {
        find: {
          method: 'GET',
          params: {
            query: 'seattle'
          },
          isArray: false
        }
      });
    });
