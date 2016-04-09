'use strict';

// const lodash = require('./lodash');

function app(nCases, input) {

  
  input.map(line => line.split(' ').reverse().join(' ')).map(log);
}

/* UTILITIES */

function log(x, i) {
  console.log(`Case #${i + 1}: ${x}`);
}

require('fs').readFile('input.in', 'utf8', (err, data) => {
  if (err) throw err;
  
  // text --> array of line
  const input = data.split('\n');
  // trim empty last line
  if (!input[input.length - 1]) input.pop();
  // first line is almost always N, the number of cases
  app(parseInt(input.shift(), 10), input);
});
