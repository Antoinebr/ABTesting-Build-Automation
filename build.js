
var buildsource = {};

buildsource.index = '<h1> Je suis un petit test :)</h1><p>   Je suis un 2Nd paragraphe</p><section class="home">  <p>    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p></section>';

buildsource.style = 'h1{color:red}p{color:blue}.home h1{color:#1b85c1}';

// Inject the HTML markup
$('body').append(buildsource.index);

// Inject the styles
$('body').append('<style>'+buildsource.style+'</style>');


// Logique du code
console.log('Mon code');
