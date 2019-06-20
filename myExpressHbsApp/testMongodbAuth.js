var dbClient = require('mongodb').MongoClient;
console.log('--> mongoClient : ', dbClient);
var f = require('util').format;
var assert = require('assert');
var user = encodeURIComponent('greta');
var password = encodeURIComponent('azerty');
const authMechanism = 'DEFAULT';
// formatage de l'URL de connexion
var url = f('mongodb://%s:%s@localhost:27017/gretajs?authMechanism=%s',
  user, password, authMechanism); // Connexion URL
// Connexion effective à la base de donées
dbClient.connect(url, {
    useNewUrlParser: true
  },
  function(err, client) {
    assert.equal(null, err);
    console.log("Successfully connected to server");
    global.db = client.db('gretajs');
    console.log('global.db : ', global.db);
    client.close();
  }
);
