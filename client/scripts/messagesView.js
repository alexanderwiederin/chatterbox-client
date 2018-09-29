var MessagesView = {

  $chats: $('#chats'),
  $button: $('.refresh'),
  

  initialize: function() {
    this.$button.on('click', () => {
      App.startSpinner();
      App.fetch(App.stopSpinner);
    });
  },

  render: function(data) {
  },
  
  renderMessage: function(message) {
    var messageElement = Messages.render(message);
    $(messageElement).appendTo(MessagesView.$chats);
    $('.username').on('click', Friends.toggleStatus.bind($('.username')));
  },
  
  renderByRoom: function(roomName) {
    // App.startSpinner();
    // RoomsView.$
  }

};