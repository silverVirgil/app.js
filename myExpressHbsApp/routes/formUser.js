var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

/* GET users from _id. */
router.route('/:_id').get(function(req, res) {
 var path = '/' + req.originalUrl.split('/')[1];
 var type = req.method;

 console.log('req.originalUrl : ', req.originalUrl);

 GLOBAL.schemas[global.actions_json[type + path].modelName].find({_id: new ObjectId(req.params._id)},function(err, result) {
   if (err) {
     throw err;
   }

     console.log('formUser: ', result);
     res.render(global.actions_json[type + path].view, {
       title: "Form user\'s datas",
       libelle: "modification",
       form_action: "/modifyUser",
       user: result[0] // il n'y a qu'une réponse possible puisque requête via _id user
     });
   });
});
module.exports = router;
