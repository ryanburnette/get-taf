'use strict';

var getTaf = require('./index.js');
var inspect = require('eyes').inspector({ maxLength: false });

(async function () {
  inspect(await getTaf('KSRQ'));
})();
