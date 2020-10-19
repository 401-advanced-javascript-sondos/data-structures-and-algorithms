'use strict';

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}


class Tree {
    constructor(root = null) {
        this.root = root;
    }

    preorder() {
        let output = [];
        let _rec = (node) => {
            output.push(node.value);
            if (node.left)
                _rec(node.left);
            if (node.right)
                _rec(node.right);
        };
        _rec(this.root);
        return output;

    };

}



function treeIntersection(tree1, tree2) {

    if (!tree1.root && !tree2.root)
        return 'Not true input';

       let array1= tree1.preorder();
       let array2=tree2.preorder();
       let match=[];

       array1.forEach(element => {

           array2.forEach(val=>{
               if(element==val)
               match.push(val);
           });

       });
    return match;

}

module.exports = { Node: Node, Tree: Tree, treeIntersection: treeIntersection };