/**
 * Created by a1 on 2017/2/21.
 */
angular.module('app.controllers').controller('ConditionDescriptionCtrl',['$scope','$state','$ionicActionSheet',function ($scope,$state,$ionicActionSheet){
  $scope.imgshow=false;
  $scope.uploadPhoto=function () {
    $ionicActionSheet.show({
      buttons: [
        { text: '<center>拍照</center><hr/>' },
        { text: '<center>从相册中选择</center><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>' }
      ],
      destructiveText: '<center>取消</center>',
      buttonClicked: function(index) {
        $scope.imgshow=true;

        console.log(index);
        if(index==0){
          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.CAMERA });//(图片源类型)打开相机 还是相册取决于这句

          function onSuccess(imageURI) {
            $scope.imgshow=true;

            var image = document.getElementById('photo');
            image.src = imageURI;
          }
          function onFail(message) {
            $scope.imgshow=false;

            alert('Failed because: ' + message);
          }
        } else {
          var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
          var options = setOptions(srcType);
          // var func = createNewFileEntry;

          navigator.camera.getPicture(function cameraSuccess(imageUri) {
            $scope.imgshow=true;

            var image = document.getElementById('photo');
            image.src = imageUri;
            // You may choose to copy the picture, save it somewhere, or upload.
            // func(imageUri);

          }, function cameraError(error) {
            $scope.imgshow=false;

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
  $scope.choosePeople=function () {
    $ionicActionSheet.show({
      buttons: [
        { text: '<center>王恺</center><hr/>' },
        { text: '<center>刘栋</center><hr/>' },
        { text: '<center>毛豪庆</center><hr/>' },
        { text: '<center>王强</center><hr/>' },
        { text: '<center>仙蒙</center><hr/>' },
        { text: '<center>蒋一龙</center><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>' }
      ],
      destructiveText: '<center>取消</center>',
      buttonClicked:function () {
        return true;
      },
      destructiveButtonClicked:function () {
        return true;
      }
    });

  }
$scope.submitAppointment=function () {
  $state.go('tab.pay');
}
}])

