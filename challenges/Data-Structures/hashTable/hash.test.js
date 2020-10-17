'use strict';

const HashTable = require('./hash');

let myHash = new HashTable(1024);
const key = 'key';
const value = 'value';
myHash.add(key, value);
const hashindex=myHash.hash(key);

const key2 = 'key';
const value2 = 'value';
myHash.add(key2, value2);
const hashindex2=myHash.hash(key2);

describe('test the hashtable constructor()', () => {

  it('test the value', () => {
    expect(myHash.entries[hashindex]).toBeTruthy();
    expect(myHash.entries[463]).toBeTruthy();
    expect(myHash.entries[hashindex2]).toBeTruthy();

  });


  it('test the hashtable get',()=>{
    expect(myHash.get(key)).toBeTruthy();
    expect(myHash.get('key2')).toBeFalsy();
    expect(myHash.get(key).value).toEqual();
    expect(myHash.get(key).head.value).toStrictEqual({'key': 'value'});
    expect(myHash.get(key).head.next.value).toStrictEqual({'key': 'value'});
  });


  it('test the hashtable contains',()=>{
    expect(myHash.contains(key)).toBeTruthy();
    expect(myHash.contains('key2')).toBeFalsy();
  });
});