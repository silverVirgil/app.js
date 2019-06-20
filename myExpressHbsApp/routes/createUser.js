var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
/* Insert one new user into database. */
router.route('/').get(function(req, res) {
  console.log('req.originalUrl : ', req.originalUrl);
  if (!req.query.hasOwnProperty("_id")) req.query._id = new ObjectId();
  GLOBAL.schemas["Users"].create([req.query], function(err, result) {
      if (err) {
        throw err;
      }
      console.log('createUser: ', result);
      res.render('modifyUser', {
        title: 'Creating User without error with datas below :',
        data: result[0]._doc
      });
    } // fin callback de l'insert
  ); // fin de l'insert()
}); // fin de la gestion de la route
module.exports = router;
