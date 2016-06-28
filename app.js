'use strict';

var app = angular.module('app',["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'TEMPLATES/_index.html',
    controller: 'HomeController'
  })
  .when('/about', {
    templateUrl: 'TEMPLATES/_about.html',
    controller: 'AboutController'
  })
  .when('/projects', {
    templateUrl: 'TEMPLATES/_projects.html',
    controller: 'ProjectsController'
  })
  .when('/resources', {
    templateUrl: 'TEMPLATES/_resources.html',
    controller: 'ResourcesController'
  })
  .when('/blog', {
    templateUrl: 'TEMPLATES/_blog.html',
    controller: 'BlogController'
  })
  .otherwise({redirectTo: '/'});
});
