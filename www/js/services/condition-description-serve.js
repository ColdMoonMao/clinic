/**
 * Created by a1 on 2017/2/24.
 */
/**
 * Created by a1 on 2017/2/22.
 */
angular.module('app.services')
  .factory('ConditionDescriptionServe', function($http,$q) {

    //获取患者联系人列表
    return {
      PatientList: function(params) {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: GlobalConfig.url.api.patient.show,
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

      //上传病情描述接口(POST)
      ConditionDescription: function(params) {
        var deferred = $q.defer();
        $http({
          method: 'POST',
          url: GlobalConfig.url.api.order.create,
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

