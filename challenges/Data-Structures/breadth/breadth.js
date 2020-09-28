'use strict';

const tree = require('../maxtree/max');

class Breadth extends tree {
  constructor() {
    super();
  }

  breadth() {
    let result = [];

    let temp = [];
    if (this.root) temp.push(this.root);
    while (temp.length > 0) {
      let item = temp.shift();
      result.push(item.value);
      if (item.left) {
        temp.push(item.left);
      }
      if (item.right) {
        temp.push(item.right);
      }
    }
    return result;
  }
}

module.exports = Breadth;