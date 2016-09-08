(function(){
Template.__checkName("chat_page");
Template["chat_page"] = new Template("Template.chat_page", (function() {
  var view = this;
  return [ HTML.H2({
    "class": "header"
  }, "Type in the box below to send a message to ", HTML.B(Blaze.View("lookup:other_user", function() {
    return Spacebars.mustache(view.lookup("other_user"));
  })), HTML.IMG({
    src: function() {
      return [ "/", Spacebars.mustache(view.lookup("avatar")) ];
    },
    "class": "avatar_img"
  }), "!"), "\n	", HTML.DIV({
    "class": "row"
  }, "\n		", HTML.DIV({
    "class": "col-md-12"
  }, "\n			", HTML.DIV({
    "class": "well well-lg"
  }, "\n			", Blaze.Each(function() {
    return Spacebars.call(view.lookup("messages"));
  }, function() {
    return [ "\n			", Spacebars.include(view.lookupTemplate("chat_message")), "\n			" ];
  }), "\n			"), "	\n		"), "\n	"), "\n    ", HTML.DIV({
    "class": "row"
  }, "\n		", HTML.DIV({
    "class": "col-md-12"
  }, "\n			", HTML.FORM({
    "class": "js-send-chat"
  }, "\n			", HTML.Raw('<input class="input form-control" type="text" name="chat" placeholder="type a message here...">'), "\n			", HTML.P("\n			", HTML.Raw("<br>"), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ":D"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ":D"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: "o_o"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), "o_o"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ":)"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ":)"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ":("
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ":("));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: "-_-"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), "-_-"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ":P"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ":P"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ":O"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ":O"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: "8)"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), "8)"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ":smirk:"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ":smirk:"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ":["
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ":["));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ":ninja:"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ":ninja:"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ":nerd:"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ":nerd:"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ":S"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ":S"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ":bashful:"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ":bashful:"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ":crying:"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ":crying:"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ":puke:"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ":puke:"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ":love:"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ":love:"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ":devil:"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ":devil:"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ":angel:"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ":angel:"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ">:D"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ">:D"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ":wtf:"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ":wtf:"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ":sweating:"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ":sweating:"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ":embarrassed:"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ":embarrassed:"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: "x-D"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), "x-D"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: "O.o"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), "O.o"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ";)"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ";)"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ":\\"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ":\\"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ":beer:"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ":beer:"));
  })), "\n				", HTML.A({
    href: "#",
    "class": "js-add-emoji",
    title: ":poop:"
  }, Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), ":poop:"));
  })), "\n			"), "\n			", HTML.Raw('<button class="btn btn-info btn-lg">Send</button>'), "\n		"), "\n		"), "\n	") ];
}));

Template.__checkName("chat_message");
Template["chat_message"] = new Template("Template.chat_message", (function() {
  var view = this;
  return [ HTML.DIV({
    "class": "row"
  }, "\n		", HTML.DIV({
    "class": "col-md-1"
  }, "\n			", HTML.IMG({
    src: function() {
      return [ "/", Spacebars.mustache(view.lookup("avatar")) ];
    },
    "class": "avatar_img"
  }), " ", HTML.Raw("<!-- display avatar -->"), "\n		"), "\n		", HTML.DIV({
    "class": "col-md-11 text"
  }, "\n			", HTML.B(Blaze.View("lookup:username", function() {
    return Spacebars.mustache(view.lookup("username"));
  })), " ", HTML.Raw("<!-- display username -->"), "\n			", HTML.Raw("<br>"), "\n			", Blaze.View("lookup:parseEmoticons", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parseEmoticons"), view.lookup("text")));
  }), "\n		"), "\n	"), HTML.Raw("\n	<br>") ];
}));

}).call(this);
