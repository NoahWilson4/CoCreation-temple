

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



