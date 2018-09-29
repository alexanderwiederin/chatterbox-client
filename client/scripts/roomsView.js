var RoomsView = {

  $button: $('#rooms .add'),
  $select: $('#rooms select'),
  

  initialize: function() {
    RoomsView.$button.on('click', Rooms.add);
    RoomsView.$select.on('input', MessagesView.renderByRoom(RoomsView.$select.value));
  },

  render: function() {
  },
  
  renderRoom: function(roomName) {
    var present = false;
    for (var i = 0; i < RoomsView.$select.children().length; i++) {
      if (roomName.replace(/\s/g, '') === RoomsView.$select.children()[i].value) {
        present = true;
        break; 
      }
    }
    
    if (!present) {
      var roomElement = Rooms.render({'roomName': roomName, 'noSpaceName': roomName.replace(/\s/g, '')});
      $(roomElement).appendTo(RoomsView.$select);  
    }
  }

};
