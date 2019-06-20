var readFile = require('fs').readFile;
var http = require('http');
var url = require('url');
let file = 'index.html';
var server = http.createServer(function(req, res) {
      var page = url.parse(req.url).pathname;
      console.log(page);
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      if (page == '/') {
         file = 'index.html';
      } else if (page == '/sous-sol') {
         file = 'fileSousSol.html';
        }
        else if (page == '/etage/1/chambre') {
         file = 'file1Etage.html';
        }

        readFile(file, function(error, result) { //lecture Asynchrone
          if (!error) {
            console.log('contenu du fichier : \n' + result);
            res.write(result);
            res.end();
          } else {
            console.log('Erreur accès fichier : ', error);
          }
        });

      }); server.listen(8080);

//en rajoutant directement dans url on récupère les frappes dans le terminal
