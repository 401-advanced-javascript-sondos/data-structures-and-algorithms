
'use strict';

let Graph = require('../graphbft/bft.js').Graph;


class isRecahable extends Graph {

    constructor() {
        super();
    }

    dfs(node, node2) {
        if (node.value == null || node == undefined) {

            return 'wrong input';
        }

        let arr = [];
        let complete = [];
        arr.push(node);
        // complete.push(node.value)
        // let current;

        while (arr.length > 0) {
            let current = arr.pop();
            // console.log('cc',current)
            complete.push(current.value);
            let ni = this.getNeighbours(current);

            for (let k of ni) {
                // console.log('k', k.vertex);
                if (!arr.includes(k.vertex)) {
                    if (k.vertex == node2)
                        return true;

                    arr.push(k.vertex);
                }

            }
            console.log(arr);

        }
        return false;

    }
}