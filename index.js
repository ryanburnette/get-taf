'use strict';

var axios = require('axios');
var parseString = require('xml2js').parseString;

var baseUrl =
  'https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=tafs&requestType=retrieve&format=xml&hoursBeforeNow=12&timeType=issue&mostRecent=true';

module.exports = function(airport) {
  return axios
    .get(baseUrl + '&stationString=' + airport)
    .then(function(resp) {
      if (resp.status !== 200) {
        throw new Error('got http status ' + resp.status);
      }
      if (resp.data.includes('<data num_results="0" />')) {
        throw new Error('airport not found');
      }
      return resp.data;
    })
    .then(function(xmlString) {
      return new Promise(function(resolve, reject) {
        parseString(xmlString, {explicitArray: false}, function(err, result) {
          if (err) {
            return reject(err);
          }
          resolve(result);
        });
      });
    })
    .then(function(obj) {
      obj = obj.response.data.TAF;
      obj = removeDollarSigns(obj);
      obj = convertDateStringsToDateObjects(obj);
      return obj;
    });
};

function removeDollarSigns(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function(el) {
      return removeDollarSigns(el);
    });
  }
  if (isObject(obj)) {
    var keys = Object.keys(obj);
    if (keys.length == 1 && keys.includes('$')) {
      return obj.$;
    } else {
      var nobj = {};
      keys.forEach(function(k) {
        nobj[k] = removeDollarSigns(obj[k]);
      });
      return nobj;
    }
  }
  return obj;
}

function convertDateStringsToDateObjects(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function(el) {
      return convertDateStringsToDateObjects(el);
    });
  }
  if (isObject(obj)) {
    var nobj = {};
    Object.keys(obj).forEach(function(k) {
      nobj[k] = convertDateStringsToDateObjects(obj[k]);
    });
    return nobj;
  }
  if (isDate(obj)) {
    return new Date(obj);
  } else {
    return obj;
  }
}

function isObject(obj) {
  return obj && typeof obj === 'object';
}

function isDate(str) {
  try {
    return str == new Date(str).toISOString().replace(/\.[0-9]{3}/, '');
  } catch (err) {
    return false;
  }
}
