var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  },
  
  renderRoom: function(roomName) {
    var roomElement = Rooms.render({roomName: roomName});
    $(roomElement).appendTo(RoomsView.$select);
  }

};
