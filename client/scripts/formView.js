var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    // event.preventDefault();
    
    var message = $('#message').val();
    
    var messageObj = {
      username: window.location.search.substr(10) || 'anonymous',
      text: message || '',
      roomName: 'default'
    };
    
    
    console.log(message);
    
    Parse.create(messageObj);
    
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

