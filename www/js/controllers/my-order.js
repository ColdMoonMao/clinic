/**
 * Created by liudong on 17-2-18.
 */
angular.module('app.controllers')
  .controller('MyOrderCtrl', ['$scope','MyOrderServe', function($scope,MyOrderServe) {
    $scope.noPay = {
      token: sessionStorage.getItem('token'),         //	令牌
      normal_user_id: sessionStorage.getItem('userId'), //	用户id
      page: 1,       //	页码, 默认1
      count: 20,       //	个数, 默认20
    };
    // $scope.noPayOrders=[];
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
          $scope.noPayOrders=data.data.result;
        },function (er) {
          console.log(er,'error');
        })
    }
    $scope.onNoPay()
    $scope.onPay()
    // $scope.noPayOrders=[
    //   {
    //     contant: '2016-12-02 11:25 邓超',
    //     doctor: '口腔科 孙医生（工号007）',
    //     state: '加急预约',
    //     money: '￥0.01',
    //   },
    // {
    //   contant: '2016-12-03 11:25 陈赫',
    //     doctor: '口腔科 孙医生（工号007）',
    //   state: '加急预约',
    //   money: '￥0.01',
    // }
    // ];
    // $scope.payOrders=[
    //   {
    //     contant: '2016-12-02 11:25 邓超',
    //     doctor: '口腔科 孙医生（工号007）',
    //     state: '加急预约',
    //     money: '￥0.01',
    //   },
    //   {
    //     contant: '2016-12-03 11:25 陈赫',
    //     doctor: '口腔科 孙医生（工号007）',
    //     state: '加急预约',
    //     money: '￥0.01',
    //   }
    // ]
  }])
