
// Inject the HTML markup
$('body').append(buildsource.index);

// Inject the styles
$('body').append('<style>'+buildsource.style+'</style>');


// Logique du code


$('h1').on('click',function(){

  $(this).css('font-size','100px');

});
