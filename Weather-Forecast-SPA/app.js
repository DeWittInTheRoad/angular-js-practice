//MODULE

var weatherApp = angular.module('weatherApp',['ngRoute','ngResource']);

//ROUTES

weatherApp.config(function ($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl: 'pages/home.htm',
			controller: 'homeController'
		})

		.when('/forecast', {
			templateUrl: 'pages/forecast.htm',
			controller: 'forecastController'
		})

});

//SERVICES

weatherApp.service('cityService', function(){
    this.city = "New York";
});

	weatherApp.controller('homeController', ['$scope', 'cityService',
		function($scope, cityService) {

	    $scope.city = cityService.city;

	    $scope.$watch('city', function() {
	        cityService.city = $scope.city;
      });

		}]);

	weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService',
		function($scope, $resource, cityService) {

        $scope.city = cityService.city;

        $scope.weatherAPI =
	        $resource("http://api.openweathermap.org/data/2.5/weather", {
	        	callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

        $scope.apiIdKey="49287c18b4037403164d223c186bec2f";

        $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, APPID: $scope.apiIdKey });

        $scope.convertToFahrenheit = (kelvin) =>
        	Math.round((1.8 * (kelvin - 273)) + 32)

				$scope.convertToDate = (dt) =>
					new Date(dt * 1000)

		}]);

