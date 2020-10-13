'use strict';

const sort=require('./quick');


describe('Quick Sort', () => {

  it('function output should be sotred array', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    expect(sort(arr,0,5)).toEqual([4,8,15,16,23,42]);
  });

});