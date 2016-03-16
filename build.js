(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var buildsource = {};

buildsource.index = '<div id="ab-info-bar" class="ab-info-bar abb-hidden-xs">  <div class="ab-info-bar-container">    Hello World  </div>  <span class="ab-info-bar-close">X</span></div><div id="pop1" class="parentDisable">  <div class="popin-container">    <div class="popin">      <h2> Hello World</h2>    </div>  </div></div>';

buildsource.style = '.parentDisable{z-index:999;width:100%;height:100%;display:none;position:fixed;top:0;left:0;background:#000;background:rgba(0,0,0,0.6)}.popin{padding:15px;width:600px;min-height:280px;margin:-140px auto 0 -300px;color:#000;position:fixed;top:50%;left:50%;background-color:#FFF}.logo-fan-edition-block,.ribbon-right,.ribon-left{display:inline-block;position:relative}.ab-info-bar-container span{display:inline-block;vertical-align:top;margin-top:2px}.logo-fan-edition-block{top:8px;margin-left:5px;vertical-align:top}.ab-info-bar-logo{position:relative;top:-18px;vertical-align:top;margin-right:10px}@media only screen and (max-width: 1124px){.abb-hidden-sm{display:none}}@media only screen and (max-width: 871px){.abb-hidden-xs{display:none}}.ab-info-bar{height:38px;line-height:38px;width:100%;background-color:#eaeaea;border-color:#2F418E;color:#000;text-align:center;position:fixed;left:0;right:0;bottom:0;z-index:9999999999999999999999}.ab-info-bar-close{position:fixed;bottom:10px;right:30px;cursor:pointer;border:1px solid #000;border-radius:90px;height:24px;width:24px;line-height:24px}';
AbTest.prototype = {
  abEvent: function(eventName){
    ABTastyEvent(eventName,null,this.id);
  },
  about: function(){
    console.log('Test '+this.id+' is running');
  },
  runStyle: function(){
    $('body').append('<style>'+this.buildsource.style+'</style>');
  }
};
function AbTest(id,buildsource){
  this.id = id;
  this.buildsource = buildsource;
}
var abPopin = require('./libs/popin/app.js');
var jqueryCookie = require('./libs/jqueryCookie/app.js'); jqueryCookie();
var infoBar = require('./libs/infoBar/app.js'); infoBar.init();
var myAbTest = new AbTest(97909,buildsource);
myAbTest.runHtml = function(){
  $('body').append(buildsource.index);
};



myAbTest.listenClick = function(){
  var that = this;
  $('.ab-info-bar-close').click(function(){
    infoBar.closeBar();
    that.abEvent('popinClosed');
  });
};
myAbTest.init = function(){
  this.about();
  this.runStyle();
  this.runHtml();
  this.listenClick();
  abPopin.pop('pop1');
};


myAbTest.init();

},{"./libs/infoBar/app.js":2,"./libs/jqueryCookie/app.js":3,"./libs/popin/app.js":4}],2:[function(require,module,exports){
module.exports = {
  init: function(settings){

    if(typeof(settings) !== "undefined"){
      this.bar = settings.bar;
      this.cookieName = settings.cookieName;
    }else{
      this.bar = "#ab-info-bar";
      this.cookieName = "ab-info-bar";
    }
  },
  closeBar: function(){
    var that = this;

    $(this.bar).fadeOut();
    $(this.bar).addClass('ab-info-bar-closed');
    if (isNaN(that.getCookie(this.cookieName))){
      that.setCookie(this.cookieName, '1');
    }else{
      var newCookieValue = that.getCookie(this.cookieName) + 1;
      that.setCookie(this.cookieName, newCookieValue );
    }

  },
  setCookie: function(cookieName,cookieValueString){
    console.log('SET COOKIE FIRED !');
    $.cookie(cookieName, cookieValueString, { expires: 7, path: '/' });
  },
  getCookie: function(cookieName){
    var value = null;
    if($.cookie(cookieName) == "undefined" ){
      value = 0;
    }else{
      value = parseInt($.cookie(cookieName));
    }
    return value;
  }

};

},{}],3:[function(require,module,exports){
module.exports = function(){
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
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }

    try {
      s = decodeURIComponent(s.replace(pluses, ' '));
    } catch (e) {
      return;
    }

    try {
      return config.json ? JSON.parse(s) : s;
    } catch (e) { }
  }

  function read(s, converter) {
    var value = config.raw ? s : parseCookieValue(s);
    return $.isFunction(converter) ? converter(value) : value;
  }

  var config = $.cookie = function (key, value, options) {
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

    var result = key ? undefined : {};
    var cookies = document.cookie ? document.cookie.split('; ') : [];

    for (var i = 0, l = cookies.length; i < l; i++) {
      var parts = cookies[i].split('=');
      var name = decode(parts.shift());
      var cookie = parts.join('=');

      if (key && key === name) {
        result = read(cookie, value);
        break;
      }
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
    $.cookie(key, '', $.extend({}, options, { expires: -1 }));
    return !$.cookie(key);
  };

};

},{}],4:[function(require,module,exports){
module.exports = {
  pop: function(div) {
    document.getElementById(div).style.display='block';
    return false;
  },

  hide: function(div) {
    document.getElementById(div).style.display='none';
    return false;
  }

};

},{}]},{},[1]);
