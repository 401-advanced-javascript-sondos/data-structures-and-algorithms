'use strict';


const insertShiftArray = require('../array-shift.js');

// const shifArray = require('../array-shift');
describe('test array shift', () => {
  it('test case insert ([4, 8, 15, 23, 42], 16)', () => {
    expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toEqual([4,8,15,16,23,42]);
  });
  it('test case insert ([2,4,6,8], 5)', () => {
    expect(insertShiftArray([2,4,6,8], 5)).toEqual([2,4,5,6,8]);
  });
}); 