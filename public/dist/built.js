var tt = Temple.fromSelector;


// function to serialize form data into an object
(function($){
    $.fn.serializeObject = function(){

        var self = this,
            json = {},
            push_counters = {},
            patterns = {
                "validate": /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
                "key":      /[a-zA-Z0-9_]+|(?=\[\])/g,
                "push":     /^$/,
                "fixed":    /^\d+$/,
                "named":    /^[a-zA-Z0-9_]+$/
            };


        this.build = function(base, key, value){
            base[key] = value;
            return base;
        };

        this.push_counter = function(key){
            if(push_counters[key] === undefined){
                push_counters[key] = 0;
            }
            return push_counters[key]++;
        };

        $.each($(this).serializeArray(), function(){

            // skip invalid keys
            if(!patterns.validate.test(this.name)){
                return;
            }

            var k,
                keys = this.name.match(patterns.key),
                merge = this.value,
                reverse_key = this.name;

            while((k = keys.pop()) !== undefined){

                // adjust reverse_key
                reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), '');

                // push
                if(k.match(patterns.push)){
                    merge = self.build([], self.push_counter(reverse_key), merge);
                }

                // fixed
                else if(k.match(patterns.fixed)){
                    merge = self.build([], k, merge);
                }

                // named
                else if(k.match(patterns.named)){
                    merge = self.build({}, k, merge);
                }
            }

            json = $.extend(true, json, merge);
        });

        return json;
    };
})(jQuery);


var CreateForm = Temple.DOM.form.extend({
	
	render: function(inputs, submitMethod, legend){
		if(legend) this.append(tt('legend',legend));
		this.style({
			background:'white',
			padding: '20px',
			width: "75%",
			margin: "auto",
			border: '1px solid lightgray' 
		});
		var row = tt('div.row');
		inputs.map(function(input){
			var i = tt('div.row',
				tt('div.form-group.pad')
					.append(
						tt('label.col-sm-3.control-label', input.label),
						tt('div.col-sm-9').append(
							tt('input').attr({
								type: input.type,
								placeholder: input.placeholder,
								name: input.name
							})
						)
					)
				);
			row.append(i);
		});
		var submitBtn = tt('button.submit-form','Submit');
		this.append(row,submitBtn);

		this.addEventListener('submit', submitMethod);
	}
});

// input types

var inputName = {
	label: 'Name: ',
	name: 'user',
	placeholder: 'Name...',
	type: 'text'
};

var inputEmail = {
	label: 'Email: ',
	name: 'email',
	placeholder: 'Email...',
	type: 'email'
};

var inputPassword = {
	label: 'Password: ',
	name: 'password',
	placeholder: 'Password...',
	type: 'text'
};

var inputLocation = {
	label: 'Location: ',
	name: 'location',
	placeholder: 'Location...',
	type: 'text'
};

var inputBirthdate = {
	label: 'Birthdate: ',
	name: 'birthdate',
	placeholder: 'Birthdate...',
	type: 'date'
};

// form submit methods

var createNewUser = function(e){
			console.log('submitted.');
			e.preventDefault();
			var form = $(e.target);
			var data = $(form).serializeObject();
			console.log('data:', data);

			var newUser = users.create(data);
			console.log('newUser: ', newUser);
		};






	
var Navbar = Backbone.View.extend({
	tagName: 'div',
	template: JST.navbar,
	data: {
		userName: "User's Name"
	},
	render: function() {
	    this.el.innerHTML = this.template(this.data);
	    return this;
	}
});

	




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



	
	var CocreationContainer = Temple.DOM.div.extend({
		render: function(songInfo){
			this.append(
				tt('div.song-outer-container').append(
					tt('div.song-inner-container').append(
						tt('div.song-header').append(
							tt('canvas.visuals-main'),
							tt('div.song-info').append(
								tt('h1', songInfo.songName),
								tt('p', songInfo.songDescription),
								tt('div.transport').append(
									tt('button#play.btn.btn-lg.btn-success', 'Play'),
									tt('button#stop.btn.btn-lg.btn-danger', 'Stop')
								)
							)
						),
						tt('ul#track-container'),
						tt('div.transport2').append(
							tt('button#create-track-slot.btn.btn-default','New Instrument Slot'),
							tt('button#download-song.btn.btn-default','Download Song'),
							tt('button#like-song.btn.btn-default','Like Song'),
							tt('button#share-song.btn.btn-default','Share Song')
						)
					)
				)
			);
			this.addEventListener('click', '#play', function(){
				console.log('play song.');
			});

			this.addEventListener('click', '#stop', function(){
				console.log('stop song.');
			});

			this.addEventListener('click', '#create-track-slot', function(){
				new TrackSlot().mount().paint('#track-container');
			});
			
			// this.addEventListener('click', '#play', playSong);
		},
		// playSong: function(){
		// 	console.log('play song.');
		// },
		// events: {
		// 	'click #play':playSong
		// },
	});

	//  Use like this...
	// var songName = 'Song Name Here';
	// var songDescription = 'A description of the song goes here.';
	// var songContainer = new CocreationContainer().mount(songName, songDescription).paint('#cocreation');




// var newForm = require('./test');

