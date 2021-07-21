'use strict';

var get = require('./lib/get');
var parse = require('./lib/parse');
var removeDollarSigns = require('./lib/remove-dollar-signs');
var dateStringsToDateObjects = require('./lib/date-strings-to-objects');

async function getTaf(airport) {
  var xml = await get(airport);
  var obj = await parse(xml);
  obj = obj.response.data.TAF;
  obj = removeDollarSigns(obj);
  obj = dateStringsToDateObjects(obj);
  return obj;
}

module.exports = getTaf;
