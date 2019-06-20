var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
 GLOBAL.schemas['Users'].find({},function(err, result) {
   if (err) {
     throw err;
   }
   console.log('users: ', result);
   res.render('users', {
     title: 'List of users',
     users: result
   });
 });
});

module.exports = router;
