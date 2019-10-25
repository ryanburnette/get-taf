'use strict';

var isObject = require('./is-object');
var isDate = require('./is-date');

function dateStringsToObjects(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function(el) {
      return dateStringsToObjects(el);
    });
  }
  if (isObject(obj)) {
    var nobj = {};
    Object.keys(obj).forEach(function(k) {
      nobj[k] = dateStringsToObjects(obj[k]);
    });
    return nobj;
  }
  if (isDate(obj)) {
    return new Date(obj);
  } else {
    return obj;
  }
}

module.exports = dateStringsToObjects;
