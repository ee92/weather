const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: 'https://api.darksky.net/forecast/223deeb610567c0e1ba2f8ae7c242e62/' + lat + ',' + lng,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback(error)
    } else {
      callback(body.currently.temperature)
    }
  })
}

module.exports = {
  getWeather
};
