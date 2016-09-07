Meteor.methods({ 
  getChatId:function(user1Id, user2Id){
    // find a chat that has two users that match current user id
    // and the requested user id
    var filter = {$or:[
              {user1Id:Meteor.userId(), user2Id:user2Id}, 
              {user2Id:Meteor.userId(), user1Id:user2Id}
              ]};
    var chat = Chats.findOne(filter);
    if (!chat){// no chat matching the filter - need to insert a new one
      var chatId = Chats.insert({user1Id:user1Id, user2Id:user2Id});
      return chatId;
    }
    // there is a chat going already - use that. 
      return chat._id;
  },
  // adding new messages
  addMessages:function(chatId){
    console.log("addMessages method running!");
    if(!this.userId){ // we have a user
       return; // give up
    }
    else{
      var chat = Chats.findOne({_id:chatId});
      if(chat){
        return chat.messages;
      }
    }
  },
  //update messages
  update:function(chatId, chat){
    console.log("update method ");
    Chats.update(chatId, chat);
  }
})