/**
 * Created by liudong on 17-2-18.
 */
angular.module('app.controllers')
  .controller('AddManCtrl', ['$scope','$state', function($scope,$state) {
    $scope.sex = [
      {text: "男", value: "0"},
      {text: "女", value: "1"},
    ];
    $scope.data = {
      value: '0'
    };
    $scope.onAddManButtonClick=function () {

    }
  }])
