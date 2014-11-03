'use strict';

/* Controllers */

var MWD_Contacts = angular.module('MWD_Contacts', []);

MWD_Contacts.controller('ContactsCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('app/Contacts/MWD_Contacts.json').success(function(data) {
      $scope.contacts = data;
    });

  $scope.orderProp = 'name';
}]);

