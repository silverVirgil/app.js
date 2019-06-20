var readFile = require('fs').readFile;
readFile('app2.js', function(error, result) { //lecture Asynchrone
  if (!error) {
    console.log('contenu du fichier : \n' + result);
  } else {
    console.log('Erreur accès fichier : ', error);
  }
});
