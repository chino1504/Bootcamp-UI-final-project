var app = angular.module('angulapp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '/partials/timeline.html',
      controller: 'tlCtrl'
    })
    .when('/tweet/:id', {
      templateUrl: '/partials/tweet.html',
      controller: 'tweetCtrl'
    })
    .when('/trends/:woeid', {
      templateUrl: '/partials/trends.html',
      controller: 'trendCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
 });



