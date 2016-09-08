//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var _ = Package.underscore._;

/* Package-scope variables */
var MeteorSettings;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// packages/ogourment_settings/packages/ogourment_settings.js                                        //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
(function () {                                                                                       // 1
                                                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                             //    // 4
// packages/ogourment:settings/settings.js                                                     //    // 5
//                                                                                             //    // 6
/////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                               //    // 8
                                                                                               // 1  // 9
MeteorSettings = { REQUIRED: 1, REQUIRED_IN_PROD: 2 };                                         // 2  // 10
                                                                                               // 3  // 11
_.extend( MeteorSettings, {                                                                    // 4  // 12
                                                                                               // 5  // 13
  setDefaults: function (defaultsMap, options) {                                               // 6  // 14
                                                                                               // 7  // 15
     var settingsRequired =                                                                    // 8  // 16
      (options === MeteorSettings.REQUIRED);                                                   // 9  // 17
                                                                                               // 10
     if (Meteor.isServer) {                                                                    // 11
                                                                                               // 12
       settingsRequired |=                                                                     // 13
        (process.env.NODE_ENV === "production" &&                                              // 14
          options === MeteorSettings.REQUIRED_IN_PROD);                                        // 15
     }                                                                                         // 16
                                                                                               // 17
     if (settingsRequired) {                                                                   // 18
                                                                                               // 19
      if (! Meteor.settings /* undefined on client */ ||                                       // 20
          _.size(Meteor.settings) === 0 /* empty on server */ ) {                              // 21
                                                                                               // 22
        throw new Error("--settings or METEOR_SETTINGS required.");                            // 23
        // Note: it might also be the case that `settings.json` is empty... but it's unlikely. // 24
      }                                                                                        // 25
    }                                                                                          // 26
                                                                                               // 27
    Meteor.settings = Meteor.settings || {};                                                   // 28
    Meteor.settings.public = Meteor.settings.public || {};                                     // 29
                                                                                               // 30
    _deepDefaults(Meteor.settings, defaultsMap);                                               // 31
  }                                                                                            // 32
});                                                                                            // 33
                                                                                               // 34
var _nodes;                                                                                    // 35
                                                                                               // 36
var _deepDefaults = function (settings, map) {                                                 // 37
  _nodes = [];                                                                                 // 38
  return __deepDefaults(settings, map);                                                        // 39
};                                                                                             // 40
                                                                                               // 41
var __deepDefaults = function (settings, node) {                                               // 42
                                                                                               // 43
  _.each(node, function (node, key) {                                                          // 44
                                                                                               // 45
    // deep defaults                                                                           // 46
    var isArray = (node.constructor === Array);                                                // 47
    if ((node instanceof Object) &&                                                            // 48
      ! (node instanceof Date || isArray)) {                                                   // 49
                                                                                               // 50
      // watch for circular reference                                                          // 51
      if (_.indexOf(_nodes, node) >= 0) {                                                      // 52
        throw new Error("Circular reference found at: " + key + ":" + node);                   // 53
      }                                                                                        // 54
      _nodes.push(node);                                                                       // 55
                                                                                               // 56
      settings[key] = settings[key] || {};                                                     // 57
                                                                                               // 58
      __deepDefaults(settings[key], node);                                                     // 59
    }                                                                                          // 60
    else {                                                                                     // 61
      // if the value at key is undefined use the default node passed in                       // 62
      if (_.isUndefined(settings[key]))                                                        // 63
        settings[key] = node;                                                                  // 64
      else                                                                                     // 65
        settings[key] = settings[key];                                                         // 66
    }                                                                                          // 67
  });                                                                                          // 68
};                                                                                             // 69
                                                                                               // 70
/////////////////////////////////////////////////////////////////////////////////////////////////    // 79
                                                                                                     // 80
}).call(this);                                                                                       // 81
                                                                                                     // 82
///////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['ogourment:settings'] = {
  MeteorSettings: MeteorSettings
};

})();
