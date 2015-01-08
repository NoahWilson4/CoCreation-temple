
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



