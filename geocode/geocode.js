const request = require('request');

var geocodeAddress = (address, callback) => {
  request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address),
    json: true
  }, (error, response, body) => {
    if (error){
      callback('error connecting');
    } else if (body.status === 'ZERO_RESULTS'){
      callback('invalid address');
    } else if (body.status === 'OK'){
      callback(undefined, {
        location: body.results[0].geometry.location
      });
    }
  });
};
module.exports = {
  geocodeAddress
};
