var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    MessagesView.initialize();
    RoomsView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(() => {
      App.stopSpinner;
      RoomsView.$select.on('change', MessagesView.renderByRoom($('option:selected').text()));
    });
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:

      console.log(data);
      for (let message of data.results) {
        Messages.conform(message);
        Messages._data[message.objectId] = message;
        MessagesView.renderMessage(message);
        RoomsView.renderRoom(message.roomname);
      }
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
