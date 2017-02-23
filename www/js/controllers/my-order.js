/**
 * Created by liudong on 17-2-18.
 */
//我的预约页面
angular.module('app.controllers')
  .controller('MyOrderCtrl', ['$scope','MyOrderServe', function($scope,MyOrderServe) {

    //接口参数
    $scope.noPay = {
      token: sessionStorage.getItem('token'),         //	令牌
      normal_user_id: sessionStorage.getItem('userId'), //	用户id
      page: 1,       //	页码, 默认1
      count: 20,       //	个数, 默认20
    };

    //数据绑定
    $scope.noPayOrders=null;
    $scope.payOrders=null;

    //事件
    $scope.onNoPay=function () {
      MyOrderServe.unpaid($scope.noPay)
        .then(function (data) {
          console.log(data,'success');
          $scope.noPayOrders=data.data.result;
        },function (er) {
          console.log(er,'error');
        })
    }
    $scope.onPay=function () {
      MyOrderServe.paid($scope.noPay)
        .then(function (data) {
          console.log(data,'success');
          $scope.payOrders=data.data.result;
        },function (er) {
          console.log(er,'error');
        })
    }
    $scope.onNoPay()
    $scope.onPay()
  }])
