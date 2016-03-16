# ABTesting Build Automation

Automatisation de construction d'un test d'ABtesting pour les intégrateurs de tests. Ce système vous permet de travailler votre css / js / html dans des fichiers distrincts et séparés.

Vous n'autrez donc plus besoin de minifier vos fichiers CSS / HTLM, puis de copier/coller ces même fichiers dans votre app.js. Terminé la gestion fastidieuse des dépendances grace à Browserify.

Vous avez l'habitude d'écrire du CSS avec SASS ? C'est maintenant possible !



Concrètement le setup est basé sur Grunt pour transformer un set de fichier

* html
* scss
* js

en un seul et unique fichier (package) JavaScript (le build) executable.

L'injection des dépendances est géré avec [Browserify](http://browserify.org/)



Démo :

![demo](http://g.recordit.co/81aEJxsNJ8.gif)



## Utilisation

### Installation
**Vous avez besoin de Grunt**

```

grunt auto_install

```

### Génération du build

Tapez dans votre terminal

```

grunt watch

```

Un build sera lancé à chaque modification dans un des fichiers suivants

* app.js
* partials/index.html
* style.scss

### Gestion des dépendances

Si vous avez besoin d'inclure certaines librairies dans vos tests vous pouvez les glisser dans le dossier libs (ou les récupérer par npm) puis ensuite vous pouvez les inclures dans votre app.js



```javascript
// ./libs/hello.js
module.exports = {

  sayHello :function(){
    console.log('Je suis un module :)');
  }

};

```

Puis instanciez dans app.js

```javascript

var hello = require ('./libs/hello.js');
hello.sayHello();

```



Votre librairie est bien chargée dans votre test !

### Plugins

#### Info bar

(affiche une info bar collé sur le bas de la fenêtre)

**Dans app.js***

```javascript
var infoBar = require('./libs/infoBar/app.js');
var jqueryCookie = require('./libs/jqueryCookie/app.js'); jqueryCookie();


infoBar.init({
  bar:".mybar", // Spécifiez le nom l'element  ou par defaut #ab-info-bar
  cookieName: "myCustomCookie" // Spécifiez le nom d'un cookie ou par defaut "ab-info-bar"
});
```

**Dans style.scss**

```CSS
@import "libs/infoBar/app.scss";
```

**Dans partials/index.html**

copiez coller le modèle de libs/infoBar/index.html

```html
<div id="ab-info-bar" class="ab-info-bar abb-hidden-xs">
<div class="ab-info-bar-container">
Hello World
</div>
<span class="ab-info-bar-close">X</span>
</div>
```


### Utilisation du build

Copiez collez le contenu de build.js dans votre console ou copiez le dans l'input dédié au JavaScript de votre solution d'ABtesting


### Démarrer un nouveau projet

```
git clone git@github.com:Antoinebr/ABTesting-Build-Automation.git new-test

```
