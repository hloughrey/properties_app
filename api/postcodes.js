var request = require('superagent');

module.exports = {

  validatePostcodes: function(req, res) {
    console.log('Validate Postcodes');
    request
      .get ('api.postcodes.io/postcodes/hr26ef/validate')
      .set ('Accept', 'application/json')
      .end (function(err, res) {
        if (err) {
          console.log(err.message);
          res.end();
        } else {
          // console.log('Got response');
          console.log(res.body);
          return next(res.body);
        }
      });
  }
};
