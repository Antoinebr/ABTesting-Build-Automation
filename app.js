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
