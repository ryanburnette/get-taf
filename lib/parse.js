'use strict';

var { parseString } = require('xml2js');

async function parse(xml) {
  return new Promise(function (resolve, reject) {
    parseString(xml, { explicitArray: false }, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
}

module.exports = parse;
