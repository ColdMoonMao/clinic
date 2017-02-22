/**
 * Created by a1 on 2017/2/22.
 */
//医生列表
angular.module('app.services')
  .factory('DoctorListServe', function($http,$q) {
    return {
      //获取医生列表
      DoctorList: function(params) {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: GlobalConfig.url.api.doctor.specialityOfHospital,
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
