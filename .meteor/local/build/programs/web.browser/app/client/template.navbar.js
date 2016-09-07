(function(){
Template.__checkName("navbar");
Template["navbar"] = new Template("Template.navbar", (function() {
  var view = this;
  return HTML.NAV({
    "class": "navbar navbar-default"
  }, "\n  ", HTML.DIV({
    "class": "container-fluid"
  }, "\n    ", HTML.Raw('<div class="navbar-header">\n      <a class="navbar-brand" href="/">\n        Minstant!\n      </a>\n    </div>'), "\n    ", HTML.DIV({
    "class": "nav navbar-nav"
  }, "\n    ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n"), "\n  "), "\n");
}));

}).call(this);
