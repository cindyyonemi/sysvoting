'use strict';

// Declare app level module which depends on views, and components
angular.module('sysvotingApp', [
  'ngRoute',
  'sysvotingApp.voting',
  'sysvotingApp.receipt',
  'ngMaterial',
  'udpCaptcha',
  'ngMessages'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/voting'});
}]);
