/**
 * Created by liudong on 17-2-18.
 */
//添加联系人页面控制
angular.module('app.controllers')
  .controller('AddManCtrl', ['$scope','AddManServe','$state', function($scope,AddManServe,$state) {
    $scope.addList=[]
    //添加联系人接口参数
    $scope.addList = {
      token: sessionStorage.getItem('token'),         //	令牌
      normal_user_id: sessionStorage.getItem('userId'), //	用户id
      name: '',                 //	姓名
      phone: '',                 //	电话
      gender: '',               //	性别
      identity_card: '',        //	身份证号
      address: '',              //	地址
    };

    //数据绑定
    // $scope.addList信息
    $scope.sex = [
      {text: "男", value: "1"},
      {text: "女", value: "2"},
    ];
    $scope.sexValue = {
      value: '1'
    };
    $scope.onAddManButtonClick=function () {
      $scope.addList.gender=$scope.sexValue.value;
      AddManServe.addMan($scope.addList)
        .then(function (data) {
          console.log(data, 'success');
          //添加成功弹窗
          $scope.addList=[];
          $state.go('tab.householdContacts')
        }, function (er) {
          console.log(er, 'error');
        })
    }
  }])
