// 个人信息页面服务
angular.module('app.services')
  .factory('PersonalInformationServe', ['$http','$q',function($http, $q) {
    //获取信息
    return {
      information: function(params) {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: GlobalConfig.url.api.user.show,
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
    //修改信息
      update: function(params) {
        var deferred = $q.defer();
        $http({
          method: 'POST',
          url: GlobalConfig.url.api.user.update,
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

  }]);
