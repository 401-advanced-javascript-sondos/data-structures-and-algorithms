'use strict';

const sumMatrix = require('../code4.js');

// const shifArray = require('../array-shift');
describe('test array summatrix', () => {
  it('test case insert ([ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ])', () => {
    expect(sumMatrix([ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ])).toEqual([6, 5, 20]);
  });
  it('test case insert ([ [1, 2, 3], [3, 5, 7], [1, 7, 10] ])', () => {
    expect(sumMatrix([ [1, 2, 3], [3, 5, 7], [1, 7, 10] ])).toEqual([6,15,18]);
  });
}); 