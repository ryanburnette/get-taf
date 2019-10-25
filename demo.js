'use strict';

var getTaf = require('./');

getTaf('KATL').then(function(taf) {
  console.log(JSON.stringify(taf));
});
