// 我的服务页面服务
angular.module('app.services')
	.factory('TabMeServe', ['$http','$q',function($http, $q) {
			return {
			  //获取某个用户已确认等待的服务接口
        getSure: function(params) {
					var deferred = $q.defer();
					$http({
						method: 'GET',
						url: GlobalConfig.url.api.service.normalUserConfirmed,
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
        //获取某个用户未确认的服务接口
        getNoSure: function(params) {
          var deferred = $q.defer();
          $http({
            method: 'GET',
            url: GlobalConfig.url.api.service.normalUserUnconfirmed,
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
        //获取某个用户待支付的服务接口
        getNoPay: function(params) {
          var deferred = $q.defer();
          $http({
            method: 'GET',
            url: GlobalConfig.url.api.order.normalUserUnpaid,
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
