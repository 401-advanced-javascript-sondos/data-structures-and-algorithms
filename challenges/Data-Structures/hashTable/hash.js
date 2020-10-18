'use strict';

const LinkedList = require('../link3/link3');


class HashTable {

  constructor(size) {
    this.size = size;
    this.entries = new Array(size);
  }

  hash(key) {
    let charArr = key.split('');
    return charArr.reduce((p, n) => {
      return p + n.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  add(key, value) {
    let hashIndex = this.hash(key);
    // console.log('hashIndex: ', hashIndex);
    if (!this.entries[hashIndex]) {
      this.entries[hashIndex] = new LinkedList();
    }

    let entry = { [key]: value };
    this.entries[hashIndex].append(entry); // LinkedList append method
  }

  get(key) {
    let hashIndex = this.hash(key);
    return this.entries[hashIndex] ? this.entries[hashIndex] : false;

  }

  contains(key) {
    let hashIndex = this.hash(key);
    console.log('hashindex',hashIndex)
    return this.entries[hashIndex] ? true : false;

  }


}


module.exports = HashTable;