(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// share/main.js                                                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.methods({                                                       // 1
  getChatId: function (user1Id, user2Id) {                             // 2
    // find a chat that has two users that match current user id       //
    // and the requested user id                                       //
    var filter = { $or: [{ user1Id: Meteor.userId(), user2Id: user2Id }, { user2Id: Meteor.userId(), user1Id: user2Id }] };
    var chat = Chats.findOne(filter);                                  // 9
    if (!chat) {                                                       // 10
      // no chat matching the filter - need to insert a new one        //
      var chatId = Chats.insert({ user1Id: user1Id, user2Id: user2Id });
      return chatId;                                                   // 12
    }                                                                  //
    // there is a chat going already - use that.                       //
    return chat._id;                                                   // 15
  },                                                                   //
  // adding new messages                                               //
  addMessages: function (chatId) {                                     // 18
    console.log("addMessages method running!");                        // 19
    if (!this.userId) {                                                // 20
      // we have a user                                                //
      return; // give up                                               // 21
    } else {                                                           //
        var chat = Chats.findOne({ _id: chatId });                     // 24
        if (chat) {                                                    // 25
          return chat.messages;                                        // 26
        }                                                              //
      }                                                                //
  },                                                                   //
  //update messages                                                    //
  update: function (chatId, chat) {                                    // 31
    console.log("update method ");                                     // 32
    Chats.update(chatId, chat);                                        // 33
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=main.js.map