// var inputs = [inputName, inputEmail, inputPassword, inputLocation, inputBirthdate];
// new UserForm().mount(inputs, createNewUser, 'Create New User').paint('#create-user');










// module.exports = function(word){
// 	return 'hello' + word;
// };

var TrackContent = Temple.DOM.div.extend({
	render: function(trackInfo){
		this.addClass('track-content').append(
			tt('div.track-user-image'),
			tt('div.track-user-info-box').append(
				tt('div.track-user-name', trackInfo.userName),
				tt('div.track-title', trackInfo.trackTitle),
				tt('button.like.like-track.btn.btn-xs.btn-primary').append(
					tt('i.fa.fa-thumbs-o-up')
				),
				tt('div.likes', trackInfo.likes + ' Likes')
			)
		);
	}
});


// Use like this...
// var trackInfo = {
// 	userName: "User's Name",
// 	trackTitle: "Title of Track",
// 	likes: 11
// };

// new TrackContent().mount(trackInfo).paint('#track-content');




var TrackSlot = Temple.DOM.li.extend({
	initialize: function(){
		console.log('initializing.');
	},
	// trackVolume: function(vol){
	// 	var trackVolume = vol || 77;
	// 	return trackVolume;
	// },
	trackVolume: 77,
	// trackVolumeDep: new Temple.Deps.Dependency,
	getTrackVolume: function(){
		// this.trackVolumeDep.depend();
		return this.trackVolume;
	},
	// changeVolume: new Temple.Deps.autorun(function(){
	//     console.log('New trackVolume: ', this.getTrackVolume);
	// }),
	render: function(trackInfo){
		var instrument;
		 if( trackInfo && trackInfo.instrument) {
		 	instrument = tt('h3', trackInfo.instrument);
		 } else {
		 	instrument = tt('h3', 'instrumentName');
		 }

		 // if is new track, create input for instrument name
		var newInstrumentInput;
		if(!trackInfo){
			console.log('testing..');
			newInstrumentInput = tt('div.instrument-input').append(
				tt('input#instrument-input').attr({
					type: 'text',
				}),
				tt('button#create-instrument.btn.btn-sm.btn-default','Create')
					.addEventListener('click',function(){
						this.stop();
						var instrumentName = $('#instrument-input').val();
						var el = '<h3>' + instrumentName + '</h3>';
						
						// $(this).closest('.track-container').prepend(el);
						$(this).closest('.track-container').find('h3').text(instrumentName);
						$('.instrument-input').remove();
					}),
				// cancel track creation
				tt('button#cancel.btn.btn-sm.btn-default','Cancel')
					.addEventListener('click',function(){
						this.stop();
						$(this).closest('.track-container').remove();
					})
			);
			
		} else {
			newInstrumentInput = '';
		}
		
		if (trackInfo && trackInfo.trackVolume) this.trackVolume = trackInfo.trackVolume;
		this.addClass('track-li')
			.append(
				tt('div.track-container').append(
					instrument,
					tt('div.container').append(
						tt('div.row').append(
							tt('div.track-controls.col-xs-5.col-sm-4.col-md-3').append(
								// tt('canvas#canvas.visuals'),
								tt('select#track-select.select-track.btn.btn-default').append(
									tt('option','Select Track')
								),
								tt('div#upload-download.upload-download.shadow').append(
									tt('button.btn.btn-default.btn-xs','Upload'),
									tt('a').append(
										tt('button.btn.btn-default.btn-xs','Download')
									)
								),
								tt('button.play-track.btn.btn-xs.btn-success').append(
									tt('i.fa.fa-play-circle')
								),
								tt('button.mute.btn.btn-xs.btn-danger','M'),
								tt('div.track-volume-label','Track Volume:'),
								tt('input.track-volume').attr({
									type: 'range',
									name: 'track-volume',
									min: 0,
									max: 100,
									value: this.getTrackVolume()
								})
							),
							tt('div#track-content.col-xs-7.col-sm-8.col-md-9')
						)
					),
					newInstrumentInput
				)
				
			);

		

		this.addEventListener('change','.track-volume', function(e){
			this.trackVolume = e.target.value;
			// this.stop();
			// this.trackVolumeDep.changed();

			console.log('new trackVolume', this.trackVolume);
		});
	}
});

// use like this....
// var trackInfo = {
// 	instrument: 'Instrument Name',
// 	trackVolume: 88
// };
// new TrackSlot().mount('Instrument Name').paint('#track-container');




// create instance of Users backbone collection 
var users = new Users();

// Render cocreation container
var songInfo = {
	songName: 'Song Name Here',
	songDescription: 'A description of the song goes here.'
};
var songContainer = new CocreationContainer().mount(songInfo).paint('#cocreation');

// render instrument slot
var trackInfo = {
	instrument: 'Instrument Name',
	trackVolume: 88
};
new TrackSlot().mount(trackInfo).paint('#track-container');
console.log('new TrackSlot: ', new TrackSlot());


// render track content
var trackInfo = {
	userName: "User's Name",
	trackTitle: "Title of Track",
	likes: 11
};
new TrackContent().mount(trackInfo).paint('#track-content');






// render new user form
var inputs = [inputName, inputEmail, inputPassword, inputLocation, inputBirthdate];
new CreateForm().mount(inputs, createNewUser, 'Create New User').paint('#create-user');
