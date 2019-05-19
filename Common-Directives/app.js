var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters=5;

    $scope.rules = [

        {ruleName: "Must be 5 characters"},
        {ruleName: "Must not be used elsewhere"},
        {ruleName: "Must be cool"}


    ];

    console.log($scope.rules);
}]);
