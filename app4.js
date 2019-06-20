var http = require('http');
var url = require('url');
var server = http.createServer(function(req, res) {
      var page = url.parse(req.url).pathname;
      console.log(page);
      res.writeHead(200, {
        "Content-Type": "text/plain"
      });
      if (page == '/') {
        res.write('Vous etes à l\'accueil');
      } else if (page == '/sous-sol') {
        res.write('Vous etes dans la cave a vins, ces bouteilles sont a moi!');
        }
        else if (page == '/etage/1/chambre') {
          res.write('He ho, c\'est prive ici !');
        }
        res.end();
      }); server.listen(8080);

//en rajoutant directement dans url on récupère les frappes dans le terminal
