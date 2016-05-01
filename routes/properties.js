var express = require('express');
var router = express.Router();

var properties = require('../api/properties');

/* GET Properties page. */
// router.get('/', function(req, res, next) {
//   res.render('properties', { title: 'Properties' });
// });

router.get('/', function(req, res, next) {
  properties.getProperties(req, res, function(data) {
    // res.json(data);
    // properties_data = JSON.parse(data);
    res.render('properties', { title: 'Properties', result: data });
  });
});

module.exports = router;
