var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  var type = req.method;
  var path = req.originalUrl;
  global.db.collection('countries').find().toArray(function(err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
    if (global.actions_json[type + path].return_type == null) {
      res.render(global.actions_json[type + path].view, {
        stitle: 'First Cnx Mongo',
        title: 'Liste déroulante',
        countries: result
      });
    } else {
      res.send(JSON.stringify(result));
    }
  });
});
module.exports = router;
