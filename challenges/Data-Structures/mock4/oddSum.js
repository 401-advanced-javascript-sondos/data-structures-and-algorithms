'use strict';

function SumOdd(Tree) {
  if (!Tree.root)
    return false;
  let sumOdd = 0;
  let _sum = (node) => {
    if (node.value % 2 != 0) sumOdd += node.value;

    if (node.left)
      _sum(node.left);
    if (node.right)
      _sum(node.right);
  };
  _sum(Tree.root);
  return sumOdd;
}


module.exports = SumOdd;