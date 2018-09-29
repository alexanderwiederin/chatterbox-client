var MessagesView = {

  $chats: $('#chats'),
  

  initialize: function() {
    
  },

  render: function(data) {    
  },
  
  renderMessage: function(message) {
    var messageElement = Messages.render(message);
    $(messageElement).appendTo(MessagesView.$chats);
    $('.username').on('click', Friends.toggleStatus.bind($('.username')));
  }

};