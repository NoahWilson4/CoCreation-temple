
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


