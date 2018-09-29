var Rooms = {
  
  
  render: _.template(`
        <option id=<%- noSpaceName %> value=<%- noSpaceName %>><%- roomName %></option>
    `),
  
  add: () => {
    
    // var newRoom = window.prompt("Please enter room name", 'Room name');
    
    // RoomsView.renderRoom(newRoom);
    
  }

};

