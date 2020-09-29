'use strict';

const Tree = require('../breadth/breadth');
const fizz=require('./fizz');


describe(' Tree', () => {
  it('fuzzBuzz', () => {
    let t = new Tree();
    expect(t.root).toBeNull();
    t.add(5);
    expect(t.root.value).toEqual(5);
    t.add(6);
    t.add(4);
    t.add(8);
    t.add(1);
    expect(t.preorder()).toEqual([5, 4, 1, 6, 8]);
    expect(t.breadth()).toStrictEqual([5, 4, 6, 1, 8]);
    let newTree=fizz(t);
    expect(newTree.preorder()).toEqual(['Buzz', 4, 1, 'Fizz', 8]);


  });
});


