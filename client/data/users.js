var User = Backbone.Model.extend({
	defaults: function(){
		var now = new Date();
		var userDefaults = {
			joined: now,
			newUser: true
		};
		return userDefaults;
	},
	signIn: function(){

	},
	signOut: function(){
		
	}	
});

var Users = Backbone.Collection.extend({
	model: User
});

