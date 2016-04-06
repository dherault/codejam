'use strict';

const lodash = require('./lodash'); // https://lodash.com, license information in lodash.js file

function app(nCases, input) {

  // NO RESPECT !!!!
  const t9 = {
    a: '2',
    b: '22',
    c: '222',
    d: '3',
    e: '33',
    f: '333',
    g: '4',
    h: '44',
    i: '444',
    j: '5',
    k: '55',
    l: '555',
    m: '6',
    n: '66',
    o: '666',
    p: '7',
    q: '77',
    r: '777',
    s: '7777',
    t: '8',
    u: '88',
    v: '888',
    w: '9',
    x: '99',
    y: '999',
    z: '9999',
    ' ': '0',
  };
  
  input.map(line => {
    let encodedLine = '';
    line.split('').forEach(char => {
      
      const encodedChar = t9[char];
      if (encodedLine.endsWith(encodedChar.charAt(0))) encodedLine += ' ';
      encodedLine += encodedChar;
    });
    
    return encodedLine;
  }).map(log);
}

/* Log a test case result in Code Jam's style */
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

