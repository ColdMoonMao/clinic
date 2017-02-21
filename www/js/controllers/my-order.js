/**
 * Created by liudong on 17-2-18.
 */
angular.module('app.controllers')
  .controller('MyOrderCtrl', ['$scope', function($scope) {
    $scope.noPayOrders=[
      {
        contant: '2016-12-02 11:25 邓超',
        doctor: '口腔科 孙医生（工号007）',
        state: '加急预约',
        money: '￥0.01',
      },
    {
      contant: '2016-12-03 11:25 陈赫',
        doctor: '口腔科 孙医生（工号007）',
      state: '加急预约',
      money: '￥0.01',
    }
    ];
    $scope.payOrders=[
      {
        contant: '2016-12-02 11:25 邓超',
        doctor: '口腔科 孙医生（工号007）',
        state: '加急预约',
        money: '￥0.01',
      },
      {
        contant: '2016-12-03 11:25 陈赫',
        doctor: '口腔科 孙医生（工号007）',
        state: '加急预约',
        money: '￥0.01',
      }
    ]
  }])
