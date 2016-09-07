(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/main.js                                                      //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
//subscription, read access to collections                             //
Meteor.subscribe("chats");                                             // 2
Meteor.subscribe("users");                                             // 3
                                                                       //
// set up the main template the the router will use to build pages     //
Router.configure({                                                     // 6
  layoutTemplate: 'ApplicationLayout'                                  // 7
});                                                                    //
// specify the top level route, the page users see when they arrive at the site
Router.route('/', function () {                                        // 10
  console.log("rendering root /");                                     // 11
  this.render("navbar", { to: "header" });                             // 12
  this.render("lobby_page", { to: "main" });                           // 13
});                                                                    //
                                                                       //
// specify a route that allows the current user to chat to another users
Router.route('/chat/:_id', function () {                               // 17
  // the user they want to chat to has id equal to                     //
  // the id sent in after /chat/...                                    //
  var otherUserId = this.params._id;                                   // 20
  // set id to other user                                              //
  Session.set("otherUserId", otherUserId);                             // 22
  //Save the id to the session                                         //
  var id = Meteor.call("getChatId", Meteor.userId(), otherUserId, function (err, res) {
    if (!err) {                                                        // 25
      Session.set("chatId", res);                                      // 26
    }                                                                  //
  });                                                                  //
  this.render("navbar", { to: "header" });                             // 29
  this.render("chat_page", { to: "main" });                            // 30
});                                                                    //
                                                                       //
///                                                                    //
// helper functions                                                    //
///                                                                    //
Template.available_user_list.helpers({                                 // 36
  users: function () {                                                 // 37
    return Meteor.users.find();                                        // 38
  }                                                                    //
});                                                                    //
Template.available_user.helpers({                                      // 41
  getUsername: function (userId) {                                     // 42
    user = Meteor.users.findOne({ _id: userId });                      // 43
    return user.profile.username;                                      // 44
  },                                                                   //
  isMyUser: function (userId) {                                        // 46
    if (userId == Meteor.userId()) {                                   // 47
      return true;                                                     // 48
    } else {                                                           //
      return false;                                                    // 51
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
Template.chat_page.helpers({                                           // 57
  messages: function () {                                              // 58
    Meteor.call("addMessages", Session.get("chatId"), function (err, res) {
      if (!err) {                                                      // 60
        // all good                                                    //
        Session.set("messages", res);                                  // 61
      }                                                                //
    });                                                                //
    return Session.get("messages");                                    // 64
  },                                                                   //
  other_user: function () {                                            // 66
    var otherUser = Meteor.users.findOne({ _id: Session.get("otherUserId") });
    if (otherUser) {                                                   // 68
      return otherUser.profile.username;                               // 69
      console.log("other");                                            // 70
    }                                                                  //
  },                                                                   //
  avatar: function () {                                                // 73
    var otherUser = Meteor.users.findOne({ _id: Session.get("otherUserId") });
    if (otherUser) {                                                   // 75
      return otherUser.profile.avatar;                                 // 76
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
///////                                                                //
//Events                                                               //
///////                                                                //
                                                                       //
Template.chat_page.events({                                            // 85
  // this event fires when the user sends a message on the chat page   //
  'submit .js-send-chat': function (event) {                           // 87
    // stop the form from triggering a page reload                     //
    event.preventDefault();                                            // 89
    // see if we can find a chat object in the database                //
    // to which we'll add the message                                  //
    if (!Meteor.user()) {                                              // 92
      // user not available                                            //
      alert("You need to login first!");                               // 93
    }                                                                  //
    var chat = Chats.findOne({ _id: Session.get("chatId") });          // 95
    if (chat) {                                                        // 96
      // ok - we have a chat to use                                    //
      var msgs = chat.messages; // pull the messages property          // 97
      if (!msgs) {                                                     // 98
        // no messages yet, create a new array                         //
        msgs = [];                                                     // 99
      }                                                                //
      // is a good idea to insert data straight from the form          //
      // (i.e. the user) into the database?? certainly not.            //
      // push adds the message to the end of the array                 //
      // adding username and avatar to message                         //
      msgs.push({ text: event.target.chat.value, username: Meteor.user().profile.username, avatar: Meteor.user().profile.avatar });
      // reset the form                                                //
      event.target.chat.value = "";                                    // 107
      // put the messages array onto the chat object                   //
      chat.messages = msgs;                                            // 109
      // update the chat object in the database.                       //
      // Chats.update(chat._id, chat);                                 //
      console.log("You add a doc!");                                   // 112
      Meteor.call("update", chat._id, chat);                           // 113
    }                                                                  //
  },                                                                   //
  "click .js-add-emoji": function (event) {                            // 116
    event.preventDefault();                                            // 117
    var target, emoji;                                                 // 118
    target = event.currentTarget;                                      // 119
    emoji = target.title;                                              // 120
    console.log(emoji);                                                // 121
    var before = $("input").val();                                     // 122
    var after = before + " " + emoji;                                  // 123
    $("input").val(after);                                             // 124
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
