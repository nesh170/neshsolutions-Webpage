var app = angular.module('app', ['ngRoute','ngAnimate','ngSanitize','ngAria','ngMaterial','ngTouch','ui.bootstrap']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'views/profile.html',
            controller:'profileController'
        })
        .when('/project',{
            templateUrl:'views/project.html',
            controller:'projectController'
        })
        .when('/fun',{
            templateUrl:'views/fun.html',
            controller:'funController'
        })
        .when('/birthday',{
            templateUrl:'views/birthday.html',
            controller:'birthdayController'
        })
        .otherwise({
            templateUrl:'views/profile.html',
            controller:'profileController'
        })
});

app.controller('mainController', function($rootScope,$scope,$log){
    $log.log(document.getElementById('wrapper').className);
    $scope.toggled = false;

    $scope.toggleFn = function(toggle){
        $scope.toggled = toggle;
    };

});
