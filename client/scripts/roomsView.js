var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', Rooms.add);
  },

  render: function() {
  },
  
  renderRoom: function(roomName) {
    var roomElement = Rooms.render({roomName: roomName});
    $(roomElement).appendTo(RoomsView.$select);
  }

};
