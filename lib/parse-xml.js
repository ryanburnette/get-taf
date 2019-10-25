'use strict';

var { parseString } = require('xml2js');

function parseXml(xmlString) {
  return new Promise(function(resolve, reject) {
    parseString(xmlString, { explicitArray: false }, function(err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
}

module.exports = parseXml;
