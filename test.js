/**
 * Unit testing script
 */

const { unqVals_Set, unqVals_Map } = require('./unique-values');

/**
 * set of arrays to test
 */
let tests = [
  {
    arr: [9, 3, 3, 0, 1, 4, 1, 3, 6, 6],
    soln: 6
  },
  {
    arr: [1, 2, 1, 2, 3],
    soln: 3
  },
  {
    arr: [],
    soln: 0
  }
];

/** run solnLinearTime on each test array */
tests.forEach((test) => {
  console.log('running test on: ' + test.arr);

  console.log('SET METHOD:');
  let result = unqVals_Set(test.arr);
  console.log('expected=' + test.soln);
  console.log('result=' + result);
  if (test.soln == result) {
    console.log('***SUCCESS***');
  }
  else {
    console.log('***FAILURE***');
  }

  console.log('MAP METHOD:');
  result = unqVals_Map(test.arr);
  console.log('expected=' + test.soln);
  console.log('result=' + result);
  if (test.soln == result) {
    console.log('***SUCCESS***');
  }
  else {
    console.log('***FAILURE***');
  }

  console.log('-----------------')
})