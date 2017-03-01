/**
 * Created by a1 on 2017/2/21.
 */
angular.module('app.controllers').controller('PayCtrl',['$scope','$state','PayServe',function ($scope,$state,PayServe) {

  //界面填充数据
  $scope.payArr=[{
    img:'img/weixin.png',
    payMetherd:'微信支付',
    id:'1',
    description:'推荐安装微信5.0及以上版本用户使用'
  },{
    img:'img/zhifubao.png',
    payMetherd:'支付宝支付',
    id:'2',
    description:'推荐安装支付宝客户端用户使用'
  }];
  $scope.doctorDetailObj=JSON.parse(sessionStorage.getItem('doctorDetail'));
  $scope.patient_condition=sessionStorage.getItem('descriptionTexts');

  //支付选择
  $scope.cerrentChecked={id:''};//绑定单选框的 ng-value
  //接口参数
  var payObj={
    order_id:'',
    pay_type:$scope.cerrentChecked.id,
    order_type:'appointment'
  }

  $scope.submitPay=function () {
    PayServe.PayData(payObj).then(function (succeedData) {
      console.log(succeedData)
    },function (error) {
      alert(error);
    })
  }
}])
