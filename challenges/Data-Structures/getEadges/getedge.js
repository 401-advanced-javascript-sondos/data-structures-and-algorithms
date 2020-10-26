'use strict';

let Graph = require('../graphbft/bft.js').Graph;

class GetEdges extends Graph {

  constructor() {
    super();
  }

  getedges(arr) {
    if (arr.length <= 1) {
      return false;
    }

    let price = 0;

    while (arr.length > 1) {
      let nieghbours = this.getNeighbours(arr[0]);
      nieghbours.forEach(edge => {
        if (edge.vertex == arr[1]) {
          price += edge.weight;
        }
      });

      arr.shift();
    }
    console.log('price', price);
    if (price == 0)
      return `false,${price}$`;

    return `true,${price}$`;

  }



}

module.exports = GetEdges;
