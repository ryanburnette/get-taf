'use strict';

var axios = require('axios');

var baseUrl =
  'https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=tafs&requestType=retrieve&format=xml&hoursBeforeNow=12&timeType=issue&mostRecent=true';

function getRaw(airport) {
  return axios.get(baseUrl + '&stationString=' + airport).then(function(resp) {
    if (resp.data.includes('<data num_results="0" />')) {
      throw new Error('airport not found');
    }

    return resp.data;
  });
}

module.exports = getRaw;
