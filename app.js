'use strict';

var app = angular.module('app',["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'TEMPLATES/_index.html',
    controller: 'AboutController'
  })
  .when('/about', {
    templateUrl: 'TEMPLATES/_about.html',
    controller: 'AboutController'
  })
  .when('/projects', {
    templateUrl: 'TEMPLATES/_projects.html',
    controller: 'ProjectsController'
  })
  .when('/contact', {
    templateUrl: 'TEMPLATES/_contact.html',
    controller: 'ContactController'
  })
  .when('/blog', {
    templateUrl: 'TEMPLATES/_blog.html',
    controller: 'BlogController'
  })
//About Buttons
      .when('/contact', {
        templateUrl: 'TEMPLATES/_contact.html',
        controller: 'ContactController',
      })
      .when('/skills', {
        templateUrl: 'TEMPLATES/ABOUT/_skills.html',
        controller: 'SkillsController'
      })
      .when('/resume', {
        templateUrl: 'TEMPLATES/ABOUT/_resume.html',
        controller: 'ResumeController'
      })
//Project Buttons
      .when('/dev', {
        templateUrl: 'TEMPLATES/PROJECTS/_dev.html',
        controller: 'DevController'
      })
      .when('/builds', {
        templateUrl: 'TEMPLATES/PROJECTS/_builds.html',
        controller: 'BuildController'
      })
      .when('/resources',{
        templateUrl: 'TEMPLATES/PROJECTS/_resources.html',
        controller: 'ResourcesController'
      })
//Resources Buttons
      .when('/devSources', {
        templateUrl: 'TEMPLATES/SOURCES/_devSources.html',
        controller: 'SourceController'
      })
      .when('/buildSources', {
        templateUrl: 'TEMPLATES/SOURCES/_buildSources.html',
        controller: 'SourceController'
      })
//BLOG??
  .otherwise({redirectTo: '/'});
});

// app.run(['$window', function($window){
//
//   $window.onload = function(){
//     var button = document.getElementById('menuButton');
//     var nav1 = document.getElementById('main-nav');
//     var nav2 = document.getElementById('main-nav2');
//
//     if(window.innerWidth < 489){
//       alert("Window < 489");
//       nav1.style.display = "none";
//       button.style.display = "block";
//       nav2.style.display = "none";
//     }
//
//     if(window.innerWidth > 489){
//       alert("Window > 489");
//       button.style.display = "none";
//       nav1.style.display = "none";
//       nav2.style.display = "flex";
//       }
//   };
// }]);

//
// Calling Order
// app.config()
// app.run()
// directive's compile functions (if they are found in the dom)
// app.controller()
// directive's link functions (again, if found)
