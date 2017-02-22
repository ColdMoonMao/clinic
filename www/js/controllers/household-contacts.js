/**
 * Created by liudong on 17-2-18.
 */
angular.module('app.controllers')
  .controller('HouseholdContactsCtrl', ['$scope','Contacts','$state', function($scope,Contacts,$state) {
    $scope.contact = {
      token: sessionStorage.getItem('token'),         //	令牌
      normal_user_id: sessionStorage.getItem('userId'), //	用户id
    };
    $scope.message=function () {
      Contacts.information($scope.contact)
        .then(function (data) {
          console.log(data,'success');
          $scope.peopleArr=data.data.result;
        },function (er) {
          console.log(er,'error');
        })
    }
    $scope.message()



    // console.log($scope.peopleArr)
    $scope.onAddButtonClick=function () {
      $state.go('tab.addMan')
    },
      $scope.changePage=function () {
        $state.go('tab.alterMan')
      }
  }])
