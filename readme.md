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

**Votre lib doit être incluse dans une function anonyme de l'objet module**

```javascript
// ./libs/slider.js
module.exports = function(){

  console.log('Je suis un module :)');

};

```

Puis instanciez dans app.js

```javascript

var slider = require ('./libs/slider');
slider();

```

Votre librairie est bien chargée dans votre test !


### Utilisation du build

Copiez collez le contenu de build.js dans votre console ou copiez le dans l'input dédié au JavaScript de votre solution d'ABtesting
