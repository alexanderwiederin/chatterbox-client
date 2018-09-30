var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    
    var message = $('#message').val();
    var messageObj = {
      username: App.username || 'anonymous',
      text: message || '',
      roomName: $("select option:selected").text() || 'default'
    };
    
    
    Parse.create(messageObj, (data) => {
      _.extend(messageObj, data);
    });
    
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

