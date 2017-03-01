/**
 * Created by a1 on 2017/2/18.
 */
angular.module('app.controllers').controller('DoctorListCtrl',['$scope', '$state','$stateParams','DoctorListServe',function($scope, $state,$stateParams,DoctorListServe) {

  //获取token
  $scope.token=sessionStorage.getItem('token');
  //获取id
  console.log($stateParams.clinicId,$stateParams.departId);
  $scope.clinicId=$stateParams.clinicId;
  $scope.departId=$stateParams.departId;

  //上传参数
  $scope.doctorListObj={
    token:$scope.token,
    hospital_id:$stateParams.clinicId,
    speciality_id:$stateParams.departId,
    page:1,
    count:20
  }
  //调接口
  DoctorListServe.DoctorList($scope.doctorListObj)
    .then(function (successData) {
      console.log(successData);
      $scope.doctorArr=successData.data.result;
    },function (error) {
      alert(error);
    });


}])
