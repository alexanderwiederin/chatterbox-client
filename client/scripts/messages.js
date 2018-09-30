var Messages = {
  
  _data: {},
  
  items: () => {
    return _.chain(Object.values(Messages._data)).sortBy('createdAt');
  },
  
  render: _.template(`
      <div class="chat">
        <div class="username"><%- username %></div>
        <div><%- text %></div>
      </div>
    `),
  
  conform: function(message) {
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || 'lobby';
  }
  

};

