// CLINICDetail页面服务
angular.module('app.services')
	.factory('ClinicDetailServe', ['$http','$q',function($http, $q) {
			return {
				detail: function(params) {
					var deferred = $q.defer();
					$http({
						method: 'GET',
						url: GlobalConfig.url.api.hospital.getById,
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
