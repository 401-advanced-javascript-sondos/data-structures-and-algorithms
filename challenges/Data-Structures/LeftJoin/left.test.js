'use strict';

let leftJoin = require('./leftjoin');

let obj1 = {
  'fond': 'enamored',
  'wrath': 'anger',
  'diligent': 'employed',
  'outfit': 'garb',
  'guide': 'usher',
};

let obj2 = {
  'fond': 'averse',
  'wrath': 'delight',
  'diligent': 'idle',
  'guide': 'follow',
  'flow': 'jam',
};

let output = [
  ['fond', 'enamored', 'averse'],
  ['wrath', 'anger', 'delight'],
  ['diligent', 'employed', 'idle'],
  ['outfit', 'garb', null],
  ['guide', 'usher', 'follow'],
];

describe('test the leftjoin()', () => {
  it('for leftjoin hashtable', () => {
    expect(leftJoin(obj1, obj2)).toEqual(output);
  });
});
