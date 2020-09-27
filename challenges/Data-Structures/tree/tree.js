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
    };

    //root left right
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

    //left root right
    inorder() {
        let output = [];
        let _rec = (node) => {
            if (node.left)
                _rec(node.left);
            output.push(node.value);

            if (node.right)
                _rec(node.right);
        }
        _rec(this.root);
        return output;

    };


    //left right root 
    postorder() {
        let output = [];
        let _rec = (node) => {
            if (node.left)
                _rec(node.left);
            if (node.right)
                _rec(node.right);
            output.push(node.value);
        }
        _rec(this.root);
        return output;

    };


    add(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this.root;
        };

        let _add = (node) => {
            if (node.value > value) {
                if (node.left) {
                    _add(node.left);

                } else { node.left = newNode; }

            } else {
                if (node.right) {
                    _add(node.right);

                } else { node.right = newNode; };
            };
        };

        _add(this.root);
        return this.root;
    };

    contains(val) {

        if (this.root == val)
            return true;

        let _search = (node) => {
            if(node==null) return false;

            // console.log(node.value);
            if (node.value == val){
                return true;

            }else if(node.value > val){
             return   _search(node.left);

            }else if (node.value < val)
             return   _search(node.right);
        }
        return (_search(this.root));
    };

};



module.exports = { Node: Node, Tree: Tree };