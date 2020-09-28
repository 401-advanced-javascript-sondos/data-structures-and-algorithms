'use strict';

const {Tree} = require('../tree/tree');
const {Node} = require('../tree/tree');


class Max extends Tree {
  constructor() {
    super();
  }

  Max() {
    var max = null;

    let _max = (node) => {

      if (node.value > max) {
        max = node.value;
        if(node.left) _max(node.left);
        if(node.right ) _max(node.right);
      }

    };

    _max(this.root);
    return max;
  }

}

module.exports=Max;


