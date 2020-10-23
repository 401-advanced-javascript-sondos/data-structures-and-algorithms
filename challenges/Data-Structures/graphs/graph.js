'use strict';

// vertex wich reprsent the nodes
class Vertex {
  constructor(value) {
    this.value = value;
  }
}


// edge which represent the line beteween nodes 
class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}



class Graph {
  constructor() {
    this.list = new Map();
  }


  // AddNode(node)
  addVertex(vertex) {
    // const node=new Vertex(vertex);
    this.list.set(vertex, []);
    return vertex;
  }

  // AddEdge(start,end,wt)
  addEdge(startVertex, endVertex, weight) {
    if (!this.list.has(startVertex) || !this.list.has(endVertex)) {
      // console.log("Vertex not found !!!");
      return 'Vertex not found !!!';
    } else {
      const adjacencies = this.list.get(startVertex);
      adjacencies.push(new Edge(endVertex, weight));
      return Edge;
    }

  }

  // GetNeighbors()
  getNeighbours(vertex) {
    if (!this.list.has(vertex)) {
      // console.log('vertex does not exist');
      return 'vertex does not exist';
    } else {
      return this.list.get(vertex);
    }
  }



  // GetNodes()
  getNodes() {
    console.log('intr',this.list.entries());
    // let arr = [];
    // for (const [vertex, edge] of this.list.entries()) {
    //     console.log("V ====> ", vertex);
    //     console.log("E ====> ", edge);
    //   let  output = `node---->${vertex} ,edge-->${edge}`;
    //     console.log("arr ====> ", arr);
    //     arr.push({vertex:edge});

    // }
    // close.log(arr)
    return this.list.entries();
  }


  // Get size
  getSize() {
    return this.list.size;
  }


}

module.exports = { Vertex: Vertex, Edge: Edge, Graph: Graph };