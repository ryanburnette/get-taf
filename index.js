'use strict';

var getRaw = require('./lib/get-raw');
var parseXml = require('./lib/parse-xml');
var removeDollarSigns = require('./lib/remove-dollar-signs');
var dateStringsToDateObjects = require('./lib/date-strings-to-objects');

function getTaf(airport) {
  return getRaw(airport)
    .then(function(xml) {
      return parseXml(xml);
    })
    .then(function(obj) {
      obj = obj.response.data.TAF;
      obj = removeDollarSigns(obj);
      obj = dateStringsToDateObjects(obj);
      return obj;
    });
}

module.exports = getTaf;
