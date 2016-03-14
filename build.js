(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var buildsource = {};

buildsource.index = '<section>  <h1 id="ab-title">Je suis le title :) </h1></section>';

buildsource.style = 'section h1{color:red;font-size:180px}';
// Prototype
AbTest.prototype = {
  event: function(eventName){
    ABTastyEvent(eventName,null,this.id);
  }
};

// Constructeur
function AbTest(id){
  this.id = id;
}


// Injection des dépendances avec browserify

//var slider = require ('./libs/slider'); slider();
var abCookie = require ('./libs/jqueryCookies.js'); abCookie();


// Instanciation
var myAbTest = new AbTest(321);


// Injecte les styles dans la page
myAbTest.runStyle = function(){
  $('body').append('<style>'+buildsource.style+'</style>');
};

// Inject le HTML
myAbTest.runHtml = function(){
  $('body').append(buildsource.index);
};

myAbTest.listenClick = function(){
  $('#ab-title').click(function(){
    alert('T\'est balaise toi !');
    $.cookie('antoineCookie', 'the-value', { expires: 7 });
  });
};

// Init le test
myAbTest.init = function(){
  this.runStyle();
  this.runHtml();
  this.listenClick();
};



myAbTest.init();

},{"./libs/jqueryCookies.js":2}],2:[function(require,module,exports){
module.exports = function(){

  // Jquery Cookie
  var pluses = /\+/g;

  function encode(s) {
    return config.raw ? s : encodeURIComponent(s);
  }

  function decode(s) {
    return config.raw ? s : decodeURIComponent(s);
  }

  function stringifyCookieValue(value) {
    return encode(config.json ? JSON.stringify(value) : String(value));
  }

  function parseCookieValue(s) {
    if (s.indexOf('"') === 0) {
      // This is a quoted cookie as according to RFC2068, unescape...
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }

    try {
      // Replace server-side written pluses with spaces.
      // If we can't decode the cookie, ignore it, it's unusable.
      s = decodeURIComponent(s.replace(pluses, ' '));
    } catch (e) {
      return;
    }

    try {
      // If we can't parse the cookie, ignore it, it's unusable.
      return config.json ? JSON.parse(s) : s;
    } catch (e) { }
  }

  function read(s, converter) {
    var value = config.raw ? s : parseCookieValue(s);
    return $.isFunction(converter) ? converter(value) : value;
  }

  var config = $.cookie = function (key, value, options) {

    // Write
    if (value !== undefined && !$.isFunction(value)) {
      options = $.extend({}, config.defaults, options);

      if (typeof options.expires === 'number') {
        var days = options.expires, t = options.expires = new Date();
        t.setDate(t.getDate() + days);
      }

      return (document.cookie = [
        encode(key), '=', stringifyCookieValue(value),
        options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
        options.path ? '; path=' + options.path : '',
        options.domain ? '; domain=' + options.domain : '',
        options.secure ? '; secure' : ''
      ].join(''));
    }

    // Read

    var result = key ? undefined : {};

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all. Also prevents odd result when
    // calling $.cookie().
    var cookies = document.cookie ? document.cookie.split('; ') : [];

    for (var i = 0, l = cookies.length; i < l; i++) {
      var parts = cookies[i].split('=');
      var name = decode(parts.shift());
      var cookie = parts.join('=');

      if (key && key === name) {
        // If second argument (value) is a function it's a converter...
        result = read(cookie, value);
        break;
      }

      // Prevent storing a cookie that we couldn't decode.
      if (!key && (cookie = read(cookie)) !== undefined) {
        result[name] = cookie;
      }
    }

    return result;
  };

  config.defaults = {};

  $.removeCookie = function (key, options) {
    if ($.cookie(key) === undefined) {
      return false;
    }

    // Must not alter options, thus extending a fresh object...
    $.cookie(key, '', $.extend({}, options, { expires: -1 }));
    return !$.cookie(key);
  };

  // Jquery Cookie

};

},{}]},{},[1]);
