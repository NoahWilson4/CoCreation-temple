

	
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

	
