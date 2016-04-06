'use strict';

const lodash = require('./lodash');

function app(input) {

  // your code
  // log(caseNumber, answer);
}

/* UTILITIES */

function log(i, x) {
  console.log(`Case #${i}: ${x}`);
}

require('fs').readFile('input.in', 'utf8', (err, data) => {
  if (err) throw err;
  app(data.split('\n'));
});
