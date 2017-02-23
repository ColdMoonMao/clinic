/**
 * Created by liudong on 17-2-18.
 */
//家庭联系人页面服务
angular.module('app.controllers')
  .controller('HouseholdContactsCtrl', ['$scope','$rootScope','Contacts','$state', function($scope,$rootScope,Contacts,$state) {
    //接口参数
    $scope.contact = {
      token: sessionStorage.getItem('token'),         //	令牌
      normal_user_id: sessionStorage.getItem('userId'), //	用户id
    };

    //数据绑定
    $scope.peopleArr=null;
    $rootScope.alterLIst=null;
    //事件
    $scope.message=function () {
      Contacts.information($scope.contact)
        .then(function (data) {
          console.log(data,'success');
          $scope.peopleArr=data.data.result;
        },function (er) {
          console.log(er,'error');
        })
    }
    $scope.message()



    //跳转
    $scope.onAddButtonClick=function () {
      $state.go('tab.addMan')
    },
      $scope.changePage=function (index) {
      console.log(index);
        $rootScope.alterLIst=[{
          id:$scope.peopleArr[index].id,
          name:$scope.peopleArr[index].name,
          gender:$scope.peopleArr[index].gender,
          identity_card:$scope.peopleArr[index].identity_card,
          address:$scope.peopleArr[index].address,
          phone:$scope.peopleArr[index].phone,
        }]
        $state.go('tab.alterMan')
      }
  }])
