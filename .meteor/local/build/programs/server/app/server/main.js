(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/main.js                                                      //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.startup(function () {                                           // 1
  if (!Meteor.users.findOne()) {                                       // 2
    for (var i = 1; i < 19; i++) {                                     // 3
      var email = "user" + i + "@test.com";                            // 4
      var username = "user" + i;                                       // 5
      var avatar = "ava" + i + ".png";                                 // 6
      console.log("creating a user with password 'test123' and username/ email: " + email);
      Meteor.users.insert({ profile: { username: username, avatar: avatar }, emails: [{ address: email }], services: { password: { "bcrypt": "$2a$10$I3erQ084OiyILTv8ybtQ4ON6wusgPbMZ6.P33zzSDei.BbDL.Q4EO" } } });
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
// publish read access to collections                                  //
// all visible docs                                                    //
Meteor.publish("chats", function () {                                  // 15
  //func called when you want to access docs                           //
  return Chats.find({                                                  // 16
    $or: [{ user1Id: this.userId }, { user2Id: this.userId }]          // 17
  });                                                                  //
});                                                                    //
                                                                       //
Meteor.publish("users", function () {                                  // 24
  //func called when you want to access docs                           //
  return Meteor.users.find();                                          // 25
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=main.js.map
