/**
 * Created by liudong on 17-2-18.
 */
//修改联系人页面服务
angular.module('app.services')
  .factory('AlterManServe', ['$http','$q', function($http,$q) {
    return {
      //保存按钮接口
      alterMan: function(params) {
        var deferred = $q.defer();
        $http({
          method: 'POST',
          url: GlobalConfig.url.api.patient.update,
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
      //删除按钮接口
      removeMan: function(params) {
        var deferred = $q.defer();
        $http({
          method: 'POST',
          url: GlobalConfig.url.api.patient.remove,
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
    };
  }])
