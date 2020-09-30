'use strict';

const SumOdd = require('./oddSum');
const { Tree } = require('../tree/tree');

describe(' Tree', () => {
  it('Sum of odd numbers()', () => {
    let t = new Tree();
    expect(t.root).toBeNull();
    t.add(8);
    expect(t.root.value).toEqual(8);
    t.add(3);
    t.add(10);
    t.add(1);
    t.add(6);
    t.add(4);
    t.add(7);
    t.add(14);
    t.add(13);
    expect(t.preorder()).toEqual([8, 3, 1, 6, 4, 7, 10, 14, 13]);
    expect(SumOdd(t)).toEqual(24);


  });
});


describe(' Tree', () => {
  it('Sum of odd numbers()', () => {
    let t = new Tree();
    expect(t.root).toBeNull();
    expect(SumOdd(t)).toEqual(false);
  });
});

