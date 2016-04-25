var express = require('express');
var router = express.Router();

var api = require('../api/properties');

/* GET Properties page. */
router.get('/', function(req, res, next) {
  var postcode_param = req.query.postcode,
      propertyType_param = req.query.propertyType;

  api.getLatest(postcode_param, propertyType_param);

  res.render('properties', { title: 'Properties' });

});

module.exports = router;
