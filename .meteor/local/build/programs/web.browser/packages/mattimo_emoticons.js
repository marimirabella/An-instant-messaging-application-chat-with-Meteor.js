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
var Template = Package.templating.Template;
var _ = Package.underscore._;
var MeteorSettings = Package['ogourment:settings'].MeteorSettings;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __coffeescriptShare;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/mattimo_emoticons/packages/mattimo_emoticons.js                                              //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
(function () {                                                                                           // 1
                                                                                                         // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
// packages/mattimo:emoticons/meteor-emoticons.coffee.js                                              //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var escapeCharacters, preMatch, specialRegex;                                                            // 10
                                                                                                         // 11
MeteorSettings.setDefaults({                                                                             // 12
  "public": {                                                                                            // 13
    coreEmoticons: [                                                                                     // 14
      {                                                                                                  // 15
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_03.png',                     // 16
        replacements: ['o_o', 'O_O']                                                                     // 17
      }, {                                                                                               // 18
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_05.png',                     // 19
        replacements: [':D', ':-D']                                                                      // 20
      }, {                                                                                               // 21
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_07.png',                     // 22
        replacements: [':)', ':-)', '=)', '=-)']                                                         // 23
      }, {                                                                                               // 24
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_09.png',                     // 25
        replacements: [':(', ':-(']                                                                      // 26
      }, {                                                                                               // 27
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_15.png',                     // 28
        replacements: ['-_-']                                                                            // 29
      }, {                                                                                               // 30
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_16.png',                     // 31
        replacements: [':P', ':-P']                                                                      // 32
      }, {                                                                                               // 33
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_17.png',                     // 34
        replacements: [':O', ':-O', ':o']                                                                // 35
      }, {                                                                                               // 36
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_18.png',                     // 37
        replacements: [':smirk:']                                                                        // 38
      }, {                                                                                               // 39
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_23.png',                     // 40
        replacements: ['>:(', ':[']                                                                      // 41
      }, {                                                                                               // 42
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_24.png',                     // 43
        replacements: [':ninja:']                                                                        // 44
      }, {                                                                                               // 45
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_25.png',                     // 46
        replacements: [':nerd:']                                                                         // 47
      }, {                                                                                               // 48
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_26.png',                     // 49
        replacements: [':S', ':-S']                                                                      // 50
      }, {                                                                                               // 51
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_31.png',                     // 52
        replacements: [':bashful:']                                                                      // 53
      }, {                                                                                               // 54
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_32.png',                     // 55
        replacements: [':crying:']                                                                       // 56
      }, {                                                                                               // 57
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_33.png',                     // 58
        replacements: [':puke:']                                                                         // 59
      }, {                                                                                               // 60
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_34.png',                     // 61
        replacements: [':love:']                                                                         // 62
      }, {                                                                                               // 63
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_39.png',                     // 64
        replacements: [':devil:']                                                                        // 65
      }, {                                                                                               // 66
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_40.png',                     // 67
        replacements: [':angel:']                                                                        // 68
      }, {                                                                                               // 69
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_41.png',                     // 70
        replacements: ['8)', '8-)', '(H)']                                                               // 71
      }, {                                                                                               // 72
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_42.png',                     // 73
        replacements: [':wtf:']                                                                          // 74
      }, {                                                                                               // 75
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_47.png',                     // 76
        replacements: [':sweating:']                                                                     // 77
      }, {                                                                                               // 78
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_48.png',                     // 79
        replacements: ['>:D']                                                                            // 80
      }, {                                                                                               // 81
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_49.png',                     // 82
        replacements: [':spooked:']                                                                      // 83
      }, {                                                                                               // 84
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_50.png',                     // 85
        replacements: [':embarrassed:']                                                                  // 86
      }, {                                                                                               // 87
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_55.png',                     // 88
        replacements: ['O.o']                                                                            // 89
      }, {                                                                                               // 90
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_56.png',                     // 91
        replacements: ['x-D']                                                                            // 92
      }, {                                                                                               // 93
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_57.png',                     // 94
        replacements: [';)', ';-)']                                                                      // 95
      }, {                                                                                               // 96
        image: '/packages/mattimo_emoticons/assets/images/emoticons/caritas_58.png',                     // 97
        replacements: [':\\', ':-\\']                                                                    // 98
      }, {                                                                                               // 99
        image: '/packages/mattimo_emoticons/assets/images/emoticons/beer-chugger.gif',                   // 100
        replacements: [':beer:']                                                                         // 101
      }, {                                                                                               // 102
        image: '/packages/mattimo_emoticons/assets/images/emoticons/poop.png',                           // 103
        replacements: [':poop:']                                                                         // 104
      }                                                                                                  // 105
    ]                                                                                                    // 106
  }                                                                                                      // 107
});                                                                                                      // 108
                                                                                                         // 109
escapeCharacters = [')', '(', '*', '[', ']', '{', '}', '|', '^', '<', '>', '\\', '?', '+', '=', '.'];    // 110
                                                                                                         // 111
specialRegex = new RegExp('(\\' + escapeCharacters.join('|\\') + ')', 'g');                              // 112
                                                                                                         // 113
preMatch = '(^|[\\s\\0])';                                                                               // 114
                                                                                                         // 115
Template.registerHelper('parseEmoticons', function(text) {                                               // 116
  var emoticons, _ref, _ref1, _ref2, _ref3;                                                              // 117
  emoticons = (_ref = Meteor.settings["public"]) != null ? _ref.coreEmoticons : void 0;                  // 118
  if ((_ref1 = Meteor.settings["public"]) != null ? _ref1.extraEmoticons : void 0) {                     // 119
    emoticons = _.union((_ref2 = Meteor.settings["public"]) != null ? _ref2.coreEmoticons : void 0, (_ref3 = Meteor.settings["public"]) != null ? _ref3.extraEmoticons : void 0);
  }                                                                                                      // 121
  _.each(emoticons, function(emoticon) {                                                                 // 122
    return _.each(emoticon.replacements, function(replaceStr) {                                          // 123
      var match;                                                                                         // 124
      replaceStr = replaceStr.replace(specialRegex, '\\$1');                                             // 125
      match = new RegExp(preMatch + '(' + replaceStr + ')', 'g');                                        // 126
      return text = text.replace(match, '<img class="meteoremoticon" src="' + emoticon.image + '">');    // 127
    });                                                                                                  // 128
  });                                                                                                    // 129
  return text;                                                                                           // 130
});                                                                                                      // 131
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         // 133
}).call(this);                                                                                           // 134
                                                                                                         // 135
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['mattimo:emoticons'] = {};

})();
