var express = require('express');
var router = express.Router();

var api = require('../api/properties');

/* GET Properties page. */
router.get('/', function(req, res, next) {

  res.render('properties', { title: 'Properties' });

});

module.exports = router;
