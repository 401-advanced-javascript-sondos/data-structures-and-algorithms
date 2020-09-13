'use strict';

const Node=require('../node.js');

describe('test the node constructor()',()=>{
  let value='test';
  let node= new Node(value);
  it('test the value',()=>{
    expect(node.value).toEqual(value);
  });
  it('test the next',()=>{
    expect(node.next).toBeNull();
  });
});