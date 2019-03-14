'use strict';

// const lodash = require('./lodash'); // https://lodash.com, license information in lodash.js file

function app(nCases, input) {

  input.map(line => {
    const paramsArray = line.split(' ').map(x => parseInt(x, 10));
    const N = paramsArray[0];
    const J = paramsArray[1];
    const bases = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    const jc = generateAllPseudoJamcoins(N);
    const jcInBasesArrays = jc.map(pseudoJamcoin => bases.map(base => parseInt(pseudoJamcoin, base)));
    const jcLeastFactorArrays = jcInBasesArrays.map(jcInBasesArray => jcInBasesArray.map(leastFactor));
    
    const l = jc.length;
    const resultArray = [];
    
    for (let i = 0; i < l; i++) {
      if (jcInBasesArrays[i].every((x, j) => x !== jcLeastFactorArrays[i][j])) {
        resultArray.push(`${jc[i]} ${jcLeastFactorArrays[i].join(' ')}`);
      }
      if (resultArray.length >= J) break;
    }
    
    return '\n' + resultArray.join('\n');
  }).map(log);
}


function generateAllPseudoJamcoins(n) {
  if (n < 2) throw 'oh no! n < 2';
  if (n === 2) return [11];
  
  const coinjams = [];
  
  // Transforms a coinArray into a coinjam (adds 1 and 1), and puts it in coinjams
  const add = coinArray => coinjams.push(`1${coinArray.map(x => x ? 1 : 0).join('')}1`);
  
  // Binary stuff
  const plusone = (coinArray, i) => {
    if (i < 0) return coinArray;
    coinArray[i] = !coinArray[i];
    return coinArray[i] ? coinArray : plusone(coinArray, i - 1);
  };
  
  // our coinArray, initialized with 'zeros'
  let coin = [];
  for (let i = 0; i < n - 2; i++) {
    coin.push(false);
  }
  add(coin);
  
  // Adds the next binary number to the bag until '11...1'
  do {
    add(plusone(coin, coin.length - 1));
  } while (coin.some(x => !x));
  
  return coinjams;
}


// leastFactor found at http://www.javascripter.net/faq/numberisprime.htm
// Copyright (c) 2011 Alexei Kourbatov, www.JavaScripter.net 

function leastFactor(n){
  if (isNaN(n) || !isFinite(n)) return NaN;  
  if (n === 0) return 0;  
  if (n % 1 || n * n < 2) return 1;
  if (n % 2 === 0) return 2;  
  if (n % 3 === 0) return 3;  
  if (n % 5 === 0) return 5;  
  
  const m = Math.sqrt(n);
  
  for (let i = 7; i <= m; i += 30) {
    if (n % i === 0) return i;
    if (n % (i + 4) === 0) return i + 4;
    if (n % (i + 6) === 0) return i + 6;
    if (n % (i + 10) === 0) return i + 10;
    if (n % (i + 12) === 0) return i + 12;
    if (n % (i + 16) === 0) return i + 16;
    if (n % (i + 22) === 0) return i + 22;
    if (n % (i + 24) === 0) return i + 24;
  }
  
  return n;
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

