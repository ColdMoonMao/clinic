/**
 * Created by a1 on 2017/2/24.
 */
angular.module('app.services')
  .factory('PayServe', function($http,$q) {
    return{
      //上传预约订单接口(POST)
      PayData: function(params) {
        var deferred = $q.defer();
        $http({
          method: 'POST',
          url: GlobalConfig.url.api.pay,
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

