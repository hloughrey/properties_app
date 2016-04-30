var request = require('request');
var util = require('util');

var credentials = require('../bin/credentials');

module.exports = {

  getProperties: function(req, res, callback) {
    var url = util.format(credentials.zoopla.zoopla_url,
                          req.query.postcode,
                          credentials.zoopla.search_size,
                          credentials.zoopla.api_key,
                          req.query.propertyType).toString();

    request(url, function(err, res, body) {
      if(err) return next(err);
      if(res.statusCode != 200)
        return next(new Error('Abnormal response status code'));
      console.log(body);
      callback(JSON.parse(body));
    })
  }
}
