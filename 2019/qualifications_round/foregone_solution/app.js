function app(nCases, input) {
  // console.log(nCases, input)

  input.forEach((input, k) => {
    const top =  Math.ceil(input / 2)

    for (let i = 0; i < top; i++) {
      if (positionOf4(i) === -1 && positionOf4(input - i) === -1) {
        log(k + 1, `${i} ${input - i}`)
        break;
      }
    }
  })
}

function positionOf4(n) {
  return n.toString().indexOf('4')
}

/* Logs a test case result in Code Jam's style */
function log(k, x) {
  console.log(`Case #${k}: ${x}`);
}

process.stdin.on('data', data => {
  const input = data.toString().split('\n').filter(x => x);
  // First line is almost always N, the number of cases
  app(parseInt(input.shift(), 10), input);
})
