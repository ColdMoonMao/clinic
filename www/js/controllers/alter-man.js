/**
 * Created by liudong on 17-2-18.
 */
angular.module('app.controllers')
  .controller('AlterManCtrl', ['$scope','$state','$rootScope','AlterManServe', function($scope,$state,$rootScope,AlterManServe) {
    //修改联系人接口参数
    $scope.updateList = {
      token: sessionStorage.getItem('token'),         //	令牌
      id: '', //	用户id
      name: '',                 //	姓名
      phone: '',                 //	电话
      gender: '',               //	性别
      identity_card: '',        //	身份证号
      address: '',              //	地址
    };
    $scope.removeList = {
      token: sessionStorage.getItem('token'),         //	令牌
      patient_id: '', //	患者id
    };

    //获取上个页面传来的数据并展示到页面上
    $scope.alter=$rootScope;
    $scope.alter=$scope.alter.alterLIst;
    $scope.updateList.name=$scope.alter[0].name;
    $scope.updateList.id=$scope.alter[0].id;
    $scope.updateList.identity_card=$scope.alter[0].identity_card;
    $scope.updateList.phone=$scope.alter[0].phone;
    $scope.updateList.address=$scope.alter[0].address;
    $scope.sexValue=$scope.alter[0].gender;
    console.log($scope.sexValue)
    $scope.sex = [
      {text: "男", value: "1"},
      {text: "女", value: "2"},
    ];
    $scope.sexValue = {
      value: '1'
    };

    //事件
    //保存
    $scope.onAlterManButtonClick=function () {
      $scope.updateList.gender=$scope.sexValue.value;
      console.log($scope.updateList)
      AlterManServe.alterMan($scope.updateList)
        .then(function (data) {
          console.log(data, 'success');

          //添加成功弹窗
          $state.go('tab.householdContacts')
        }, function (er) {
          console.log(er, 'error');
        })
    },
      //删除
    $scope.onDeleteManButtonClick=function () {
      $scope.removeList.patient_id=$scope.alter[0].id;
      AlterManServe.removeMan($scope.removeList)
        .then(function (data) {
          console.log(data, 'success');
          //添加成功弹窗
          // $state.go('tab.householdContacts')
        }, function (er) {
          console.log(er, 'error');
        })
    }
  }])
