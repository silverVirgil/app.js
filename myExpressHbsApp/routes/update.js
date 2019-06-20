/* *********************************************************
 ** Module générique pour faire un "updateOne()" via l’_id *
 ** *********************************************************/
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
/* DELETE record from _id into url and into config_actions.json */
router.route('/:_id').get(function(req, res) {
  var path = "/" + req.originalUrl.split('/')[1];
  var type = req.method;
  var model = global.actions_json[type + path].modelName;
  global.schemas[model].updateOne({
      _id: req.params._id
    }, {
      $set: req.query
    },
  function(err, result) {
    if (err) {
      throw err;
    }
    global.schemas[model].find({_id: req.params._id}, function(err, result2) {
      console.log("result after update : ", result2);
      res.render(global.actions_json[type + path].view, {
        title: "List of " + model,
        data: result2[0]
      });
    });
  });
});
module.exports = router;
