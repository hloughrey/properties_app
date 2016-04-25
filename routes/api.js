var express = require('express');
var router = express.Router();

var postcodes = require('../api/postcodes');
var properties = require('../api/properties');

router.get('/', function(req, res) {
  res.json ({message: 'the properties api was called!'})
});
router.get('/properties', properties.getLatest);
router.get('/postcodes', postcodes.validatePostcodes);

module.exports = router;
