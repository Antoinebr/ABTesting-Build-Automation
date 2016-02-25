
var buildsource = {};

buildsource.index = '<section>  <h1>Je suis le title :) </h1></section>';

buildsource.style = 'section h1{color:red;font-size:10px}';

// Inject the HTML markup
$('body').append(buildsource.index);

// Inject the styles
$('body').append('<style>'+buildsource.style+'</style>');


// Logique du code


$('h1').on('click',function(){

  $(this).css('font-size','100px');

});
