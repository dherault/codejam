'use strict';

// const lodash = require('./lodash'); // https://lodash.com, license information in lodash.js file

function app(nCases, input) {

  input.map(x => {
    
    const hasSeenDigit = [false, false, false, false, false, false, false, false, false, false];
    let finalNumber;
    
    for (let i = 1; i < 10000000; i++) {
      const xi = parseInt(x, 10) * i;
      xi.toString(10).split('').forEach(char => hasSeenDigit[parseInt(char, 10)] = true);
      if (hasSeenDigit.every(x => x)) {
        finalNumber = xi;
        break;
      }
    }
    
    return finalNumber || 'INSOMNIA';
  }).map(log);
}

/* Logs a test case result in Code Jam's style */
function log(x, i) {
  console.log(`Case #${i + 1}: ${x}`);
}

/* Runs the code above */
require('fs').readFile('input.in', 'utf8', (err, data) => {
  if (err) throw err;
  
  // Text --> array of non empty lines
  const input = data.split('\n').filter(x => x);
  // First line is almost always N, the number of cases
  app(parseInt(input.shift(), 10), input);
});

