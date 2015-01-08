
	
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



