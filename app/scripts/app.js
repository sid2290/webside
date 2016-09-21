"use strict";

angular.module('confusionApp',['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            // route for the Home Page
            .when('/', {
                templateUrl : 'home.html',
                controller  : 'IndexController'
            })
            // route for the contactus page
            .when('/contactus', {
                templateUrl : 'contactus.html',
                controller  : 'ContactController'
            })
            // route for the menu page
            .when('/menu', {
                templateUrl : 'menu.html',
                controller  : 'MenuController'
            })
            .when('/aboutus', {
                templateUrl : 'aboutus.html',
                controller  : 'AboutController'
            })
            .otherwise('/contactus');
    })
            