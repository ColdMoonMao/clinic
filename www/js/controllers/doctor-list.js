/**
 * Created by a1 on 2017/2/18.
 */
angular.module('app.controllers').controller('DoctorListCtrl', function($scope,$state) {
    $scope.doctorArr=[{
      img:'img/mike.png',
      name:'孙医生(工号007)',
      hospital:'爱尔诊所后宰门诊室',
      description:'口腔修复专业,擅长(贴面,牙齿美白,贴面,牙齿美白,贴面,牙齿美白,贴面,牙齿美白,贴面,牙齿美白,)'
    },{
      img:'img/perry.png',
      name:'靳医生(工号005)',
      hospital:'爱尔诊所后宰门诊室',
      description:'口腔修复专业,擅长(贴面,牙齿美白,贴面,牙齿美白,贴面,牙齿美白,贴面,牙齿美白,贴面,牙齿美白,)'
    }];

    $scope.toDoctorDetails=function ($index) {//$index需要传给下个页面
      console.log('1');
      $state.go('tab.doctorDetails');

    }

  })
