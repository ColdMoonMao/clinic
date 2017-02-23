/**
 * Created by liudong on 17-2-18.
 */
//添加联系人页面服务
angular.module('app.services')
  .factory('AddManServe', ['$http','$q', function($http,$q) {
    return {
      addMan: function(params) {
        var deferred = $q.defer();
        $http({
          method: 'POST',
          url: GlobalConfig.url.api.patient.add,
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
