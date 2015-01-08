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
