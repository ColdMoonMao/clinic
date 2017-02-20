/**
 * Created by liudong on 17-2-18.
 */
angular.module('app.controllers')
  .controller('HouseholdContactsCtrl', ['$scope','Contacts', function($scope,Contacts) {

    $scope.peopleArr=Contacts.all();

    console.log($scope.peopleArr)
    $scope.onAddButtonClick=function () {
      console.log('ok')
    }
  }])
