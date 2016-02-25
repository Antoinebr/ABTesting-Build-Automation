
var buildsource = {};

buildsource.index = '<h1> Je suis le h1</h1>';

buildsource.style = 'h1{color:red}';

// Inject the HTML markup
$('body').append(buildsource.index);

// Inject the styles
$('body').append('<style>'+buildsource.style+'</style>');


// Logique du code


$('h1').on('click',function(){
  $(this).hide();
});
