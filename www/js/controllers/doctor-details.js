/**
 * Created by a1 on 2017/2/18.
 */
angular.module('app.controllers').controller('DoctorDetailsCtrl', ['$scope', '$state', '$stateParams', 'DoctorDetailServe', function ($scope, $state, $stateParams, DoctorDetailServe) {

  //-----医生详情接口----
  //获取token
  $scope.token = sessionStorage.getItem('token');
  //获取id
  console.log($stateParams.clinicId);
  console.log($stateParams.departId);
  console.log($stateParams.doctorId);
  //医生详情上传参数
  $scope.doctorDetailObj = {
    token: $scope.token,
    doctor_id: $stateParams.doctorId
  }
  //调接口
  DoctorDetailServe.DoctorDetail($scope.doctorDetailObj)
    .then(function (successData) {
      console.log(successData);
      $scope.doctor = successData.data.result;
      $scope.addressId = successData.data.result.addresses[0].id;

      //-----医生可约时间接口----(此接口需要上个接口的返回数据,因此只能放在成功回调里)
      //医生可约时间上传参数
      $scope.doctorTimeObj = {
        token: $scope.token,
        doctor_id: $stateParams.doctorId,
        address_id: $stateParams.clinicId
        // address_id:$scope.addressId
      }
      //调接口
      DoctorDetailServe.DoctorTime($scope.doctorTimeObj)
        .then(function (Data) {
          console.log(Data);
          $scope.dateArr = Data.data.result;

          //星期
          $scope.weekArr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六', '周日', '周一', '周二', '周三', '周四', '周五', '周六'];
          $scope.todayWeek = new Date().getDay();

          //日期选择变色
          $scope.CurrentArr = [
            {
              isCurrent: true
            },
            {
              isCurrent: false
            },
            {
              isCurrent: false
            },
            {
              isCurrent: false
            },
            {
              isCurrent: false
            },
            {
              isCurrent: false
            },
            {
              isCurrent: false
            },
            {
              isCurrent: false
            }];
          $scope.index = 0;
          $scope.choosedDate = $scope.dateArr[0].date;
          $scope.chooseDate = function (index) {
            $scope.index = index;
            //清日期
            $scope.CurrentArr.forEach(function (val, num, ele) {
              val.isCurrent = false;
            })
            //淸时间
            $scope.timeCurrentArr.forEach(function (val, number, ele) {
              val.isCurrent = false;
            })
            //选中变色
            $scope.CurrentArr[index].isCurrent = true;
            //取得日期
            $scope.choosedDate = $scope.dateArr[index].date;
            $scope.isSubmit = false;

          }

          //时间选择变色
          $scope.timeCurrentArr = [
            {
              isCurrent: false
            },
            {
              isCurrent: false
            },
            {
              isCurrent: false
            },
            {
              isCurrent: false
            },
            {
              isCurrent: false
            },
            {
              isCurrent: false
            },
            {
              isCurrent: false
            },
            {
              isCurrent: false
            },
            {
              isCurrent: false
            },
            {
              isCurrent: false
            },
            {
              isCurrent: false
            },
            {
              isCurrent: false
            },
            {
              isCurrent: false
            },
            {
              isCurrent: false
            },
            {
              isCurrent: false
            },
            {
              isCurrent: false
            }]
          $scope.chooseTime = function (num) {
            console.log((num < 8) ? $scope.dateArr[$scope.index].am_times[num].count : $scope.dateArr[$scope.index].pm_times[num - 8].count);
            if (((num < 8) ? $scope.dateArr[$scope.index].am_times[num].count : $scope.dateArr[$scope.index].pm_times[num - 8].count) > 0) {
              $scope.timeCurrentArr.forEach(function (val, number, ele) {
                val.isCurrent = false;
              })
              $scope.timeCurrentArr[num].isCurrent = true;
              //取得时间
              $scope.choosedTime = (num < 8) ? $scope.dateArr[$scope.index].am_times[num].time : $scope.dateArr[$scope.index].pm_times[num - 8].time;
              console.log($scope.choosedDate + ' ' + $scope.choosedTime)
              //取得预约类型
              $scope.time_type = $scope.dateArr[$scope.index].time_type;
              //设置提交开关
              $scope.isSubmit = true;


            } else {
              $scope.isSubmit = false;
              alert('你选的时间段不可预约');
            }
          };


          $scope.isSubmit = false;
          //提交预约
          $scope.toReservation = function () {
            if ($scope.isSubmit) {
              console.log('提交');
              sessionStorage.setItem('doctorDetail', JSON.stringify({
                doctor_id: $scope.doctor.id,
                time_type: $scope.time_type,
                appointment_time: $scope.choosedDate + ' ' + $scope.choosedTime,
                doctor_work_address_id: $scope.doctor.addresses[0].id
              }));
              $state.go('tab.conditionDescription');
            } else {
              alert('未选时间或你选的时间段不可预约');
            };
          };


        }, function (error) {
          alert(error);
        });
      //可约时间接口完

    }, function (error) {
      alert(error);
    });


}])
