'use strict';

// const lodash = require('./lodash'); // https://lodash.com, license information in lodash.js file

function app(nCases, input) {

  input.map(line => {
    const paramsArray = line.split(' ').map(x => parseInt(x, 10));
    const K = paramsArray[0];
    const C = paramsArray[1];
    const S = paramsArray[2];
    
    const baseArtworks = getAllPossibleBaseArtwork(K);
    const endArtworks = baseArtworks.map(artwork => complexifyArtwork(artwork, C));
    
    const endArtworksThatHaveGoldInBase = endArtworks.slice(1);
    // const nBaseArtworks = baseArtworks.length;
    const invertedEndArtworksThatHaveGoldInBase = [];
    
    endArtworksThatHaveGoldInBase.forEach(artwork => {
      artwork.forEach((tile, i) => {
        if (!invertedEndArtworksThatHaveGoldInBase[i]) invertedEndArtworksThatHaveGoldInBase[i] = [];
        invertedEndArtworksThatHaveGoldInBase[i].push(tile);
      });
    });
    
    const invertedATHGIBIndexesThatHaveSMinusOneLead = invertedEndArtworksThatHaveGoldInBase.map(invertedArtwork => {
      let nLead = 0;
      invertedArtwork.forEach(tile => !tile ? nLead++ : null);
      // console.log(nLead);
      return nLead <= S - 1;
    });
    
    const l = invertedEndArtworksThatHaveGoldInBase.length;
    const invertedATHGIBIndexesThatHaveSMinusOneLeadNoDuplicates = invertedATHGIBIndexesThatHaveSMinusOneLead.map((isTrueIndex, pos) => {
      if (!isTrueIndex) return isTrueIndex;
      
      for (let i = 0; i < pos; i++) {
        let identical = true;
        for (let j = 0; j < l; j++) {
          if (invertedEndArtworksThatHaveGoldInBase[i][j] !== invertedEndArtworksThatHaveGoldInBase[pos][j]) {
            identical = false;
          }
        }
        if (identical) return false;
      }
      
      return true;
    });
    
    // if (invertedATHGIBIndexesThatHaveSMinusOneLeadNoDuplicates.every(index => !index)) return 'IMPOSSIBLE';
    
    const tilesToReveal = [];
    // console.log(l);
    // console.log(invertedATHGIBIndexesThatHaveSMinusOneLeadNoDuplicates.length)
    for (let i = 0; i < l; i++) {
      if (invertedATHGIBIndexesThatHaveSMinusOneLeadNoDuplicates[i]) tilesToReveal.push(i + 1);
    }
    
    return tilesToReveal.length < S ? 'IMPOSSIBLE' : tilesToReveal.slice(0, S).join(' ');
    // const firstTileToReveal = invertedATHGIBIndexesThatHaveSMinusOneLeadNoDuplicates.indexOf()
    // console.log(invertedATHGIBIndexesThatHaveSMinusOneLeadNoDuplicates);
    // console.log('params:', K, C, S);
  }).map(log);
}

function getAllPossibleBaseArtwork(n) {
  const result = [];
  
  const currentTile = getBlankArray(n, false);
  
  result.push(currentTile.slice());
  
  const plusone = (array, i) => {
    if (i < 0) return array;
    array[i] = !array[i];
    return array[i] ? array : plusone(array, i - 1);
  };
  
  do {
    result.push(plusone(currentTile, currentTile.length - 1).slice());
  } while (currentTile.some(x => !x));
  
  return result;
}

function complexifyArtwork(artwork, C) {
  if (C === 1) return artwork;
  
  let newArtwork = [];
  
  artwork.forEach(tile => newArtwork = newArtwork.concat(tile ?
    getBlankArray(artwork.length, true) :
    artwork.slice()
  ));
  
  return complexifyArtwork(newArtwork, C - 1);
}

function getBlankArray(n, v) {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(v);
  }
  return array;
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

