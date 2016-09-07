Meteor.startup(function () {
    if (!Meteor.users.findOne()){
      for (var i=1;i<19;i++){
        var email = "user"+i+"@test.com";
        var username = "user"+i;
        var avatar = "ava"+i+".png"
        console.log("creating a user with password 'test123' and username/ email: "+email);
        Meteor.users.insert({profile:{username:username, avatar:avatar}, emails:[{address:email}],services:{ password:{"bcrypt" : "$2a$10$I3erQ084OiyILTv8ybtQ4ON6wusgPbMZ6.P33zzSDei.BbDL.Q4EO"}}});
      }
    } 
  });

// publish read access to collections
// all visible docs
Meteor.publish("chats",function(){ //func called when you want to access docs
  return Chats.find({ 
    $or: [ 
      {user1Id:this.userId}, 
      {user2Id:this.userId}
    ]
  });
});

Meteor.publish("users",function(){ //func called when you want to access docs
    return Meteor.users.find();
});
