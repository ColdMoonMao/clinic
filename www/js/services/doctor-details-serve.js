/**
 * Created by a1 on 2017/2/22.
 */
angular.module('app.services')
  .factory('DoctorDetailServe', function($http,$q) {

    //获取医生详情
    return {
      DoctorDetail: function(params) {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: GlobalConfig.url.api.doctor.show,
          params: params,
          responseType: 'json',
          timeout: 30000
        }).then(function(data) {
          deferred.resolve(data);
        }, function(error) {
          deferred.reject(error);
        });
        return deferred.promise;
      },
      //获取医生的 可约时间
      DoctorTime: function(params) {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: GlobalConfig.url.api.doctor.availableAppointment,
          params: params,
          responseType: 'json',
          timeout: 30000
        }).then(function(data) {
          deferred.resolve(data);
        }, function(error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }
    };

  })
