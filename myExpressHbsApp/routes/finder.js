/* ******************************************************
 ** Module générique pour faire un "find()" sans filtre *
 ** ******************************************************/
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
/* GET users listing. */
router.get('/', function(req, res, next) {
  var path = "/" + req.originalUrl.split('/')[1];
  var type = req.method;
  global.schemas[global.actions_json[type + path].modelName].find({}, function(err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
    if (result.length == 0) result = null;
    res.render(global.actions_json[type + path].view, {
      title: 'List of results :',
      data: result
    });
  });
});
module.exports = router;
