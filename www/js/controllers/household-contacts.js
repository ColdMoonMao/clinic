/**
 * Created by liudong on 17-2-18.
 */
angular.module('app.controllers')
  .controller('HouseholdContactsCtrl', ['$scope','Contacts','$state', function($scope,Contacts,$state) {

    $scope.peopleArr=Contacts.all();

    console.log($scope.peopleArr)
    $scope.onAddButtonClick=function () {
      $state.go('tab.addMan')
    }
  }])
