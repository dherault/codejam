'use strict';

// const lodash = require('./lodash'); // https://lodash.com, license information in lodash.js file

function app(nCases, input) {
  
  input.map((line, i) => {
    
    let stack = line.split('').map(x => x === '+');
    let counter = 0;
    
    while (!stack.every(x => x)) {
      
      counter++;
      const firstPancake = stack[0];
      
      let flipEndIndex = stack.indexOf(!firstPancake);
      if (flipEndIndex === -1) flipEndIndex = stack.length;
      
      for (let k = 0; k < flipEndIndex; k++) {
        stack[k] = !stack[k];
      }
      // console.log(i, counter, stack.map(x => x ? '+' : '-').join(''), flipEndIndex);
    }
    
    return counter;
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

