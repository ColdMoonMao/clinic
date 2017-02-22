/**
 * Created by a1 on 2017/2/18.
 */
angular.module('app.controllers').controller('DoctorDetailsCtrl', ['$scope','$state', function($scope,$state) {
	$scope.doctor = {
		img: 'img/mike.png',
		name: '孙医生(工号007)',
		hospital: '爱尔诊所后宰门诊室',
		description: '口腔修复专业,擅长(贴面,牙齿美白,贴面,牙齿美白,贴面,牙齿美白,贴面,牙齿美白,贴面,牙齿美白,)'
	};

	$scope.toReservation=function () {
	  console.log('111');
    $state.go('tab.conditionDescription');
  }
}])
