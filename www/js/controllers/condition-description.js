/**
 * Created by a1 on 2017/2/21.
 */
angular.module('app.controllers').controller('ConditionDescriptionCtrl',['$scope','$state','$ionicActionSheet','ConditionDescriptionServe',function ($scope,$state,$ionicActionSheet,ConditionDescriptionServe){
  $scope.uploadPhoto=function () {
    $scope.imgArr=['../img/weixin.png'];
    $ionicActionSheet.show({
      buttons: [
        { text: '<center>拍照</center><hr/>' },
        { text: '<center>从相册中选择</center><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>' }
      ],
      destructiveText: '<center>取消</center>',
      buttonClicked: function(index) {

        console.log(index);
        if(index==0){
          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.FILE_URI });//(图片源类型)打开相机 还是相册取决于这句

          function onSuccess(imageURI) {

            var image = document.getElementById('photo');
            image.src = imageURI;
          }
          function onFail(message) {

            alert('Failed because: ' + message);
          }
        } else {
          var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
          var options = setOptions(srcType);
          // var func = createNewFileEntry;

          navigator.camera.getPicture(function cameraSuccess(imageUri) {

            // var image = document.getElementById('photo');
            // image.src = imageUri;
            $scope.imgArr=$scope.imgArr.push(imageUri);


            // You may choose to copy the picture, save it somewhere, or upload.
            // func(imageUri);

          }, function cameraError(error) {

            console.debug("Unable to obtain picture: " + error, "app");

          },options);

          function setOptions(srcType) {
            var options = {
              // Some common settings are 20, 50, and 100
              quality: 50,
              destinationType: Camera.DestinationType.FILE_URI,
              // In this app, dynamically set the picture source, Camera or photo gallery
              sourceType: srcType,
              encodingType: Camera.EncodingType.JPEG,
              mediaType: Camera.MediaType.PICTURE,
              allowEdit: true,
              correctOrientation: true  //Corrects Android orientation quirks
            }
            return options;
          };
        }
        return true;
      },
      destructiveButtonClicked:function () {

        return true;
      }
    });
  }

  //本地用户 id
  $scope.userId=sessionStorage.getItem('userId');
  $scope.token = sessionStorage.getItem('token');
  console.log($scope.userId,$scope.token);
  //调接口获取患者列表
  var userObj= {
    token: $scope.token,
    normal_user_id: $scope.userId
  };
  ConditionDescriptionServe.PatientList(userObj)
    .then(function (successData) {
      console.log(successData);
      $scope.patientArr=successData.data.result;

      //选择联系人
      var buttonsArr=[];
      $scope.patientArr.forEach(function (val,index,arr) {
        buttonsArr.push({ text: '<center>'+val.name+'</center><hr/>'});
      })
      $scope.choosePeople=function () {
        $ionicActionSheet.show({
          buttons:buttonsArr,
          destructiveText: '<hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><center>新增</center>',
          buttonClicked:function (index) {
            $scope.ConditionObj.patient_id= $scope.patientArr[index].id;
            $scope.patientName=$scope.patientArr[index].name;
            console.log('患者 id'+$scope.ConditionObj.patient_id);
            return true;
          },
          destructiveButtonClicked:function () {
            $state.go('tab.addMan');
          }
        });

      }


    },function (error) {
      alert(error);
  });


  //获取本地参数
//获取上页选择并传的值
  $scope.doctorDetail=JSON.parse(sessionStorage.getItem('doctorDetail'));
  //上传病情描述
  $scope.ConditionObj={
    token: $scope.token,
    normal_user_id:$scope.userId,
    doctor_id:$scope.doctorDetail.doctor_id,
    time_type:$scope.doctorDetail.time_type,
    patient_id:'',
    doctor_work_address_id:$scope.doctorDetail.doctor_work_address_id,
    appointment_time:$scope.doctorDetail.appointment_time,
    // patient_condition:$scope.descriptionTexts
  }

$scope.submitAppointment=function () {
  console.log($scope.descriptionTexts);

  ConditionDescriptionServe.ConditionDescription($scope.ConditionObj)
    .then(function (data) {
      console.log('上传成功'+data);
    },function (error) {
      alert(error);
    });

  //给下页传值

  //跳转
  $state.go('tab.pay');
}
}])

