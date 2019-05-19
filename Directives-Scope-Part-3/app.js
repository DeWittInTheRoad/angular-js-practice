var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.people = [
      {
        name: 'John Doe',
        address: '555 Main St.',
        city: "New York",
        state: "NY",
        zip: '11111',
    },
        {
            name: 'Jane Doe',
            address: '223 Main St.',
            city: "Buffalo",
            state: "NY",
            zip: '11111',
        },
        {
            name: 'George Doe',
            address: '123 State St.',
            city: "Florida",
            state: "NY",
            zip: '11111',
        }
    ];

    $scope.formattedAddress = (person) =>`${person.address}, ${person.city}, ${person.state} ${person.zip}`;

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

myApp.directive("searchResult", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/searchresult.html',
       replace: true,
       scope: {
           personObject: "=",
           formattedAddressFunction: "&"
       }
   }
});
