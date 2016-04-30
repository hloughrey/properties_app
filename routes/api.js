var express = require('express');
var router = express.Router();

var postcodes = require('../api/postcodes');
var properties = require('../api/properties');

router.get('/', function(req, res) {
  res.json ({message: 'The API was called!'})
});

router.get('/properties', function(req, res) {
  properties.getProperties(req, res, function(data) {
    res.json(data);
  })
});

router.get('/postcodes', function(req, res) {
  postcodes.validatePostcodes(req, res, function(data) {
    res.json(data);
  })
});

module.exports = router;
