'use strict';

var getTaf = require('./');
var inspect = require('eyes').inspector({maxLength: false});

getTaf('KATL').then(function(taf) {
  inspect(taf);
});
