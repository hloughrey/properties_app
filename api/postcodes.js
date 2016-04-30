var request = require('request');
var util = require('util');

var credentials = require('../bin/credentials');

module.exports = {

  validatePostcodes: function(req, res, callback) {
    var url = util.format(credentials.postcodes.postcodes_url,
                          req.query.postcode).toString();

    console.log(url);

    request(url, function(err, res, body) {
      if(err) return next(err);
      if(res.statusCode != 200)
        return next(new Error('Abnormal response status code'));
      console.log(body);
      callback(JSON.parse(body));
    })
  }
}
