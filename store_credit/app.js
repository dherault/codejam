'use strict';

const lodash = require('./lodash');

function app(input) {

  // your code
  // log(caseNumber, answer);
  const nCases = input[0];
  const cases = [];
  
  for (let i = 0; i < nCases; i++) {
    const offset = i * 3 + 1;
    cases.push({
      credit: parseInt(input[offset], 10),
      nItems: parseInt(input[offset + 1], 10),
      prices: input[offset + 2].split(' ').map(x => parseInt(x, 10)),
    });
    // console.log(cases[i]);
  }
  
  const results = cases.map(acase => {
    const credit = acase.credit;
    const nItems = acase.nItems;
    const prices = acase.prices;
    
    return prices.map((currentPrice, pos) => {
      for (let i = 0; i < nItems; i++) {
        if (i === pos) continue;
        if (prices[i] + currentPrice === credit) return i + 1;
      }
    }).filter(x => typeof x !== 'undefined').sort((a, b) => a > b ? 1 : -1).join(' ');
  });
  
  results.map(log);
  // console.log(results);
}

/* UTILITIES */

function log(x, i) {
  console.log(`Case #${i + 1}: ${x}`);
}

require('fs').readFile('input.in', 'utf8', (err, data) => {
  if (err) throw err;
  app(data.split('\n'));
});