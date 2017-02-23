/**
 * Created by liudong on 17-2-18.
 */
//家庭联系人页面服务
angular.module('app.services')
  .factory('Contacts', ['$http','$q', function($http,$q) {
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
    };
  }])
