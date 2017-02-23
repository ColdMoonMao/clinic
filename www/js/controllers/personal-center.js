/**
 * Created by liudong on 17-2-18.
 */
angular.module('app.controllers')
  .controller('PersonalCenterCtrl', ['$scope','$state','PersonalCenterServe', function($scope,$state,PersonalCenterServe) {
//接口参数
    //获取信息接口
    $scope.personalMessage = {
      token: sessionStorage.getItem('token'),         //	令牌
      normal_user_id: sessionStorage.getItem('userId'), //	用户id
    };
    // 数据绑定
    $scope.peopleMessage={
      name:'',
      username:'',
    }

    //事件
    // 获取信息
    $scope.getMessage = function () {
      PersonalCenterServe.information($scope.personalMessage)
        .then(function (data) {
          console.log(data, 'success');
          $scope.peopleMessage = data.data.result;
          console.log($scope.peopleMessage.name)
          // $scope.message.phone = data.data.result.phone;
        }, function (er) {
          console.log(er, 'error');
        })
    };
    $scope.getMessage();
  }])
