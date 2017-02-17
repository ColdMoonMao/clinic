angular.module('app.services', []);

angular.module('app.services')

.factory('Chats', function() {
	// Might use a resource here that returns a JSON array

	// Some fake testing data
	var chats = [{
		id: 0,
		name: 'Ben Sparrow0',
		lastText: 'You on your way?',
		face: 'img/ben.png'
	}, {
		id: 1,
		name: 'Ben Sparrow1',
		lastText: 'You on your way?',
		face: 'img/ben.png'
	}, {
		id: 2,
		name: 'Ben Sparrow2',
		lastText: 'You on your way?',
		face: 'img/ben.png'
	}, {
		id: 3,
		name: 'Ben Sparrow3',
		lastText: 'You on your way?',
		face: 'img/ben.png'
	}, {
		id: 4,
		name: 'Max Lynx4',
		lastText: 'Hey, it\'s me',
		face: 'img/max.png'
	}, {
		id: 5,
		name: 'Max Lynx5',
		lastText: 'Hey, it\'s me',
		face: 'img/max.png'
	}, {
		id: 6,
		name: 'Adam Bradleyson6',
		lastText: 'I should buy a boat',
		face: 'img/adam.jpg'
	}, {
		id: 7,
		name: 'Adam Bradleyson7',
		lastText: 'I should buy a boat',
		face: 'img/adam.jpg'
	}, {
		id: 8,
		name: 'Perry Governor8',
		lastText: 'Look at my mukluks!',
		face: 'img/perry.png'
	}, {
		id: 9,
		name: 'Perry Governor9',
		lastText: 'Look at my mukluks!',
		face: 'img/perry.png'
	}, {
		id: 10,
		name: 'Mike Harrington10',
		lastText: 'This is wicked good ice cream.',
		face: 'img/mike.png'
	}, {
		id: 11,
		name: 'Mike Harrington11',
		lastText: 'This is wicked good ice cream.',
		face: 'img/mike.png'
	}, {
		id: 12,
		name: 'Mike Harrington12',
		lastText: 'This is wicked good ice cream.',
		face: 'img/mike.png'
	}];

	return {
		all: function() {
			return chats;
		},
		remove: function(chat) {
			chats.splice(chats.indexOf(chat), 1);
		},
		get: function(chatId) {
			for (var i = 0; i < chats.length; i++) {
				if (chats[i].id === parseInt(chatId)) {
					return chats[i];
				}
			}
			return null;
		}
	};
});