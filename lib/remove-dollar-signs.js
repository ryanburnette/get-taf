'use strict';

var isObject = require('./is-object');

function removeDollarSigns(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (el) {
      return removeDollarSigns(el);
    });
  }
  if (isObject(obj)) {
    var keys = Object.keys(obj);
    if (keys.length == 1 && keys.includes('$')) {
      return obj.$;
    } else {
      var nobj = {};
      keys.forEach(function (k) {
        nobj[k] = removeDollarSigns(obj[k]);
      });
      return nobj;
    }
  }
  return obj;
}

module.exports = removeDollarSigns;
