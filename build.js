
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

var myAbTest = new AbTest(321);

// Injecte les styles dans la page
myAbTest.runStyle = function(){
  $('body').append('<style>'+buildsource.style+'</style>');
};

// Inject le HTML
myAbTest.runHtml = function(){
  $('body').append(buildsource.index);
};

// Déclanche une action au click
myAbTest.listenClick = function(){
  $('#ab-title').click(function(){
    alert('42 ?');
  });
};

// Init le test
myAbTest.init = function(){
  this.runStyle();
  this.runHtml();
  this.listenClick();
};



myAbTest.init();
