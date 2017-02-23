/**
 * Created by liudong on 17-2-18.
 */
//个人信息页面服务
angular.module('app.controllers')
  .controller('PersonalInformationCtrl', ['$scope', 'PersonalInformationServe','$state',function ($scope, PersonalInformationServe,$state) {
    //接口参数
    //获取信息接口
    $scope.personalInformation = {
      token: sessionStorage.getItem('token'),         //	令牌
      normal_user_id: sessionStorage.getItem('userId'), //	用户id
    };
    //修改信息接口
    $scope.updateList = {
      token: sessionStorage.getItem('token'),         //	令牌
      id: sessionStorage.getItem('userId'), //	用户id
      name: '',                 //	姓名
      gender: '',               //	性别
      identity_card: '',        //	身份证号
      address: '',              //	地址
    };

    //数据绑定
    $scope.personlMessage = [{
      name: '',
      gender: '',
      identity_card: '',
      address: '',
    }
    ];
    //单选框绑定
    $scope.sex = [
      {text: "男", value: "2"},
      {text: "女", value: "1"},
    ];
    $scope.sexValue = {
      value: '2'
    };

    //事件
    // 获取信息
    $scope.getMessage = function () {
      PersonalInformationServe.information($scope.personalInformation)
        .then(function (data) {
          console.log(data, 'success');
          $scope.personlMessage = data.data.result;
          $scope.sexValue.value = $scope.personlMessage.gender;
        }, function (er) {
          console.log(er, 'error');
        })
    };
    $scope.getMessage();

    //修改信息
    $scope.onSaveButtonClick = function () {
      $scope.updateList.name=$scope.personlMessage.name,
        console.log($scope.updateList.name)
      $scope.updateList.gender=$scope.sexValue.value,
      $scope.updateList.identity_card=$scope.personlMessage.identity_card,
      $scope.updateList.address=$scope.personlMessage.address,
      PersonalInformationServe.update($scope.updateList)
        .then(function (data) {
          console.log(data, 'success');
          //保存成功弹框
        }, function (er) {
          console.log(er, 'error');
        })
    };
  }])
