//subscription, read access to collections
Meteor.subscribe("chats");
Meteor.subscribe("users");

// set up the main template the the router will use to build pages
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});
// specify the top level route, the page users see when they arrive at the site
Router.route('/', function () {
  console.log("rendering root /");
  this.render("navbar", {to:"header"});
  this.render("lobby_page", {to:"main"});  
});

// specify a route that allows the current user to chat to another users
Router.route('/chat/:_id', function () {
  // the user they want to chat to has id equal to 
  // the id sent in after /chat/... 
  var otherUserId = this.params._id;
  // set id to other user
  Session.set("otherUserId", otherUserId);
  //Save the id to the session
  var id = Meteor.call("getChatId", Meteor.userId(), otherUserId, function(err, res){
    if(!err){
      Session.set("chatId", res);
    }
  });
  this.render("navbar", {to:"header"});
  this.render("chat_page", {to:"main"});  
});

///
// helper functions 
/// 
Template.available_user_list.helpers({
  users:function(){
    return Meteor.users.find();
  }
})
Template.available_user.helpers({
  getUsername:function(userId){
    user = Meteor.users.findOne({_id:userId});
    return user.profile.username;
  }, 
  isMyUser:function(userId){
    if (userId == Meteor.userId()){
      return true;
    }
    else {
      return false;
    }
  }
})


Template.chat_page.helpers({
  messages:function(){
    Meteor.call("addMessages", Session.get("chatId"), function(err, res){
      if(!err){ // all good
        Session.set("messages", res);
      }
    }); 
    return Session.get("messages");
  }, 
  other_user:function(){
    var otherUser = Meteor.users.findOne({_id:Session.get("otherUserId")});
    if(otherUser){
      return otherUser.profile.username;
      console.log("other");
    }
  },
  avatar:function(){
    var otherUser = Meteor.users.findOne({_id:Session.get("otherUserId")});
    if(otherUser){
      return otherUser.profile.avatar;
    }
  }
})

///////
//Events
///////

Template.chat_page.events({
// this event fires when the user sends a message on the chat page
  'submit .js-send-chat':function(event){
    // stop the form from triggering a page reload
    event.preventDefault();
    // see if we can find a chat object in the database
    // to which we'll add the message
    if(!Meteor.user()){ // user not available
        alert("You need to login first!");
      }
    var chat = Chats.findOne({_id:Session.get("chatId")});
    if (chat){// ok - we have a chat to use
      var msgs = chat.messages; // pull the messages property
      if (!msgs){// no messages yet, create a new array
        msgs = [];
      }
      // is a good idea to insert data straight from the form
      // (i.e. the user) into the database?? certainly not. 
      // push adds the message to the end of the array
      // adding username and avatar to message
      msgs.push({text: event.target.chat.value, username: Meteor.user().profile.username, avatar: Meteor.user().profile.avatar});
      // reset the form
      event.target.chat.value = "";
      // put the messages array onto the chat object
      chat.messages = msgs;
      // update the chat object in the database.
      // Chats.update(chat._id, chat);
      console.log("You add a doc!");
      Meteor.call("update", chat._id, chat);
    }
  },
  "click .js-add-emoji": function(event){
    event.preventDefault();
    var target, emoji;
    target = event.currentTarget;
    emoji = target.title; 
    console.log(emoji);
    var before = $("input").val();
    var after = before + " " + emoji;
    $("input").val(after);
  }
})

