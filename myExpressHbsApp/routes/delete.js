/* *********************************************************
 ** Module générique pour faire un "deleteOne()" via l’_id *
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
  global.schemas[modelName].deleteOne({
    _id: new ObjectId(req.params._id)
  }, function(err, result) {
    if (err) {
      throw err;
    }
    global.schemas[modelName].find({}, function(err, result2) {
      console.log("result after delete : ", result2);
      res.render(global.actions_json[type + path].view, {
        title: "List of " + model,
        data: result2
      });
    });
  });
});
module.exports = router;
