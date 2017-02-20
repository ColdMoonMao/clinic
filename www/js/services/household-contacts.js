/**
 * Created by liudong on 17-2-18.
 */
angular.module('app.services')

  .factory('Contacts', function() {
    var people=[{
      id: 0,
      name: '邓超',
      phone: '13572229938',
      place: '延安'
    },
      {
        id: 1,
        name: '陈赫',
        phone: '13572229938',
        place: '北京'
      },
      {
        id: 2,
        name: '木林森',
        phone: '13572229938',
        place: '高新'
      },
      {
        id: 3,
        name: '王宝强',
        phone: '13572229938',
        place: '河南'
      },

      {
        id: 4,
        name: '郑凯',
        phone: '13572229938',
        place: '高新'
      },
      {
        id: 5,
        name: '林心如',
        phone: '13572229938',
        place: '台湾'
      },];

    return {
      all: function() {
        return people;
      },
      remove: function(people) {
        people.splice(people.indexOf(people), 1);
      },
      get: function(peopleId) {
        for (var i = 0; i < people.length; i++) {
          if (people[i].id === parseInt(peopleId)) {
            return people[i];
          }
        }
        return null;
      }
    };
  })
