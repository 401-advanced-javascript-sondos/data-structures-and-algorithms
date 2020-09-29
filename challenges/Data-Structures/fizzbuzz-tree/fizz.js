'use strict';

const tree = require('../breadth/breadth');

// class Fuzz extends tree {
//     constructor() {
//         super()
//     };

//     fuzzBuzz() {

//     }
// }

function fuzzBuzz(k) {
  // let newTree = new tree();

  if (!k.root)
    return false;

  // newTree.root = k.root;

  // let node=k.root;
  let _rec = (node) => {
    if (node.left) {
      kAdd(node);
      _rec(node.left);
    }

    if (node.right) {
      kAdd(node);
      _rec(node.right);
    }

  };


  function kAdd(node) {
    if (node.value % 3 == 0 && k.value % 5 == 0) {
      node.value = 'FizzBuzz';
      console.log(node.value);
    } else if (node.value % 3 == 0) {
      node.value = 'Fizz';
      console.log(node.value);

    } else if (node.value % 5 == 0) {
      node.value = 'Buzz';
      console.log(node.value);

    }
  }



  _rec(k.root);
  return k;

}





module.exports = fuzzBuzz;