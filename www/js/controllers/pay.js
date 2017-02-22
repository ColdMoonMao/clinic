/**
 * Created by a1 on 2017/2/21.
 */
angular.module('app.controllers').controller('PayCtrl',['$scope','$state',function ($scope,$state) {
  $scope.payArr=[{
    img:'img/weixin.png',
    payMetherd:'微信支付',
    description:'推荐安装微信5.0及以上版本用户使用'
  },{
    img:'img/zhifubao.png',
    payMetherd:'支付宝支付',
    description:'推荐安装支付宝客户端用户使用'
  }];
  $scope.cerrentChecked={
    value:''
  };
  $scope.submitPay=function () {

  }
}])
