# ABTesting Build Automation

Setup basé sur Grunt pour transformer un set de fichier
* html
* scss
* js
en un seul et unique fichier (package) JavaScript (le build) executable.

## Utilisation

**Vous avez besoin de Grunt**

### Génération du build

Tapez dans votre terminal

```

grunt watch

```

A chaque modification dans les fichiers suivants relancera le build

* app.js
* partials/index.html
* style.scss

### Utilisation du build

Copiez collez le contenu de build.js dans votre console ou copiez le dans l'input dédié au JavaScript de votre solution d'ABtesting
