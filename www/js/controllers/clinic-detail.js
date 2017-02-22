angular.module('app.controllers')
.controller('ClinicDetailCtrl', ['$scope', '$stateParams','ClinicDetailServe', function($scope, $stateParams,ClinicDetailServe) {
	// $scope.clinic = Chats.get($stateParams.clinicId);
	console.log($stateParams.clinicId);
  var clinicParams={
    token:sessionStorage.getItem('token'),
    hospital_id:$stateParams.clinicId
  }
  ClinicDetailServe.detail(clinicParams)
    .then(function (data) {
      console.log(data,'success');
      $scope.clinicDetailObj =data.data.result;
    },function (er) {
      console.log(er,'er');
    })
	
}])