
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
