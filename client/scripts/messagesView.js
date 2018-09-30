var MessagesView = {

  $chats: $('#chats'),
  $button: $('.refresh'),
  

  initialize: function() {
    this.$button.on('click', () => {
      App.startSpinner();
      MessagesView.$chats.empty();
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
    
    App.startSpinner();
    MessagesView.$chats.empty();
    Messages.items().filter(message => message.roomname === roomName).forEach((message) => {
      MessagesView.renderMessage(message);
    });
    App.stopSpinner();
  }

};