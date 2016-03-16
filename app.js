// Prototype
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

// Constructeur
function AbTest(id,buildsource){
  this.id = id;
  this.buildsource = buildsource;
}

/*
*
*  Require des Dependences
*
*/
var abPopin = require('./libs/popin/app.js');
var jqueryCookie = require('./libs/jqueryCookie/app.js'); jqueryCookie();
var infoBar = require('./libs/infoBar/app.js'); infoBar.init();


// Instanciation
var myAbTest = new AbTest(97909,buildsource);


// Inject le HTML
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



// Init le test
myAbTest.init = function(){
  this.about();
  this.runStyle();
  this.runHtml();
  this.listenClick();
  abPopin.pop('pop1');
};


myAbTest.init();
