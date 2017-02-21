/**
 * Created by liudong on 17-2-18.
 */
angular.module('app.controllers')
  .controller('ServesCtrl', ['$scope', function($scope) {
    $scope.sureList=[
      {
        id:'0',
        img:'img/mike.png',
        doctor:'李医生（工号001）',
        place:'后宰门130号创之星大厦一单元122（中户） 医师',
        state:'复诊',
        time:'建议复诊时间：2016-01-25',
      },
      {
        id:'2',
        img:'img/mike.png',
        doctor:'李医生（工号001）',
        place:'后宰门130号创之星大厦一单元122（中户） 医师',
        state:'复诊',
        time:'建议复诊时间：2016-01-25',
      },
      {
        id:'3',
        img:'img/mike.png',
        doctor:'李医生（工号001）',
        place:'后宰门130号创之星大厦一单元122（中户） 医师',
        state:'复诊',
        time:'建议复诊时间：2016-01-25',
      }
    ]
  }]
  )
