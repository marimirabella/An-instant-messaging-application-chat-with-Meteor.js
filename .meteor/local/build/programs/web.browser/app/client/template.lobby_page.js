(function(){
Template.__checkName("lobby_page");
Template["lobby_page"] = new Template("Template.lobby_page", (function() {
  var view = this;
  return Spacebars.include(view.lookupTemplate("available_user_list"));
}));

Template.__checkName("available_user_list");
Template["available_user_list"] = new Template("Template.available_user_list", (function() {
  var view = this;
  return [ HTML.Raw('<h4 class="header test">You should to log in as user1@test.com ... user18@test.com with the password test123. Log in as different users in two different web browsers at the same time, seeing the users can talk to each other instantly.</h4>\n	<h2 class="header">Choose someone to chat with:</h2>\n	'), HTML.DIV({
    "class": "row"
  }, "\n	", Blaze.Each(function() {
    return Spacebars.call(view.lookup("users"));
  }, function() {
    return [ "\n	", Spacebars.include(view.lookupTemplate("available_user")), "\n	" ];
  }), "\n") ];
}));

Template.__checkName("available_user");
Template["available_user"] = new Template("Template.available_user", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-2"
  }, "\n		", HTML.DIV({
    "class": "user_avatar"
  }, "\n			", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("isMyUser"), view.lookup("_id"));
  }, function() {
    return [ " \n			", HTML.DIV({
      "class": "bg-success"
    }, Blaze.View("lookup:getUsername", function() {
      return Spacebars.mustache(view.lookup("getUsername"), view.lookup("_id"));
    }), " (YOU)\n				", HTML.BR(), "\n				", HTML.IMG({
      src: function() {
        return [ "/", Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "avatar")) ];
      },
      "class": "avatar_img"
    }), "			\n			"), "\n			" ];
  }, function() {
    return [ "\n			", HTML.A({
      href: function() {
        return [ "/chat/", Spacebars.mustache(view.lookup("_id")) ];
      }
    }, "\n				", Blaze.View("lookup:getUsername", function() {
      return Spacebars.mustache(view.lookup("getUsername"), view.lookup("_id"));
    }), "\n				", HTML.BR(), "\n				", HTML.IMG({
      src: function() {
        return [ "/", Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "avatar")) ];
      },
      "class": "avatar_img"
    }), "\n			"), "\n			" ];
  }), "\n		"), "\n	");
}));

}).call(this);
