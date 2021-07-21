'use strict';

var getTaf = require('./index.js');

(async function () {
  var taf = await getTaf(process.argv[2] || 'KSRQ');
  console.log(JSON.stringify(taf));
})();
