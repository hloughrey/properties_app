var request = require('superagent');
var credentials = require('../bin/credentials');

module.exports = {

  getLatest: function(postcode_param, propertyType_param) {
    var url;

    url =  'api.zoopla.co.uk/api/v1/property_listings.json?postcode='
    url += postcode_param + '&page_size=' + credentials.search_size + '&api_key='
    url += credentials.api_key + '&property_type=' + propertyType_param;

    console.log('Get Latest Properties');
      request
        .get (String(url))
        .set ('Accept', 'application/json')
        .end (function(err, res) {
          if (err || res.statusCode != 200) {
            console.log(err.message);
            return err.message;
          } else {
            console.log('Latest Properties Returned');
            console.log(res.body);
            return (JSON.stringify(res.body));
        }
    });
  }
}
