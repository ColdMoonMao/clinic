/**
 * Created by liudong on 17-2-18.
 */
//我的服务页面控制
angular.module('app.controllers')
  .controller('ServesCtrl', ['$scope','TabMeServe', function($scope,TabMeServe) {
      //接口参数
    //已确认
      $scope.getSureList = {
        token: sessionStorage.getItem('token'),         //	令牌
        normal_user_id: sessionStorage.getItem('userId'), //	用户id
        confirm_state:'2',       //	状态2:成功 3:失败
      };
      //待确认
      $scope.getNoSureList = {
        token: sessionStorage.getItem('token'),         //	令牌
        normal_user_id: sessionStorage.getItem('userId'), //	用户id
        page:'1',               //页码, 默认1
        count:'20',             //个数, 默认20
      };
      //待支付
      $scope.noPayList = {
        token: sessionStorage.getItem('token'),         //	令牌
        normal_user_id: sessionStorage.getItem('userId'), //	用户id
      };

      //数据绑定
    $scope.sureList=[];
    $scope.waitSureList=[];
    $scope.waitPayList=[];

    //事件
    //已确认接口方法
      $scope.sure=function () {
        // console.log($scope.getSureList)
        TabMeServe.getSure($scope.getSureList)
          .then(function (data) {
            console.log(data,'success1');
            $scope.sureList=data.data.result;
          },function (er) {
            console.log(er,'error');
          })
      }
      $scope.sure()

      //未确认接口方法
      $scope.waitSure=function () {
        TabMeServe.getNoSure($scope.getNoSureList)
          .then(function (data) {
            console.log(data,'success2');
            $scope.waitSureList=data.data.result;
          },function (er) {
            console.log(er,'error');
          })
      }
      $scope.waitSure()

      //待支付接口方法
      $scope.waitPay=function () {
        TabMeServe.getNoPay($scope.noPayList)
          .then(function (data) {
            console.log(data,'success3');
            $scope.waitPayList=data.data.result;
          },function (er) {
            console.log(er,'error');
          })
      }
      $scope.waitPay()
  }]
  )
