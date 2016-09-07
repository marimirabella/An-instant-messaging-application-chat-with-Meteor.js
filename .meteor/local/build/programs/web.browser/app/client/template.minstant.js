(function(){
Template.body.addContent((function() {
  var view = this;
  return "";
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("ApplicationLayout");
Template["ApplicationLayout"] = new Template("Template.ApplicationLayout", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return "header";
  }, function() {
    return Spacebars.include(view.lookupTemplate("yield"));
  }), "\n	\n	", HTML.DIV({
    "class": "container"
  }, "\n	", Blaze._TemplateWith(function() {
    return "main";
  }, function() {
    return Spacebars.include(view.lookupTemplate("yield"));
  }), "\n	") ];
}));

}).call(this);
