'use strict';

function isDate(str) {
  try {
    return str == new Date(str).toISOString().replace(/\.[0-9]{3}/, '');
  } catch (err) {
    return false;
  }
}

module.exports = isDate;
